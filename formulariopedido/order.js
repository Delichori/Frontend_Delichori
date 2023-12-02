let boton= document.getElementById("btnSendOrder");
boton.addEventListener("click", evento=>{
    realizarPedido();
});






let realizarPedido = async () => {

    let campos = {};
    campos.cedula = document.getElementById("cedula").value;
    campos.exampleInputEmail1 = document.getElementById("exampleInputEmail1").value;
    campos.nombre = document.getElementById("nombre").value;
    campos.apellidos = document.getElementById("apellidos").value;
    campos.celular = document.getElementById("celular").value;
    campos.direccion = document.getElementById("direccion").value;
    campos.cantidad = document.getElementById("cantidad").value;


    const peticion = await fetch("http://localhost:8080/delichori/api/orders/save",

    {
        method: 'POST',
            headers: {
            'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(campos)
    });
}

