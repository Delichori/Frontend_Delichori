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

    /* {
"productId": 1,
"name": "Chorizo tradicional",
"description": "Delicioso chorizo de cerdo tradicional",
"sellingPrice": 4000,
"stock": 10
} */ 

let boton = document.getElementById("btn");
  boton.addEventListener("click", evento => {
      editProduct();
  });

     
    let editProduct= async () => {  
        let campos = {};
        campos.productId = document.getElementById("idProducto").value;
        campos.name = document.getElementById("nombre").value;
        campos.description = document.getElementById("descripcion").value;
        campos.sellingPrice = document.getElementById("precioVenta").value;
        campos.stock = document.getElementById("existencia").value;
    
        try {
            let base64Credentials = btoa('12345678' + ':' + '12345D');
            const peticion = await fetch("http://localhost:8080/delichori/api/products/update", {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + base64Credentials,
                },
                body: JSON.stringify(campos)
            });
    
            if (!peticion.ok) {
                throw new Error(`Error al obtener los PRODUCTS. Código de estado: ${peticion.status}`);
            }
    
            limpiarFormulario();
            Swal.fire({
                title: 'Registro exitoso',
                text: '¡Producto ACTUALIZADO correctamente!',
                icon: 'success',
                confirmButtonColor: '#ff895e',
            });
            location.reload();
    
        } catch (error) {
            console.error("Error al obtener los Products:", error.message);
        }
    };
    
    let limpiarFormulario = () => {
        document.getElementById("idProducto").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("precioVenta").value = ""; 
        document.getElementById("existencia").value = "";
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
                    title: 'Registro exitoso',
                    text: '¡Producto ELIMINADO correctamente!',
                    icon: 'success',
                    confirmButtonColor: '#ff895e',
                });
                location.reload();
                throw new Error(`Error al obtener los products. Código de estado: ${peticion.status}`);
            } 
            
        } catch (error) {
            console.error("Error al obtener los products:", error.message);
            
        };
    };
    
