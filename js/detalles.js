const parametroCodigo = new URLSearchParams(window.location.search);

console.log(parametroCodigo.get('codigo'));


let listaJuegos =
  JSON.parse(localStorage.getItem("listaJuegos")) || [];


const juegoBuscado = listaJuegos.find((juego)=> juego.codigo === parametroCodigo.get('codigo'));


let seccion = document.getElementById('seccionDetalle');
seccion.innerHTML = `
<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${juegoBuscado.imagen}"
                class="img-fluid rounded-start"
                alt="${juegoBuscado.nombre}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${juegoBuscado.nombre}</h5>
                <p class="card-text">
                ${juegoBuscado.descripcion}
                </p>
                <p class="card-text">
                  Genero:
                  <span class="badge rounded-pill bg-info"> ${juegoBuscado.genero}</span>
                </p>
                <p class="card-text">Precio: ${juegoBuscado.precio}</p>
                <p class="card-text">edad: ${juegoBuscado.edad}</p>
                <p class="card-text">
                  Requisitos: ${juegoBuscado.requisitos}
                </p>
                <p class="card-text">Lanzamiento: ${juegoBuscado.lanzamiento}</p>
                </p>
              </div>
            </div>
          </div>
        </div>`