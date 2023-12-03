let boton= document.getElementById("regisAdmin");
boton.addEventListener("click", evento=>{
    regisAdmin();
});

let regisAdmin = async () => {

    let campos = {};
    campos.managerId = document.getElementById("cedula").value;
    campos.managerName = document.getElementById("nombre").value;
    campos.managerLastName = document.getElementById("apellido").value;
    campos.email = document.getElementById("email").value;
    campos.password = document.getElementById("clave").value;
   
/*
    {
        "managerId": 999,
        "managerName": "yesenia",
        "managerLastName": "Mendoza",
        "email": "deli@gmail.com",
        "password": "12345D"
    }*/

    const peticion = await fetch("http://localhost:8080/delichori/api/administrators/save",
    {   method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(campos)  
    });

}