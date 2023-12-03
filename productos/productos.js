window.onload = function() {
    listarProductos();
};

let listarProductos = async () => {
    try {
        let peticion = await fetch("http://localhost:8080/delichori/api/products/all", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        if (!peticion.ok) {
            throw new Error(`Error al obtener los productos. Código de estado: ${peticion.status}`);
        }

        let products = await peticion.json();

        let contenidoTabla = "";

        for (let product of products) {
            let contenidoFila = `<tr>
                <td>${product.productId}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.sellingPrice}</td>
                <td>
                <input type="button" onclick="window.location.href='http://127.0.0.1:5504/realizarpedido/orderform.html?id=${product.productId}&nombre=${product.name}&descripcion=${product.description}&precio=${product.sellingPrice}';" value="✅" />
                </td>
            </tr>`;

            contenidoTabla += contenidoFila;
        }

        document.querySelector("table tbody").innerHTML = contenidoTabla;
    } catch (error) {
        console.error("Error al obtener los productos:", error.message);
    }
};

