function renderMenu() {
  const container = document.getElementById("menu");

  menu.forEach(section => {
    const sectionBlock = document.createElement("section");

    sectionBlock.innerHTML = `
      <h2>${section.category}</h2>
      <div class="grid">
        ${section.items.map(item => `
          <div class="card" onclick="openModal('${item.name}')">
            <img src="${item.image}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <strong>${item.price}</strong>
          </div>
        `).join("")}
      </div>
    `;

    container.appendChild(sectionBlock);
  });
}

function openModal(name) {
  let found;

  menu.forEach(section => {
    section.items.forEach(item => {
      if (item.name === name) {
        found = item;
      }
    });
  });

  document.getElementById("modal-title").textContent = found.name;
  document.getElementById("modal-description").textContent = found.description;
  document.getElementById("modal-price").textContent = found.price;

  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

window.onload = renderMenu;