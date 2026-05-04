function filtrar(categoria) {
  const items = document.querySelectorAll(".card");

  items.forEach(item => {
    if (categoria === "todos") {
      item.style.display = "block";
    } else {
      if (item.classList.contains(categoria)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
}

function cambiarModo() {
  document.body.classList.toggle("neon");
}
window.onload = () => {
  alert("🔥 Bienvenido a Rudy's Bar 🔥");
};

function pedir(nombre) {
  alert("Has agregado " + nombre + " a tu pedido 🍸");
}