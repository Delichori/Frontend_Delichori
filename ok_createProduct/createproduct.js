   /*{
        "productId": 4,
        "name": "Morcilla",
        "description": "Deliciosa morcilla",
        "costPrice": 5000,
        "sellingPrice": 9000,
        "stock": 15
    }*/ 

    let boton = document.getElementById("btn");
    boton.addEventListener("click", evento => {
        createProduct();
    });
    
    let createProduct = async () => {  
        let campos = {};
        campos.productId = document.getElementById("idProducto").value;
        campos.name = document.getElementById("nombre").value;
        campos.description = document.getElementById("descripcion").value;
        campos.sellingPrice = document.getElementById("precioVenta").value;
        campos.stock = document.getElementById("existencia").value;
    
        try {
            let base64Credentials = btoa('12345678' + ':' + '12345D');
            const peticion = await fetch("http://localhost:8080/delichori/api/products/save", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + base64Credentials,
                },
                body: JSON.stringify(campos)
            });
    
            if (!peticion.ok) {
                throw new Error(`Error al obtener los adminis. Código de estado: ${peticion.status}`);
            }
    
            limpiarFormulario();
            Swal.fire({
                title: 'Registro exitoso',
                text: '¡Producto registrado correctamente!',
                icon: 'success',
                confirmButtonColor: '#ff895e',
            });
    
        } catch (error) {
            console.error("Error al obtener los adminis:", error.message);
        }
    };
    
    let limpiarFormulario = () => {
        document.getElementById("idProducto").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("precioVenta").value = ""; // Fix the id here
        document.getElementById("existencia").value = "";
    };