//CALCULAR GANANCIA
// function calcularGanancia() {
    // var precioCosto = parseFloat(document.getElementById('precioCosto').value) || 0;
    // var precioVenta = parseFloat(document.getElementById('precioVenta').value) || 0;
    // var ganancia = precioVenta - precioCosto;
    // document.getElementById('ganancia').value = '$' + ganancia.toFixed(2);
  // };
  //OJOOOO ME FALTA MANDAR DE AQUI PARA ALLÁ LA GANANCIA POR PRODUCTo POR ESO COMENTÉ DESDE EL HTML TAMBÉN

  let boton = document.getElementById("btn");
  boton.addEventListener("click", evento => {
      createProduct();
  });
  
  let createProduct = async () => {
  
      let campos = {};
      campos.productId = document.getElementById("idProducto").value;
      campos.name = document.getElementById("nombre").value;
      campos.description = document.getElementById("descripcion").value;
      campos.costPrice = document.getElementById("precioCosto").value;
      campos.sellingPrice = document.getElementById("precioVenta").value;
      campos.stock = document.getElementById("existencia").value;

      /*{
        "productId": 4,
        "name": "Morcilla",
        "description": "Deliciosa morcilla",
        "costPrice": 5000,
        "sellingPrice": 9000,
        "stock": 15
    }*/
  
      const peticion = await fetch("http://localhost:8080/delichori/api/products/save",
          {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(campos)
          });
  
  if (peticion.ok) {
     
      limpiarFormulario();
      Swal.fire({
          title: 'Registro exitoso',
          text: '¡Producto registrado correctamente!',
          icon: 'success',
          confirmButtonColor: '#ff895e',
      });
  } else { 
      alert("Error en el registro. Por favor, inténtalo de nuevo.");
  }
  };
  
  let limpiarFormulario = () => {
  
  document.getElementById("idProducto").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("precioCosto").value = "";
  document.getElementById("precioVenta").value = "";
  document.getElementById("existencia").value = "";
  };