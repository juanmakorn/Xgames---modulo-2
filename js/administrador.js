import Juego from "./classJuego.js";


let listaJuegos = JSON.parse(localStorage.getItem("listaJuegos")) || [];

if (listaJuegos.length !== 0) {
  listaJuegos = listaJuegos.map(
    (juego) =>
      new Juego(
        juego.nombre,
        juego.descripcion,
        juego.imagen,
        juego.genero,
        juego.precio,
        juego.jugadores,
        juego.idioma,
        juego.lanzamiento,
        juego.edad,
        juego.requisitos,
        juego.recomendado
      )
  );
}
console.log(listaJuegos);

let formularioAdminJuego = document.getElementById("formJuego");
let codigo = document.getElementById("codigo"),
  nombre = document.getElementById("nombre"),
  descripcion = document.getElementById("descripcion"),
  imagen = document.getElementById("imagen"),
  genero = document.getElementById("genero"),
  precio = document.getElementById("precio"),
  desarrollador = document.getElementById("desarrollador"),
  jugadores = document.getElementById("jugadores"),
  idioma = document.getElementById("idioma"),
  lanzamiento = document.getElementById("lanzamiento"),
  edad = document.getElementById("edad");
  requisitos = document.getElementById("requisitos");
  recomendado = document.getElementById("recomendado");
  let modalFormJuego = new bootstrap.Modal(document.getElementById("modalJuego"));
  console.log(modalFormJuego);
  let btnCrearJuego = document.getElementById("btnCrearJuego");

formularioAdminJuego.addEventListener("submit", prepararFormulario);
btnCrearJuego.addEventListener("click", mostrarFormularioJuego);

cargaInicial();

function cargaInicial() {
  if (listaJuegos.length > 0) {
    listaJuegos.map((juego) => crearFila(juego));
  }
}

function crearFila(juego) {
  let tbody = document.querySelector("#tablaJuego");
  tbody.innerHTML += `<tr>
  <td scope="col">1</td>
  <td>${juego.nombre}</td>
  <td class="tamanioCelda text-truncate">
    ${juego.descripcion}
  </td>
  <td class="tamanioCelda text-truncate">
    ${juego.imagen}
  </td>
  <td>${juego.genero}</td>
  <td>
    <button class="btn btn-warning">
      <i class="bi bi-pencil-square"></i>
    </button>
    <button class="btn btn-danger">
      <i class="bi bi-x-square"></i>
    </button>
  </td>
</tr>`;
}

function prepararFormulario(e) {
  e.preventDefault();
  console.log("aqui creo el juego");
  crearJuego();
}

function crearJuego() {
  let resumen = sumarioValidacion(
    nombre.value,
    descripcion.value,
    desarrollador.value,
    imagen.value,
    precio.value
  );

  if (resumen.length === 0) {
    const juegoNuevo = new Juego(
      nombre.value,
      descripcion.value,
      imagen.value,
      genero.value,
      precio.value,
      desarrollador.value,
      jugadores.value,
      idioma.value,
      lanzamiento.value,
      edad.value,
      requisitos.value,
      recomendado.value
    );
    console.log(juegoNuevo);
    listaJuegos.push(juegoNuevo);
    console.log(listaJuegos);
    localStorage.setItem("listaJuegos", JSON.stringify(listaJuegos));

    limpiarFormulario();
    modalFormJuego.hide();
  } else {
    let alerta = document.getElementById("alerta");
    alerta.innerHTML = resumen;
    alerta.className = "alert alert-danger mt-3";
  }
}

function limpiarFormulario() {
  formularioAdminJuego.reset();
}

function mostrarFormularioJuego() {
  modalFormJuego.show();
}
