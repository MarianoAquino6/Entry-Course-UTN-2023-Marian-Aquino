/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadLamparas;
    let marcaLampara;
    const PRECIO_LAMPARA = 35;
    let precioBase;
    let porcentajeDescuento;
    let cantidadDescuento;
    let cantidadIngresosBrutos;
    let precioIngresosBrutos;
    let precioFinal;

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaLampara = Marca.value;

    switch (cantidadLamparas)
     {
        case 5:
            if (marcaLampara == "ArgentinaLuz")
            {
                porcentajeDescuento = 40;
            }
            else
            {
                porcentajeDescuento = 30;
            }
            break;
        case 4:
            if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
            {
                porcentajeDescuento = 25;
            }
            else
            {
                porcentajeDescuento = 20;
            }
            break;
        case 3:
            if (marcaLampara == "ArgentinaLuz")
            {
                porcentajeDescuento = 15;
            }
            else if (marcaLampara == "FelipeLamparas")
            {
                porcentajeDescuento = 10;
            }
            else
            {  
                porcentajeDescuento = 5;
            }
            break;
        default:
            porcentajeDescuento = 50;
     }

     precioBase = cantidadLamparas * PRECIO_LAMPARA;
     cantidadDescuento = (porcentajeDescuento * precioBase) / 100;
     precioFinal = precioBase - (cantidadDescuento);
    
    if (precioFinal > 120)
    {
        cantidadIngresosBrutos = precioFinal * 0.10;
        precioIngresosBrutos = precioFinal * 1.10;
        txtIdprecioDescuento.value = "$" + precioIngresosBrutos;
        alert("Usted pago " + "$" + cantidadIngresosBrutos.toFixed(2) + " de IIBB.");
    }
    else
    {
        txtIdprecioDescuento.value = "$" + precioFinal;
    }
}