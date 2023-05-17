function validateForm() {
	var username = document.getElementById("usuario").value;
	var password = document.getElementById("password").value;

	if (username === "admin" && password === "admin123") {
		localStorage.setItem("adminLoggedIn", "true");
		return true;
	} else {
		document.getElementById("errorMessage").textContent = "Usuario o contraseña incorrecta";
        document.getElementById("errorMessage").style.display = "block";
    }
}
document.getElementById("formulario").addEventListener("submit", function(event) {
	if (!validateForm()) {
		event.preventDefault();
	}
});

var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
	var modal = document.getElementById("modal");
	modal.style.display = "none";
};

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
	
}

const campos = {
	usuario: false,
	password: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
