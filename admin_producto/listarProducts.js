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
                    <span onclick="actualizarPedido(${i})" class="btn-editar btn btn-warning"> ✍ </span>
                    <span onclick="eliminarPedido(${i})" class="btn-eliminar btn btn-danger"> ✖️ </span>
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
function validarFormulario(){
    let datosForm = {
            productId : productIdImput.value,
            name : nameImput.value,
            description : descriptionImput.value,
            sellingPrice : sellingPriceImput.value,
            stock : stockImput.value
        }
        
    console.log(datosForm)

    productIdImput.value = "";
    nameImput.value = "";
    descriptionImput.value = "";
    sellingPriceImput.value = "";
    stockImput.value = "";

    return datosForm;
    }

    async function actualizarPedido(pos) {
        let pedidos = [];
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

        //pasar los datos al formulario para editar
        productIdImput.value = pedidos[pos].productId;
        nameImput.value = pedidos[pos].name;
        descriptionImput.value = pedidos[pos].description;
        sellingPriceImput.value = pedidos[pos].sellingPricen;
        stockImput.value = pedidos[pos].stock;

    } catch (error) {
        console.error("Error al obtener los productos:", error.message);
    }
    } 
    
    let boton2 = document.querySelector(".btn-actualizar");
    if (boton2) {
        boton2.classList.toggle("d-none");
        boton2.addEventListener("click", async (evento) => {
   
        try {
            let productId = document.getElementById("productId").value;
            await actualizarProduct(productId);
        } catch {
            console.error("No se encontró el botón de actualizar");
        }
    });
}
    
    async function actualizarProduct(productId) {
        let campos = {
            productId: document.getElementById("idProducto").value,
            name: document.getElementById("nombre").value,
            description: document.getElementById("descripcion").value,
            sellingPrice: document.getElementById("precioVenta").value,
            stock: document.getElementById("existencia").value
        };
    
        try {
            let base64Credentials = btoa('12345678' + ':' + '12345D');
            let peticion = await fetch("http://localhost:8080/delichori/api/products/update/" + productId, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + base64Credentials,
                },
                body: JSON.stringify(campos)
            });
    
            if (!peticion.ok) {
                Swal.fire({
                    title: 'Registro exitoso',
                    text: '¡Producto Actualizado correctamente!',
                    icon: 'success',
                    confirmButtonColor: '#ff895e',
                });
                throw new Error(`Error al obtener los productos. Código de estado: ${peticion.status}`);
            }
        } catch (error) {
            console.error("Error al obtener los productos:", error.message);
        }
    };



/*    let boton = document.getElementById("eliminar");
    boton.addEventListener("click", evento => {
        let productId = document.getElementById("productId").value;
        borrarProduct(productId);
    });
    alert("p:" + productId);
    let borrarProduct = async (productId) => {
        try {
            let base64Credentials = btoa('12345678' + ':' + '12345D');
            let peticion = await fetch("http://localhost:8080/delichori/api/products/delete/" + 1, {

                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + base64Credentials,
                },
            });

            if (!peticion.ok) {
                Swal.fire({
                    title: 'Registro exitoso',
                    text: '¡Producto ELIMINADO correctamente!',
                    icon: 'success',
                    confirmButtonColor: '#ff895e',
                });
                throw new Error(`Error al obtener los productos. Código de estado: ${peticion.status}`);
            }


        } catch (error) {
            console.error("Error al obtener los productos:", error.message);
        };
    };
};*/