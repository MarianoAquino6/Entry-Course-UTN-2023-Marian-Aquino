/*Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id*/

function mostrar()
{
    let precio;
    let porcentajeDescuento;
    let calculoPrecioFinal;
    let precioFinal;

    precio = prompt("Ingrese el precio");
    precio = parseFloat(precio);

    porcentajeDescuento = prompt("Ingrese el porcentaje de descuento");
    porcentajeDescuento = parseFloat(porcentajeDescuento);

    calculoPrecioFinal = (porcentajeDescuento * precio) /100;
    precioFinal = precio - calculoPrecioFinal;

    elPrecioFinal.value = precioFinal;
}
