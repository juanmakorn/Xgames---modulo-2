/*let btnComentar = document.querySelector('form');
let article = document.getElementById('article');
let myModal = new bootstrap.Modal(document.getElementById('comentarioModal'));
let nombre = document.getElementById('nombre');
let comentario = document.getElementById('comentario');

//agregar Eventos
btnComentar.addEventListener('submit', escribirComentario);

function escribirComentario(e) {
  e.preventDefault();
  const div = document.createElement("div");
  div.className = "card";
  const div2 = document.createElement("div");
  div2.className = "card-header";
  div2.innerHTML = e.target[0].value;
  const div3 = document.createElement("div");
  div3.className = "card-body";
  const p = document.createElement("p");
  p.className = "text-secondary";
  p.innerHTML = e.target[1].value;
  div3.appendChild(p);
  div.appendChild(div2);
  div.appendChild(div3);
  const br = document.createElement("br");
  article.appendChild(div);
  article.appendChild(br);
  btnComentar.reset();
  myModal.hide();
   // Almacenar el comentario en el LocalStorage
   const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
   comentarios.push({
     nombre: e.target[0].value,
     comentario: e.target[1].value
    });
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
}*/

// Obtener los elementos del DOM
let btnComentar = document.querySelector("form");
let article = document.getElementById("article");
let myModal = new bootstrap.Modal(document.getElementById("comentarioModal"));
let nombre = document.getElementById("nombre");
let comentario = document.getElementById("comentario");

// Agregar eventos
btnComentar.addEventListener("submit", escribirComentario);

// Cargar comentarios almacenados al cargar la página
window.addEventListener("load", cargarComentarios);

function escribirComentario(e) {
  e.preventDefault();

  // Crear el objeto de comentario
  const comentarioObj = {
    nombre: e.target[0].value,
    contenido: e.target[1].value,
  };

  // Obtener comentarios almacenados o inicializar un array vacío
  let comentarios = obtenerComentarios() || [];

  // Agregar el nuevo comentario al array
  comentarios.push(comentarioObj);

  // Guardar los comentarios en el LocalStorage
  localStorage.setItem("comentarios", JSON.stringify(comentarios));

  // Mostrar el comentario en el DOM
  mostrarComentario(comentarioObj);

  // Restablecer el formulario y ocultar el modal
  btnComentar.reset();
  myModal.hide();
}

function cargarComentarios() {
  // Obtener comentarios almacenados
  let comentarios = obtenerComentarios();

  // Mostrar los comentarios en el DOM
  if (comentarios) {
    comentarios.forEach((comentario) => mostrarComentario(comentario));
  }
}

function obtenerComentarios() {
  // Obtener comentarios del LocalStorage y convertirlos de nuevo a un array
  return JSON.parse(localStorage.getItem("comentarios"));
}

function mostrarComentario(comentario) {
  const div = document.createElement("div");
  div.className = "card";
  const div2 = document.createElement("div");
  div2.className = "card-header";
  div2.innerHTML = comentario.nombre;
  const div3 = document.createElement("div");
  div3.className = "card-body";
  const p = document.createElement("p");
  p.className = "text-secondary";
  p.innerHTML = comentario.contenido;
  div3.appendChild(p);
  div.appendChild(div2);
  div.appendChild(div3);
  const br = document.createElement("br");
  article.appendChild(div);
  article.appendChild(br);
}
