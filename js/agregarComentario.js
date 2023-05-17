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

  // Mostrar la alerta dependiendo del resultado
  alerta(comentarioObj);

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

function alerta(comentario) {
  if (comentario.nombre && comentario.contenido) {
    Swal.fire({
      icon: "success",
      title: "Comentario agregado",
      text: "El comentario se agregó correctamente.",
      confirmButtonText: "Aceptar",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Comentario no agregado",
      text: "El comentario no fue agregado debido a que no cumple con las condiciones.",
      confirmButtonText: "Aceptar",
    });
  }
}
