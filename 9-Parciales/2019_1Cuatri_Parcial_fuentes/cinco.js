/*
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
*/

function mostrar()
{
    let continente;
    let cantidadDias;
    const PRECIO_DIA = 100;
    let metodoPago;
    let porcentajeDescuento;
    let precioDescuento;
    let porcentajeAumento;
    let precioAumento;
    let precioBase;
    let precioFinal;

    continente = FormIngreso.value;

    cantidadDias = prompt("Ingrese la cantidad de dias");
    cantidadDias = parseInt(cantidadDias);

    metodoPago = prompt("Ingrese el metodo de pago: Debito, Mercadopago, Efectivo. Respete mayusculas");

    porcentajeDescuento = 0;

    switch(continente)
    {
        case "América":
            if (metodoPago == "Debito")
            {
                porcentajeDescuento = 50 + 10;
            }
            else
            {
                porcentajeDescuento = 50;
            }
        break;
        case "África":
            if (metodoPago == "Mercadopago" || metodoPago == "Efectivo")
            {
                porcentajeDescuento = 60 + 15;
            }
            else
            {
                porcentajeDescuento = 60;
            }
            break;
        case "Europa":
            if (metodoPago == "Debito")
            {
                porcentajeDescuento = 20 + 15;
            }
            else if (metodoPago == "Mercadopago")
            {
                porcentajeDescuento = 20 + 10;
            }
            else
            {
                porcentajeDescuento = 20 + 5;
            }
            break;
        default:
            porcentajeAumento = 20;
    }

    precioBase = (PRECIO_DIA * cantidadDias);

    precioDescuento = (porcentajeDescuento * precioBase) / 100;
    precioAumento = (porcentajeAumento * precioBase) / 100;

    if (porcentajeDescuento != 0)
    {
        precioFinal = precioBase - precioDescuento;
    }
    else
    {
        precioFinal = precioBase + precioAumento;
    }

    alert("Precio final: $" + precioFinal)
}
