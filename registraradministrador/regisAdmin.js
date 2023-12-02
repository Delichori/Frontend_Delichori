
  function registrarAdmin() {
    // Obtener los datos del formulario
    var cedula = document.getElementById('cedula').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var clave = document.getElementById('clave').value;
    var repetirClave = document.getElementById('repetirclave').value;

    // Validar que todos los campos estén llenos (puedes agregar más validaciones según tus necesidades)
    if (cedula && nombre && apellido && email && clave && repetirClave) {
      // Almacenar los datos en localStorage
      var adminData = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        email: email,
        clave: clave,
        repetirClave: repetirClave
      };

      // Borrar los datos del formulario
      document.getElementById("registroForm").reset();

   
      alert("Administrador registrado exitosamente");
    } else {
   
      alert("Por favor, complete todos los campos");
    }
  }