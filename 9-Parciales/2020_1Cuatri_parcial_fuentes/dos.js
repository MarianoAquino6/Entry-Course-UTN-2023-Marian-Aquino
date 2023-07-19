/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro

*/

function mostrar()
{
  let continuar;
  let tipo;
  let cantidadBolsas;
  let precioBolsa;
  let descuentoA;
  let precioDescuento;
  let descuentoB;
  let totalAPagar;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let tipoMasBolsas;
  let maxPrecio;
  let tipoMasCaro;
  let flag;

  continuar = "SI";

  totalAPagar = 0;

  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;

  flag = 0;

  while (continuar == "SI")
  {
    //VALIDAMOS LOS DATOS PEDIDOS:
    do
    {
      tipo = prompt("Ingrese el tipo de bolsa. Puede ser Arena, Cal o Cemento. Respete las mayusculas");
    }
    while (tipo != "Arena" && tipo != "Cal" && tipo != "Cemento");

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
    cantidadBolsas = parseInt(cantidadBolsas);

    do
    {
      precioBolsa = prompt("Ingrese el precio por bolsa. Solo numeros positivos")
      precioBolsa = parseFloat(precioBolsa);
    }
    while (precioBolsa <= 0);

    //EJERCICIO A:

    totalAPagar = totalAPagar + (precioBolsa * cantidadBolsas);

    //EJERCICIO C:

    switch(tipo)
    {
      case "Arena":
        acumuladorArena = acumuladorArena + cantidadBolsas;
        break;
      case "Cal":
        acumuladorCal = acumuladorCal + cantidadBolsas;
        break;
      case "Cemento":
        acumuladorCemento = acumuladorCemento + cantidadBolsas;
        break;
    }

    //EJERCICIO D:

    if (flag == 0)
    {
      maxPrecio = precioBolsa;
      tipoMasCaro = tipo;
      flag = 1;
    }
    else if (precioBolsa > maxPrecio)
    {
      maxPrecio = precioBolsa;
      tipoMasCaro = tipo;
    }

    //PREGUNTO AL USUARIO SI DESEA CONTINUAR:

    continuar = prompt("Desea continuar? Escriba SI o NO");
  }

  //EJERCICIO B:

  if (cantidadBolsas > 30)
  {
    descuentoA = (totalAPagar * 25) / 100;
    precioDescuento = totalAPagar - descuentoA;
  }
  else if (cantidadBolsas > 15)
  {
    descuentoB = (totalAPagar * 15) / 100;
    precioDescuento = totalAPagar - descuentoB;
  }
  else
  {
    precioDescuento = "No corresponde el descuento"
  }

  //CONTINUACION EJERCICIO C:

  if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
  {
    tipoMasBolsas = "Arena";
  }
  else if (acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento)
  {
    tipoMasBolsas = "Cal";
  }
  else if (acumuladorCemento > acumuladorArena && acumuladorCemento > acumuladorCal)
  {
    tipoMasBolsas = "Cemento";
  }

  //MOSTRAMOS LOS DATOS AL USUARIO:

  alert("El importe total a pagar bruto sin descuento: " + "$" + totalAPagar + "\n" +
  "Importe total a pagar con descuento: " + precioDescuento + "\n" + 
  "Tipo con mas cantidad de bolsas: " + tipoMasBolsas + "\n" + 
  "Tipo mas caro: " + tipoMasCaro)
}