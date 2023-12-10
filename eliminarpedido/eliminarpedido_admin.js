window.onload = function() {
    listarPedidos();
};

let listarPedidos = async () => {
    try {
        let base64Credentials = btoa('12345678' + ':' + '12345D');
        let peticion = await fetch("http://localhost:8080/delichori/api/orders/all", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64Credentials,
            },
        });

        if (!peticion.ok) {
            throw new Error(`Error al obtener los pedidos. Código de estado: ${peticion.status}`);
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

                    <td>
                    <input type="button" onclick="borrarPedido(${order.orderId})" value="❌" />
                    </td>
                </tr>`;

                contenidoTabla += contenidoFila;
            }
        }

        document.querySelector("table tbody").innerHTML = contenidoTabla;
    } catch (error) {
        console.error("Error al obtener los productos:", error.message);
    };
};

borrarPedido = async (orderId) => {
    try {
        let base64Credentials = btoa('12345678' + ':' + '12345D');
        let peticion = await fetch("http://localhost:8080/delichori/api/orders/delete/" + orderId, {

            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64Credentials,
            },
        });
        
        if (peticion.ok) {
            Swal.fire({
                title: 'Registro exitoso',
                text: '¡Pedido ELIMINADO correctamente!',
                icon: 'success',
                confirmButtonColor: '#ff895e',
            });
           //location.reload();
            throw new Error(`Error al obtener los products. Código de estado: ${peticion.status}`);
        } 
        
    } catch (error) {
        console.error("Error al obtener los products:", error.message);
        
    };
};