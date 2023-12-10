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
    listarAdmin(cedula);
});

let listarAdmin = async (cedula) => {
    try {
        let base64Credentials = btoa('12345678' + ':' + '12345D');
        let peticion = await fetch("http://localhost:8080/delichori/api/administrators/"+cedula, {

            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64Credentials,
            },
        });

        if (!peticion.ok) {
            throw new Error(`Error al obtener los productos. Código de estado: ${peticion.status}`);
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