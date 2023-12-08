//traewr las verifivacdiaones de la copia


/*{
    "managerId": 12345678,
    "managerName": "Gloria",
    "managerLastName": "Ayala",
    "email": "delichorilagloria@gmail.com",
    "password": "123245D"
}*/

let boton = document.getElementById("enviar");
boton.addEventListener("click", evento => {
  let cedula = document.getElementById("cedula").value;
  let password = document.getElementById("password").value;
  verificar(cedula, password);
});

let verificar = async (cedula, password) => {
  try {
    let peticion = await fetch("http://localhost:8080/delichori/api/administrators/" + cedula, {

      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });


    if (peticion.ok) {

      let admin = await peticion.json();
      let password2 = admin.password;
      if (password2 == password) {

        //ojojojo madar al meniiiiiiiiiiiiiii adnmin
        alert("clave correcta");
        //alert("window.location.href=/ok_indexadministrator/indexadministrator.html");

      } else {
        alert("la clave es incoirrecxt");
      }

    } else {


      alert(`Imgrese un Usuario válido`);

    }



  } catch (error) {
    console.error("Error al obtener los productos:", error.message);
  };
};
// let products = await peticion.json();

//         let contenidoTabla = "";

//         for (let product of products) {
//             let contenidoFila = `<tr>
//                 <td>${product.productId}</td>
//                 <td>${product.name}</td>
//                 <td>${product.description}</td>
//                 <td>${product.sellingPrice}</td>
//                 <td>










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