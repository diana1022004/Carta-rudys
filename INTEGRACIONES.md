<!-- INTEGRACIÓN DE FORMULARIO DE RESERVAS -->

<!-- OPCIÓN 1: FORMSPREE (Recomendado - Gratis) -->

<!-- Cambiar en index.html, reemplazar submitReserva por: -->

<!--
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
  fetch('https://formspree.io/f/TU_FORM_ID', {
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
-->

<!-- PASOS PARA FORMSPREE: -->
<!-- 1. Ve a https://formspree.io -->
<!-- 2. Crea una cuenta (usa tu email) -->
<!-- 3. Crea nuevo proyecto/formulario -->
<!-- 4. Obtén tu Form ID (aparece en https://formspree.io/f/XXXXXXX) -->
<!-- 5. Reemplaza 'TU_FORM_ID' en el código anterior -->

---

<!-- OPCIÓN 2: FIREBASE (Más complejo pero poderoso) -->

<!-- Agregar en <head> de index.html: -->
<!--
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/latest/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/latest/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  window.submitReserva = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      await addDoc(collection(db, "reservas"), {
        nombre: form.querySelector('input[type="text"]').value,
        email: form.querySelector('input[type="email"]').value,
        telefono: form.querySelector('input[type="tel"]').value,
        fecha: form.querySelectorAll('input[type="date"]')[0].value,
        hora: form.querySelectorAll('input[type="time"]')[0].value,
        personas: form.querySelector('select').value,
        notas: form.querySelector('textarea').value,
        timestamp: new Date()
      });
      
      alert('¡Reserva confirmada! 🎉');
      closeReservaModal();
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      alert('Error al guardar la reserva');
    }
  };
</script>
-->

---

<!-- OPCIÓN 3: ENVIAR A TU EMAIL CON EMAILJS -->

<!-- Agregar en <head> de index.html: -->
<!--
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
<script type="text/javascript">
  emailjs.init("TU_PUBLIC_KEY"); // Obtener en https://www.emailjs.com
</script>
-->

<!-- Cambiar submitReserva por: -->
<!--
function submitReserva(e) {
  e.preventDefault();
  const form = e.target;
  
  emailjs.sendForm('service_ID', 'template_ID', form)
    .then(() => {
      alert('¡Reserva confirmada! Se envió a tu email 🎉');
      closeReservaModal();
      form.reset();
    })
    .catch((err) => console.error(err));
}
-->

---

<!-- OPCIÓN 4: SIMPLE - GUARDAR EN LOCAL STORAGE (Demo) -->

<!--
function submitReserva(e) {
  e.preventDefault();
  const form = e.target;
  
  const reserva = {
    nombre: form.querySelector('input[type="text"]').value,
    email: form.querySelector('input[type="email"]').value,
    telefono: form.querySelector('input[type="tel"]').value,
    fecha: form.querySelectorAll('input[type="date"]')[0].value,
    hora: form.querySelectorAll('input[type="time"]')[0].value,
    personas: form.querySelector('select').value,
    notas: form.querySelector('textarea').value
  };
  
  // Guardar en Local Storage
  let reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
  reservas.push(reserva);
  localStorage.setItem('reservas', JSON.stringify(reservas));
  
  alert('¡Reserva guardada! Contactaremos pronto 🎉');
  closeReservaModal();
  form.reset();
}
-->

---

## RECOMENDACIÓN:

**Para empezar**: Usa Formspree (Opción 1)
- No requiere configuración compleja
- Gratis hasta 50 envíos/mes
- Recibes emails automáticamente

**Para producción**: Firebase (Opción 2)
- Almacena datos en base de datos
- Panel de administración
- Más control

**Para testing**: Local Storage (Opción 4)
- Sin backend requerido
- Perfecto para desarrollo

