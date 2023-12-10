let boton = document.getElementById("enviar");
boton.addEventListener("click", evento => {
    let cedula = document.getElementById("cedula").value;
    listarPedido(cedula);
});

let listarPedido = async (cedula) => {
    try {
        let peticion = await fetch("http://localhost:8080/delichori/api/orders/client/" + cedula, {

            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        if (!peticion.ok) {
            throw new Error(`Error al obtener los productos. Código de estado: ${peticion.status}`);
        }

        let orders = await peticion.json();

        let contenidoTabla = "";

        for (let order of orders) {
            // Iterar sobre los detalles de la orden
            for (let detail of order.details) {
                let contenidoFila = `<tr>
                    <td>${order.orderId}</td>
                    <td>${order.clientId}</td>
                    <td>${order.clientName}</td>
                    <td>${order.clientLastName}</td>
                    <td>${order.clientAdress}</td>
                    <td>${order.date}</td>
                    <td>${order.comment}</td>
                    <td>${order.state}</td>
                    <td>${detail.productId}</td>
                    <td>${detail.quantity}</td>
                    <td>${detail.total}</td>
                </tr>`;

                contenidoTabla += contenidoFila;
            }
        }

        document.querySelector("table tbody").innerHTML = contenidoTabla;
    } catch (error) {
        console.error("Error al obtener los productos:", error.message);
    };
};










/*let boton = document.getElementById("enviar");
boton.addEventListener("click", evento => {
    let cedula = document.getElementById("cedula").value;
    listarPedido(cedula);
});
 
let listarPedido = async (cedula) => {
    try{

        
        let peticion = await fetch("http://localhost:8080/delichori/api/orders/client/"+cedula,{ 

            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        alert("cliente; " + cedula);
       
        if (!peticion.ok) {
            throw new Error(`Error al obtener los productos. Código de estado: ${peticion.status}`);
        }

        let orders = await peticion.json();

        let contenidoTabla = "";

        for (let order of orders) {

            
            let contenidoFila = `<tr>
                <td>${order.orderId}</td>
                <td>${order.clientId}</td>
                <td>${order.clientName}</td>
                <td>${order.clientLastName}</td>
                <td>${order.clientAdress}</td>
                <td>${order.date}</td>
                <td>${order.comment}</td>
                <td>${order.state}</td>
                
    
                        <td>${detail.productId}</td>
                        <td>${detail.quantity}</td>
                        <td>${detail.total}</td>
                
            </tr>`;

            contenidoTabla += contenidoFila;}

            document.querySelector("table tbody").innerHTML = contenidoTabla;
        } catch (error) {
            console.error("Error al obtener los productos:", error.message);
        };
    
};*/
    
/*"[
    {
        "orderId": 1,
        "clientId": 123456,
        "clientName": "magda",
        "clientLastName": "ganan",
        "clientAdress": "avda",
        "date": "2023-11-29",
        "comment": "a tiempo",
        "state": "CONFIRMADO",
        "details": [
            {
                "productId": 2,
                "quantity": 10,
                "total": 0.0
            }
        ]
    }
]
}*/