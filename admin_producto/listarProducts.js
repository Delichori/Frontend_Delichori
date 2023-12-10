// window.onload = function() {
//     listarProductos();
// };

// let listarProductos = async () => {
//     try {
//         let peticion = await fetch("http://localhost:8080/delichori/api/products/all", {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!peticion.ok) {
//             throw new Error(`Error al obtener los productos. Código de estado: ${peticion.status}`);
//         }

//         let products = await peticion.json();

//         let contenidoTabla = "";

//         for (let product of products) {
//             let contenidoFila = `<tr>
//                 <td>${product.productId}</td>
//                 <td>${product.name}</td>
//                 <td>${product.description}</td>
//                 <td>${product.sellingPrice}</td>

//                 <td>
//                 <input type="button" id="eliminar" onclick="window.location.href='/deleteProducts.js?id=${product.productId}/>
//                 </td>
                
//                 <form method="GET" >
//                 <a class="centrado  btn color1 border border-3 border-black sombra" 
//                 type="button" id="eliminar">Eliminar</a> 
//                 <script src="/deleteProducts.js?id=${product.productId}"></script>
//                 </form>


                
//             </tr>`;

//             contenidoTabla += contenidoFila;
//         }

//         document.querySelector("table tbody").innerHTML = contenidoTabla;
//     } catch (error) {
//         console.error("Error al obtener los productos:", error.message);
//     }


//};

let listarProductos = async () => {
    try {
        let peticion = await fetch("http://localhost:8080/delichori/api/products/all", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        if (!peticion.ok) {
            throw new Error(`Error al obtener los productos. Código de estado: ${peticion.status}`);
        }

        let products = await peticion.json();

        let contenidoTabla = "";

        for (let product of products) {
            let contenidoFila = `<tr>
                <td>${product.productId}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.sellingPrice}</td>
                                
                <td>
                <form method="GET" >
                <input type="hidden" id="idpro" name="idpro">`
        document.getElementById("idpro").value=idproducto
	<a class="centrado  btn color1 border border-3 border-black sombra" 
      type="button" id="eliminar">Iniciar Sesión</a> 
	  <script src="deleteProducts.js"></script>
    </form>
                </td>
            </tr>`;

            contenidoTabla += contenidoFila;
        }

        document.querySelector("table tbody").innerHTML = contenidoTabla;
    } catch (error) {
        console.error("Error al obtener los productos:", error.message);
    }
};

window.onload = function() {
    listarProductos();
};
