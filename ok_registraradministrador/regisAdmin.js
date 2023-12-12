 /*
        {
            "managerId": 999,
            "managerName": "yesenia",
            "managerLastName": "Mendoza",
            "email": "deli@gmail.com",
            "password": "12345D"
        }*/



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
    
    try{
        let base64Credentials = btoa('12345678' + ':' + '12345D');
        const peticion = await fetch("http://localhost:8080/delichori/api/administrators/save",{
        
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64Credentials,
            },
            body: JSON.stringify(campos)
        });
        if (!peticion.ok) {
            throw new Error(`Error al obtener Registro. Código de estado: ${peticion.status}`);
        }

        limpiarFormulario();
        Swal.fire({
            title: 'Registro exitoso',
            text: '¡Administrador registrado correctamente!',
            icon: 'success',
            confirmButtonColor: '#ff895e',
        });

    } catch (error) {
        console.error("Error al obtener los Registro:", error.message);
    }
};

let limpiarFormulario = () => {
    document.getElementById("cedula").value = "";
document.getElementById("nombre").value = "";
document.getElementById("apellido").value = "";
document.getElementById("email").value = "";
document.getElementById("clave").value = "";
};





// if (!peticion.ok) {
   
//     limpiarFormulario();
//     Swal.fire({
//         title: 'Registro exitoso',
//         text: '¡Administrador registrado correctamente!',
//         icon: 'success',
//         confirmButtonColor: '#ff895e',
//     });
// }
// } catch (error) {
//     console.error("Error al obtener los productos:", error.message);

    

// let limpiarFormulario = () => {

// document.getElementById("cedula").value = "";
// document.getElementById("nombre").value = "";
// document.getElementById("apellido").value = "";
// document.getElementById("email").value = "";
// document.getElementById("clave").value = "";
// };
// };
