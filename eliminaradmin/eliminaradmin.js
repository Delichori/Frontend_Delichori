/*{
    "managerId": 12345678,
    "managerName": "Gloria",
    "managerLastName": "Ayala",
    "email": "delichorilagloria@gmail.com",
    "password": "123245D"
}*/
let boton1 = document.getElementById("enviar");
boton1.addEventListener("click", evento => {
    let cedula = document.getElementById("cedula").value;
    listarAdmin(cedula);
});

let listarAdmin = async (cedula) => {
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

        if (!peticion.ok) {
            throw new Error(`Error al obtener los admin. Código de estado: ${peticion.status}`);
        }

        let admin = await peticion.json();

        let contenidoTabla = "";



        let contenidoFila = `<tr>
                    
                    <td>${admin.managerId}</td>
                    <td>${admin.managerName}</td>
                    <td>${admin.managerLastName}</td>
                    <td>${admin.email}</td>
                   </tr>`;

        contenidoTabla += contenidoFila;



        document.querySelector("table tbody").innerHTML = contenidoTabla;
    } catch (error) {
        console.error("Error al obtener el admin:", error.message);
    };
    
};
    let boton = document.getElementById("eliminar");
    boton.addEventListener("click", evento => {
        let cedula = document.getElementById("cedula").value;
        borrarAdmin(cedula);
    });

    let borrarAdmin = async (cedula) => {
        try {
            let base64Credentials = btoa('12345678' + ':' + '12345D');
            let peticion = await fetch("http://localhost:8080/delichori/api/administrators/delete/" + cedula, {

                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + base64Credentials,
                },
            });

            if (!peticion.ok) 
    
           limpiarFormulario();
            Swal.fire({
                title: 'Eliminado',
                text: '¡Administrador eliminado correctamente!',
                icon: 'success',
                confirmButtonColor: '#ff895e',
            });
            {
                throw new Error(`Error al obtener Registro. Código de estado: ${peticion.status}`);
            }
    
        } catch (error) {
            console.error("Error al obtener los Registro:", error.message);
        }

    
    let limpiarFormulario = () => {
    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    };

};

           

//             if (peticion.ok) {
//                 limpiarFormulario();
//                 Swal.fire({
//                     title: 'Registro exitoso',
//                     text: '¡Administrador ELIMINADO correctamente!',
//                     icon: 'success',
//                     confirmButtonColor: '#ff895e',
//                 });
//                 throw new Error(`Error al obtener los adminis. Código de estado: ${peticion.status}`);
//             }


//         } catch (error) {
//             console.error("Error al obtener los adminis:", error.message);
            
//         };
//     };
// };

// let limpiarFormulario = () => {
//     document.getElementById("cedula").value = "";
//     document.getElementById("nombre").value = "";
//     document.getElementById("apellido").value = "";
//     document.getElementById("email").value = "";*/