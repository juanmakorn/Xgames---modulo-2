let btnComentar = document.querySelector('form');
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
}