//MOSTRAR Y OCULTAR DE LOGIN CLAVE

document.querySelector('.span').addEventListener('click', e => {
  let passwordInput = document.querySelector('#password');
  if (e.target.classList.contains('show')) {
      e.target.classList.remove('show');
      e.target.textContent = 'Ocultar';
      passwordInput.type = 'text';
  } else {
      e.target.classList.add('show');
      e.target.textContent = 'Mostrar';
      passwordInput.type = 'password';
  }
});

//CORREO SOLO SEA MINUSCULA
document.getElementById('exampleInputEmail1').addEventListener('input', convertToLowercase);

function convertToLowercase() {
let emailInput = document.getElementById('exampleInputEmail1');
emailInput.value = emailInput.value.toLowerCase();
}

/*NO DA
//EL LOGIN INICIE CON DATOS
function iniciarSesion() {
    var correoElectronico = document.getElementsByName('email')[0].value;
    var clave = document.getElementsByName('password')[0].value;

    if (correoElectronico.trim() === '' || clave.trim() === '') {
      alert('Por favor, complete todos los campos.');
    } else {
      // Aquí puedes agregar cualquier otra lógica que necesites antes de enviar el formulario

      // Simulación de envío del formulario
      alert('Formulario enviado correctamente');
      // Aquí puedes redirigir a la página de bienvenida o realizar otras acciones
    }
  }

  let iniciarSesion = async () => {

  let campos={};
  campos.exampleInputEmail1 = document.getElementById("exampleInputEmail1").value;
  campos.password = document.getElementById("password").value;

  const peticion= await fetch("https://localhost:8080/delichori/api/login");
  }*/