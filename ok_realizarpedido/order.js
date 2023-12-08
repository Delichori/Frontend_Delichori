let boton = document.getElementById("btnSendOrder");
boton.addEventListener("click", evento => {
    regisPedido();
});

let regisPedido = async () => {

    let campos = {
        "orderId": 0,
        "clientId": document.getElementById("cedula").value,
        "clientName": document.getElementById("nombre").value,
        "clientLastName": document.getElementById("apellidos").value,
        "clientAdress": document.getElementById("direccion").value,
        "date": document.getElementById("date").value,
        "comment": document.getElementById("celular").value,
        "state": "",
        "details": [
            {
                "productId":document.getElementById("idpro").value,
                "quantity": document.getElementById("cantidad").value,
                "total": ((document.getElementById("valor").value)*(document.getElementById("cantidad").value))
            }
        ]
    };
    let peticion = await fetch("http://localhost:8080/delichori/api/orders/save",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(campos)
        });
    if (peticion.ok) {
        
            Swal.fire({
                title: 'Registro exitoso',
                text: '¡Pedido enviado correctamente!',
                icon: 'success',
                confirmButtonColor: '#ff895e',
            });
    }else{
            alert("Error en el registro. Por favor, inténtalo de nuevo.");
        }
        limpiarFormulario();
};

let limpiarFormulario = () => {

    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("date").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("idproducto").value = "";
    document.getElementById("precio").value = "";
    };


           
/*"orderId": 0,
"clientId": 1,
"clientName": "Pepito",
"clientLastName": "Perez",
"clientAdress": "Carera",
"date": "2023-12-01",
"comment": "Empacados por unidad",
"state": "",
"details": [
    {
        "productId": 3,
        "quantity": 4,
        "total": 0.0
    }
]
}



//    alert("Se guardó correctamente!"

            //    + document.getElementById("nombre").value,
            //    + document.getElementById("apellidos").value,
            //    +document.getElementById("idpro").value,
            //           + document.getElementById("cantidad").value,
            //            + ((document.getElementById("valor").value)*(document.getElementById("cantidad").value)));
        //limpiarFormulario();*/