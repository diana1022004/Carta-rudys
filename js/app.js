// ============================================
// VARIABLES GLOBALES
// ============================================

let currentFilter = 'todos';
let splashTimeout;

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initSplash();
  renderGallery();
  setupEventListeners();
});

// ============================================
// SPLASH SCREEN
// ============================================

function initSplash() {
  splashTimeout = setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.style.opacity = '0';
    splash.style.pointerEvents = 'none';
  }, 3500);
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
  // Cerrar splash al hacer click
  document.getElementById('splash').addEventListener('click', () => {
    clearTimeout(splashTimeout);
    document.getElementById('splash').style.display = 'none';
  });

  // Cerrar modal al presionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeReservaModal();
      toggleMenu(true);
    }
  });
}

// ============================================
// RENDERIZADO DE GALERÍA
// ============================================

function renderGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  const filteredItems = currentFilter === 'todos'
    ? menu
    : menu.filter(item => item.category === currentFilter);

  filteredItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="product-image">
        ${item.emoji ? item.image : `<img src="${item.image}" alt="${item.name}">`}
      </div>
      <div class="product-info">
        <p class="product-category">${getCategoryName(item.category)}</p>
        <h3 class="product-name">${item.name}</h3>
        <p class="product-description">${item.description}</p>
        <p class="product-price">$${item.price.toLocaleString('es-CO')}</p>
      </div>
    `;
    card.onclick = () => openProductModal(item);
    gallery.appendChild(card);
  });
}

function getCategoryName(cat) {
  const names = {
    'todos': 'Todos',
    'clasicos': 'Cóctel Clásico',
    'autor': 'Cóctel de Autor',
    'sinlicor': 'Sin Licor',
    'bebidas': 'Bebidas',
    'comidas': 'Comidas'
  };
  return names[cat] || cat;
}

// ============================================
// FILTRADO POR CATEGORÍA
// ============================================

function filterCategory(category) {
  currentFilter = category;

  // Actualizar botones activos
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  // Renderizar galería filtrada
  renderGallery();
}

// ============================================
// MODAL DE PRODUCTO
// ============================================

function openProductModal(product) {
  document.getElementById('productModal').classList.remove('hidden');
  document.getElementById('modalImage').textContent = product.emoji ? product.image : '';
  if (!product.emoji) {
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').style.fontSize = 'initial';
  } else {
    document.getElementById('modalImage').style.fontSize = '4em';
    document.getElementById('modalImage').style.display = 'flex';
    document.getElementById('modalImage').style.alignItems = 'center';
    document.getElementById('modalImage').style.justifyContent = 'center';
    document.getElementById('modalImage').style.minHeight = '200px';
  }
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDescription').textContent = product.description;
  document.getElementById('modalIngredients').textContent = product.ingredients;
  document.getElementById('modalPrice').textContent = `$${product.price.toLocaleString('es-CO')}`;

  // Scroll al top del modal
  document.querySelector('.modal-content').scrollTop = 0;
}

function closeModal() {
  document.getElementById('productModal').classList.add('hidden');
}

// ============================================
// MODAL DE RESERVA
// ============================================

function openReservaModal() {
  document.getElementById('reservaModal').classList.remove('hidden');
  toggleMenu(true);
}

function closeReservaModal() {
  document.getElementById('reservaModal').classList.add('hidden');
}

function submitReserva(e) {
  e.preventDefault();
  
  const form = e.target;
  const nombre = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const telefono = form.querySelector('input[type="tel"]').value;
  const fecha = form.querySelectorAll('input[type="date"]')[0].value;
  const hora = form.querySelectorAll('input[type="time"]')[0].value;
  const personas = form.querySelector('select').value;
  const notas = form.querySelector('textarea').value;

  // Enviar a Formspree
  fetch('https://formspree.io/f/mzdoregn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre,
      email,
      telefono,
      fecha,
      hora,
      personas,
      notas
    })
  })
  .then(response => response.json())
  .then(data => {
    alert('¡Reserva confirmada! Recibirás un email en breve 🎉');
    closeReservaModal();
    form.reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Hubo un error. Intenta de nuevo.');
  });
}

// ============================================
// MENÚ MÓVIL
// ============================================

function toggleMenu(close = false) {
  const menu = document.getElementById('mobileMenu');
  if (close) {
    menu.classList.add('hidden');
  } else {
    menu.classList.toggle('hidden');
  }
}

// ============================================
// NAVEGACIÓN SUAVE
// ============================================

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    toggleMenu(true);
  }
}

function scrollToMenu() {
  scrollToSection('menu');
}

// ============================================
// VALIDACIÓN DE EMOJIS EN MODALES
// ============================================

function renderEmojiImage(emoji, element) {
  element.textContent = emoji;
  element.style.fontSize = '4em';
  element.style.display = 'flex';
  element.style.alignItems = 'center';
  element.style.justifyContent = 'center';
  element.style.minHeight = '200px';
  element.style.background = 'rgba(13, 31, 45, 0.5)';
  element.style.borderRadius = '12px';
}