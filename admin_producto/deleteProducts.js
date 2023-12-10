    let boton = document.getElementById("eliminar");
    boton.addEventListener("onclick", evento => {
        let productId = document.getElementById("idpro").value;
        //let productId = document.getElementById("productId").value;
        borrarProduct(productId);
    });
alert ("p:"+productId);
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