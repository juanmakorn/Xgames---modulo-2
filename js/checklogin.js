document.addEventListener("DOMContentLoaded", function() {
    var adminLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!adminLoggedIn) {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
      setTimeout(function() {
        window.location.href = "../index.html";
      }, 3000); // Redirigir después de 3 segundos
    }
  });
  
  function logout() {
    // Eliminar información de inicio de sesión del localStorage
    localStorage.removeItem("adminLoggedIn");
    // Redirigir al administrador a la página de inicio
    window.location.href = "../index.html";
  }