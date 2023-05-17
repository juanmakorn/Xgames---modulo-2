import Juego from "./classJuegos.js";
import { sumarioValidacion } from "./helpers.js";

let listaJuegos = JSON.parse(localStorage.getItem("listaJuegos")) || [];

if (listaJuegos.length !== 0) {
  listaJuegos = listaJuegos.map(
    (juego) =>
      new Juego(
        juego.codigo,
        juego.nombre,
        juego.imagen,
        juego.genero,
        juego.jugadores,
        juego.idioma,
        juego.lanzamiento,
        juego.edad,
        juego.descripcion,
        juego.requisitos,
        juego.recomendado
      )
  );
}

console.log(listaJuegos);

let formularioAdminJuego = document.getElementById("formJuego");
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let imagen = document.getElementById("imagen");

let genero = document.getElementById("genero");
let jugadores = document.getElementById("jugadores");
let idioma = document.getElementById("idioma");
let lanzamiento = document.getElementById("lanzamiento");
let edad = document.getElementById("edad");
let descripcion = document.getElementById("descripcion");
let requisitos = document.getElementById("requisitos");
let recomendado = document.getElementById("recomendado");
let modalFormJuego = new bootstrap.Modal(document.getElementById("modalJuego"));
let btnCrearJuego = document.getElementById("btnCrearJuego");
let crearJuegoNuevo = true;

formularioAdminJuego.addEventListener("submit", prepararFormulario);
btnCrearJuego.addEventListener("click", mostrarFormularioJuego);

cargaInicial();

function cargaInicial() {
  if (listaJuegos.length > 0) {
    listaJuegos.forEach((juego, indice) => crearFila(juego, indice + 1));
  }
}

function crearFila(juego, indice) {
  let tbody = document.querySelector("#tablaJuegos");
  tbody.innerHTML += `<tr>
    <td scope="col">${indice}</td>
    <td>${juego.nombre}</td>
    <td class="tamanioCelda text-truncate">
      ${juego.descripcion}
    </td>
    <td class="tamanioCelda text-truncate">
      ${juego.imagen}
    </td>
    <td>${juego.genero}</td>
    <td>
      <button class="btn btn-warning" onclick="prepararJuego('${juego.codigo}')">
        <i class="bi bi-pencil-square"></i>
      </button>
      <button class="btn btn-danger" onclick="borrarJuego('${juego.codigo}')">
        <i class="bi bi-x-square"></i>
      </button>
    </td>
  </tr>`;
}

function prepararFormulario(e) {
  e.preventDefault();
  console.log("Aquí creo el juego");
  if (crearJuegoNuevo) {
    crearJuego();
  } else {
    editarJuego();
  }
}

function crearJuego() {
  const resumen = sumarioValidacion(
    nombre.value,
    descripcion.value,
    imagen.value,
    requisitos.value
  );
  if (resumen.length === 0) {
    const juegoNuevo = new Juego(
      codigo.value,
      nombre.value,
      imagen.value,
      genero.value,
      jugadores.value,
      idioma.value,
      lanzamiento.value,
      edad.value,
      descripcion.value,
      requisitos.value,
      recomendado.value
    );
    console.log(juegoNuevo);
    listaJuegos.push(juegoNuevo);
    console.log(listaJuegos);

    guardarEnLocalstorage();
    limpiarFormulario();
    crearFila(juegoNuevo, listaJuegos.length);
    modalFormJuego.hide();
  } else {
    let alerta = document.getElementById("alerta");
    alerta.innerHTML = resumen;
    alerta.className = "alert alert-danger mt-3";
  }
}

function guardarEnLocalstorage() {
  localStorage.setItem("listaJuegos", JSON.stringify(listaJuegos));
}

function limpiarFormulario() {
  formularioAdminJuego.reset();
}

function mostrarFormularioJuego() {
  crearJuegoNuevo = true;
  limpiarFormulario();
  modalFormJuego.show();
}

window.borrarJuego = (codigo) => {
  Swal.fire({
    title: "¿Estás seguro de eliminar este juego?",
    text: "No se puede revertir este proceso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      let posicionJuego = listaJuegos.findIndex(
        (juego) => juego.codigo === codigo
      );
      listaJuegos.splice(posicionJuego, 1);

      guardarEnLocalstorage();

      let tbody = document.querySelector("#tablaJuegos");
      tbody.removeChild(tbody.children[posicionJuego]);

      Swal.fire(
        "Juego eliminado",
        "El juego seleccionado fue eliminado correctamente",
        "success"
      );
    }
  });
};

window.prepararJuego = (codigoJuego) => {
  let juegoBuscado = listaJuegos.find((juego) => juego.codigo === codigoJuego);
  console.log(juegoBuscado);

  modalFormJuego.show();
  codigo.value = juegoBuscado.codigo;
  nombre.value = juegoBuscado.nombre;
  imagen.value = juegoBuscado.imagen;
  descripcion.value = juegoBuscado.descripcion;

  genero.value = juegoBuscado.genero;
  jugadores.value = juegoBuscado.jugadores;
  idioma.value = juegoBuscado.idioma;
  lanzamiento.value = juegoBuscado.lanzamiento;
  edad.value = juegoBuscado.edad;
  requisitos.value = juegoBuscado.requisitos;
  recomendado.value = juegoBuscado.recomendado;

  crearJuegoNuevo = false;
};

function editarJuego() {
  console.log("editar");
  let posicionJuego = listaJuegos.findIndex(
    (juego) => juego.codigo === codigo.value
  );
  console.log(posicionJuego);

  listaJuegos[posicionJuego].nombre = nombre.value;
  listaJuegos[posicionJuego].imagen = imagen.value;

  listaJuegos[posicionJuego].genero = genero.value;
  listaJuegos[posicionJuego].jugadores = jugadores.value;
  listaJuegos[posicionJuego].idioma = idioma.value;
  listaJuegos[posicionJuego].lanzamiento = lanzamiento.value;
  listaJuegos[posicionJuego].edad = edad.value;
  listaJuegos[posicionJuego].descripcion = descripcion.value;
  listaJuegos[posicionJuego].requisitos = requisitos.value;
  listaJuegos[posicionJuego].recomendado = recomendado.value;

  guardarEnLocalstorage();

  let tbody = document.querySelector("#tablaJuegos");
  console.log(tbody.children[posicionJuego].children[1]);
  tbody.children[posicionJuego].children[1].innerHTML = nombre.value;
  tbody.children[posicionJuego].children[2].innerHTML = descripcion.value;
  tbody.children[posicionJuego].children[3].innerHTML = imagen.value;
  tbody.children[posicionJuego].children[4].innerHTML = genero.value;
  limpiarFormulario();
  modalFormJuego.hide();
  Swal.fire(
    "Juego modificado",
    "El juego seleccionado fue modificado exitosamente",
    "success"
  );
}