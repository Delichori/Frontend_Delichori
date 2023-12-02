//CALCULAR GANANCIA
function calcularGanancia() {
    var precioCosto = parseFloat(document.getElementById('precioCosto').value) || 0;
    var precioVenta = parseFloat(document.getElementById('precioVenta').value) || 0;
    var ganancia = precioVenta - precioCosto;

    document.getElementById('ganancia').value = '$' + ganancia.toFixed(2);
  }

