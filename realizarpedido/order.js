let boton= document.getElementById("btnSendOrder");
boton.addEventListener("click", evento=>{
    realizarPedido();
});


let realizarPedido = async () => {

    let campos = {};
    campos.clientId = document.getElementById("cedula").value;
    campos.exampleInputEmail1 = document.getElementById("exampleInputEmail1").value;
    campos.clientName = document.getElementById("nombre").value;
    campos.clientLastName = document.getElementById("apellidos").value;
    campos.celucomment = document.getElementById("celular").value;
    campos.clientAdress = document.getElementById("direccion").value;
    campos.quantity = document.getElementById("cantidad").value;
    campos.productId = document.getElementById("id").value;
    campos.total = document.getElementById("precio").value;


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
/*

"orderId": 0,
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
}*/