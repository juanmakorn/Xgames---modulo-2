let listaJuegos = JSON.parse(localStorage.getItem("listaJuegos")) || [];

listaJuegos.map((juegos) => {
  crearColumna(juegos);
});

function crearColumna(juego) {
  let grilla = document.querySelector("#grilla");
  grilla.innerHTML += `
     <aside class="col-12 col-md-4 col-lg-3 mb-3">
     <div class="card h-100" >
      <img src="${juego.imagen}" class="card-img-top" alt="${juego.nombre}">
      <div class="card-body">
        <h5 class="card-title">${juego.nombre}</h5>
      </div>
      <div class='card-footer'>
      <button class="btn btn-primary" onclick="navegarDetalleJuego('${juego.codigo}')">ver detalle</button>
      </div>
     </div>
     </aside>
    `;
}

function navegarDetalleJuego(codigo) {
  console.log(codigo);
  console.log(window.location);
  console.log(
    window.location.origin + "/pages/detalleJuegos.html?codigo=" + codigo
  );
  window.location.href =
    window.location.origin + "/pages/detalleJuegos.html?codigo=" + codigo;
}

document.addEventListener("keyup", (buscar) => {
  if (buscar.target.matches("#buscador")) {
    document.querySelectorAll(".card").forEach((juego) => {
      juego.textContent
        .toLowerCase()
        .includes(buscar.target.value.toLowerCase())
        ? juego.classList.remove("filtro")
        : juego.classList.add("filtro");
    });
  }
});
