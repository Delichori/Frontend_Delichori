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
            window.location.href='http://127.0.0.1:5504/admin_producto/admin_product.html';
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
