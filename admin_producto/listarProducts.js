window.onload = function () {
    listarProductos();
};

let listarProductos = async () => {
    try {
        let base64Credentials = btoa('12345678' + ':' + '12345D');
        let peticion = await fetch("http://localhost:8080/delichori/api/products/all", {
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

        let products = await peticion.json();

        let contenidoTabla = "";

        products.forEach((product, i) => {
            let contenidoFila = `<tr>
                <td>${product.productId}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.sellingPrice}</td>
                <td>${product.stock}</td>

                <td>
                <input type="button" onclick="window.location.href='http://127.0.0.1:5504/admin_producto/admin_product_update.html?id=${product.productId}&nombre=${product.name}&descripcion=${product.description}&precio=${product.sellingPrice}&stock=${product.stock}';" value="✍" />
                </td>

                <td>
                <input type="button" onclick="borrarProduct(${product.productId})" value="❌" />
                </td>

              

               
            </tr>`;
        
            contenidoTabla += contenidoFila;
        });

        document.querySelector("table tbody").innerHTML = contenidoTabla;
    } catch (error) {
        console.error("Error al obtener los productos:", error.message);
    }

};

//eliminar producto administrador


        borrarProduct = async (productId) => {
            
        try {
            let base64Credentials = btoa('12345678' + ':' + '12345D');
            let peticion = await fetch("http://localhost:8080/delichori/api/products/delete/" + productId, {

                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + base64Credentials,
                },
            });
            
            if (peticion.ok) {
                Swal.fire({
                    title: 'Eliminado',
                    text: '¡Producto ELIMINADO correctamente!',
                    icon: 'success',
                    confirmButtonColor: '#ff895e',
                });
               // location.reload();
                throw new Error(`Error al obtener los products. Código de estado: ${peticion.status}`);
            } 
            
        } catch (error) {
            console.error("Error al obtener los products:", error.message);
            
        };
    };
    
