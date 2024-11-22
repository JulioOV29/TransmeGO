function calcularTotal() {
    const monto = parseFloat(document.getElementById("monto").value);
    let porcentajeAdicional = 0;

    if (isNaN(monto) || monto <= 0) {
        document.getElementById("resultado-simulador").innerText = "Por favor, ingrese un monto válido.";
        return;
    }

    // Determinar el porcentaje adicional
    if (monto < 3200) {
        porcentajeAdicional = 2.2;
    } else if (monto > 12000) {
        porcentajeAdicional = 1.4;
    } else {
        porcentajeAdicional = 1.8;
    }

    // Calcular el total a pagar
    const total = monto * (1 + porcentajeAdicional / 100);

    // Mostrar el resultado
    document.getElementById("resultado-simulador").innerText = 
        `El total a pagar es: ${total.toFixed(2)} `;
}
