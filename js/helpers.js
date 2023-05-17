
function validarCantidadCaracteres(texto, min, max) {
    if (texto.length >= min && texto.length <= max) {
      console.log("dato correcto");
      return true;
    } else {
      console.log("dato erroneo");
      return false;
    }
  }
  
  // function validarURLImagen(imagen) {
  //     let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
  //     if (patron.test(imagen)) {
  //       console.log("la expresion regular de la imagen funciona");
  //       return true;
  //     } else {
  //       console.log("la expresion regular de la imagen fallo");
  //       return false;
  //     }
  //   }
  
  export function sumarioValidacion(nombre, imagen, descripcion) {
    let resumen = "";
    if (!validarCantidadCaracteres(nombre, 2, 100)) {
      resumen += "El nombre debe tener entre 2 y 30 caracteres <br>";
    }
  
    if (!validarCantidadCaracteres(descripcion, 5, 500)) {
      resumen += "La descripcion debe tener entre 5 y 500 caracteres <br>";
    }
  
  //   if (!validarURLImagen(imagen)) {     resumen +=
  //     "La imagen de la pelicula debe ser una URL valida terminada en (.jpg, .png o .gif) <br>";
  // }
  
  
  
    return resumen;
  }