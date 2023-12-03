let boton = document.getElementById("regisAdmin");
boton.addEventListener("click", evento => {
    regisAdmin();
});

let regisAdmin = async () => {

    let campos = {};
    campos.managerId = document.getElementById("cedula").value;
    campos.managerName = document.getElementById("nombre").value;
    campos.managerLastName = document.getElementById("apellido").value;
    campos.email = document.getElementById("email").value;
    campos.password = document.getElementById("clave").value;

    /*
        {
            "managerId": 999,
            "managerName": "yesenia",
            "managerLastName": "Mendoza",
            "email": "deli@gmail.com",
            "password": "12345D"
        }*/

    const peticion = await fetch("http://localhost:8080/delichori/api/administrators/save",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(campos)
        });



if (peticion.ok) {
   
    limpiarFormulario();
    Swal.fire({
        title: 'Registro exitoso',
        text: '¡Administrador registrado correctamente!',
        icon: 'success',
        confirmButtonColor: '#ff895e',
    });
} else { 
    alert("Error en el registro. Por favor, inténtalo de nuevo.");
}
};

let limpiarFormulario = () => {

document.getElementById("cedula").value = "";
document.getElementById("nombre").value = "";
document.getElementById("apellido").value = "";
document.getElementById("email").value = "";
document.getElementById("clave").value = "";
};