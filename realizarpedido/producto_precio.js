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

        let contenidoTabla = "<tr><td><select>";
        
        for (let product of products) {
            contenidoTabla += `<option>${product.name}</option>`;
        }
        
        contenidoTabla += "</select></td></tr>";

        document.querySelector("table tbody").innerHTML = contenidoTabla;
    } catch (error) {
        console.log("Error al obtener los productos:", error.message);
    }
};
