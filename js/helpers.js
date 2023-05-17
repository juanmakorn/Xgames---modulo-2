function validarCantidadCaracteres(texto, min, max) {
    if (texto.length >= min && texto.length <= max) {
      console.log("dato correcto");
      return true;
    } else {
      console.log("dato erroneo");
      return false;
    }
  }
  
  
//   function validarPrecio(precio) {
//     let patron = /^\d{2,6}$/;
//     if (patron.test(precio)) {
//       console.log("la expresion regular funciona");
//       return true;
//     } else {
//       console.log("la expresion regular fallo");
//       return false;
//     }
//   }
  function validarURLImagen(imagen) {
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
    if (patron.test(imagen)) {
      console.log("la expresion regular de la imagen funciona");
      return true;
    } else {
      console.log("la expresion regular de la imagen fallo");
      return false;
    }
  }
  

  
  export function sumarioValidacion(nombre, descripcion, imagen) {
    let resumen = "";
    if (!validarCantidadCaracteres(nombre, 2, 100)) {
      resumen += "El titulo debe tener entre 2 y 100 caracteres <br>";
    }
    if (!validarCantidadCaracteres(descripcion, 5, 500)) {
      resumen += "La descripcion debe tener entre 5 y 500 caracteres <br>";
    }
    // if (validarPrecio(precio)) {
    //   resumen +=
    //     "El precio esta expresado en pesos argentinos <br>";
    // }
    if (!validarURLImagen(imagen)) {
      resumen +=
        "La imagen del juego debe ser una URL valida terminada en (.jpg, .png o .gif) <br>";
    }
    
    return resumen;
  }