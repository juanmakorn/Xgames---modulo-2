let likes = 0;
let dislikes = 0;

function guardarVotos() {
  localStorage.setItem("likes", likes);
  localStorage.setItem("dislikes", dislikes);
}

function obtenerVotosGuardados() {
  likes = parseInt(localStorage.getItem("likes")) || 0;
  dislikes = parseInt(localStorage.getItem("dislikes")) || 0;
}

function resultado() {
  const totalVotos = likes + dislikes;
  const likePorcentaje =
    totalVotos === 0 ? 0 : Math.round((likes / totalVotos) * 100);
  const dislikePorcentaje = totalVotos === 0 ? 0 : 100 - likePorcentaje;
  const result = `Me gusta: ${likePorcentaje}% - No me gusta: ${dislikePorcentaje}%`;
  document.getElementById("result").innerText = result;
  guardarVotos();
}

function actualizarResultado() {
  if (likes > 0 || dislikes > 0) {
    resultado();
  }
}

window.onload = function () {
  obtenerVotosGuardados();
  actualizarResultado();
};

function votar(type) {
  if (type === "like") {
    likes++;
  } else if (type === "dislike") {
    dislikes++;
  }
  actualizarResultado();
}