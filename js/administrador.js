import Juego from "./classJuego.js";

let listaJuegos = JSON.parse(localStorage.getItem("listaJuegos")) || [];

if (listaJuegos.length !== 0) {
  listaJuegos = listaJuegos.map(
    (juego) =>
      new Juego(
        juego.nombre,
        juego.comprar,
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
let codigo = document.getElementById("codigo"),
  nombre = document.getElementById("nombre"),
  comprar = document.getElementById("comprar"),
  imagen = document.getElementById("imagen"),
  desarrollador = document.getElementById("desarrollador"),
  genero = document.getElementById("genero"),
  jugadores = document.getElementById("jugadores"),
  idioma = document.getElementById("idioma"),
  lanzamiento = document.getElementById("lanzamiento"),
  edad = document.getElementById("edad");
  descripcion = document.getElementById("descripcion");
  requisitos = document.getElementById("requisitos");
  recomendado = document.getElementById("recomendado");
  let modalFormJuego = new bootstrap.Modal(document.getElementById("modalJuego"));
  console.log(modalFormJuego);
  let btnCrearJuego = document.getElementById("btnCrearJuego");
  let crearJuegoNuevo = true;



  formularioAdminJuego.addEventListener("submit", prepararFormulario);
  btnCrearJuego.addEventListener("click", mostrarFormularioJuego);

cargaInicial();

function cargaInicial() {
  if (listaJuegos.length > 0) {
   listaJuegos.map((juego, indice) => crearFila(juego, indice + 1));
  }
}

function crearFila(juego, indice) {
  let tbody = document.querySelector("#tablaJuego");
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
    <button class="btn btn-warning" onclick="prepararJuego('${juego.codigo}')" >
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
  console.log("aqui creo el juego");
  if(crearJuegoNuevo){
    crearJuego();
  }else{
    editarJuego();
  }
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
      undefined,
      nombre.value,
      comprar.value,
      imagen.value,
      desarrollador.value,
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
      
  localStorage.setItem("listaJuegos", JSON.stringify(listaJuegos));
   limpiarFormulario();
   crearFila(JuegoNuevo, listaJuegos.length);
    modalFormJuegos.hide();
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
  crearJuegoNuevo= true;
  limpiarFormulario();
  modalFormJuego.show();
}

window.borrarJuego = (codigo) => {
  Swal.fire({
    title: "¿Esta seguro de eliminar este juego?",
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
     
    let tbody = document.querySelector("#tablaJuego");
      tbody.removeChild(tbody.children[posicionJuego]);
      
      Swal.fire("Juego eliminado", "El juego seleccionado  fue eliminado correctamente", "success");
    }
  });
};

window.prepararJuego = (codigoJuego)=>{
  
  let juegoBuscado = listaJuegos.find((juego)=> juego.codigo === codigoJuego);
  console.log(juegoBuscado);
  
  modalFormJuego.show();
  codigo.value = juegoBuscado.codigo;
  nombre.value = juegoBuscado.nombre;
  imagen.value = juegoBuscado.imagen;
  descripcion.value = juegoBuscado.descripcion;
  precio.value = juegoBuscado.precio;
  genero.value = juegoBuscado.genero;
  jugadores.value = juegoBuscado.jugadores;
  requisitos.value = juegoBuscado.requisitos;

  crearPeliculaNueva= false;
}

function editarJuego(){
  console.log('editar')
  let posicionJuego = listaJuegos.findIndex((juego)=> Juego.codigo === codigo.value);
  console.log(posicionJuego);
  
  listaJuegos[posicionJuego].nombre = nombre.value;
  listaJuegos[posicionJuego].descripcion = descripcion.value;
  listaJuegos[posicionJuego].imagen = imagen.value;
  listaJuegos[posicionJuego].desarrollador = desarrollador.value;
  listaJuegos[posicionJuego].genero = genero.value;
  listaJuegos[posicionJuego].jugadores = jugadores.value;
  listaJuegos[posicionJuego].idioma = idioma.value;
  listaJuegos[posicionJuego].lanzamiento = lanzamiento.value;
  listaJuegos[posicionJuego].edad = edad.value;
  listaJuegos[posicionJuego].requisitos = requisitos.requisitos;
  listaJuegos[posicionJuego].recomendado = recomendado.value;
  
  
  guardarEnLocalstorage();
  
  let tbody = document.querySelector("#tablaJuego");
  console.log(tbody.children[posicionJuego].children[1]);
  tbody.children[posicionJuego].children[1].innerHTML = nombre.value;
  tbody.children[posicionJuego].children[2].innerHTML = descripcion.value;
  tbody.children[posicionJuego].children[3].innerHTML = imagen.value;
  tbody.children[posicionJuego].children[4].innerHTML = genero.value;
  limpiarFormulario();
  modalFormJuego.hide();
  Swal.fire("Juego modificado", "El juego seleccionado fue modificada exitosamente", "success");
}
