document.addEventListener("keyup", (buscar) => {
  if (buscar.target.matches("#buscador")) {
    document.querySelectorAll(".card").forEach((juego) => {
      juego.textContent.toLowerCase().includes(buscar.target.value.toLowerCase())
        ? juego.classList.remove("filtro")
        : juego.classList.add("filtro");
    });
  }
});
