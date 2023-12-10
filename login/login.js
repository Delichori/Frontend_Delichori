/*{
    "managerId": 12345678,
    "managerName": "Gloria",
    "managerLastName": "Ayala",
    "email": "delichorilagloria@gmail.com",
    "password": "12345D"
}*/

let boton = document.getElementById("enviar");
boton.addEventListener("click", evento => {
  let cedula = document.getElementById("cedula").value;
  let password = document.getElementById("password").value;
  verificar(cedula, password);
});

document.addEventListener('DOMContentLoaded', () => {
  let mostrarClave = document.querySelector('.span');
  let inputPassword = document.getElementById('password');
  
  mostrarClave.addEventListener('click', () => {
    inputPassword.type = (inputPassword.type === 'password') ? 'text' : 'password';
  });
});

  let verificar = async (cedula, password) => {
  try {
    let base64Credentials = btoa('12345678' + ':' + '12345D');
    let peticion = await fetch("http://localhost:8080/delichori/api/administrators/" + cedula, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64Credentials,
      },
    });

    if (peticion.ok) {
      let admin = await peticion.json();
      let password2 = admin.password;

      if (password2 === password) {
        
        Swal.fire({
          icon: 'success',
          title: 'Clave Correcta',
          text: 'Redirigiendo...',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          
          window.location.href = "/ok_indexadministrator/indexadministrator.html";
        });
      } else {
      
        Swal.fire({
          icon: 'error',
          title: 'Clave Incorrecta',
          text: 'Por favor, ingrese una clave válida.',
        });
      }
    } else {
      
      Swal.fire({
        icon: 'error',
        title: 'Usuario Inválido',
        text: 'Ingrese un usuario válido.',
      });
    }

  } catch (error) {
   
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al obtener los datos del servidor. Por favor, inténtelo nuevamente.',
    });
    console.error("Error al obtener los datos del servidor:", error.message);
  }
};



// let boton = document.getElementById("enviar");
// boton.addEventListener("click", evento => {
//   let cedula = document.getElementById("cedula").value;
//   let password = document.getElementById("password").value;
//   verificar(cedula, password);
// });

// let verificar = async (cedula, password) => {
//   try {
//     let base64Credentials = btoa('12345678' + ':' + '12345D');
//     let peticion = await fetch("http://localhost:8080/delichori/api/administrators/" + cedula, {


//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + base64Credentials,
//       },
//     });
//     if (peticion.ok) {

//       let admin = await peticion.json();
//       let password2 = admin.password;
//       if (password2 == password) {

       
//         alert("clave correcta");
//         addEventListener(onclick => {href = "/ok_indexadministrator/indexadministrator.html";});

//       } else {
//         alert("la clave es incoirrecta");
//       }

//     } else {


//       alert(`Imgrese un Usuario válido`);

//     }

//   } catch (error) {
//     console.error("Error al obtener los productos:", error.message);
//   };
// };

/*
if (peticion.ok) {
     
  limpiarFormulario();
  Swal.fire({
      title: 'Registro exitoso',
      text: '¡Producto registrado correctamente!',
      icon: 'success',
      confirmButtonColor: '#ff895e',
  });
} else { 
  alert("Error en el registro. Por favor, inténtalo de nuevo.");
}
};*/


















