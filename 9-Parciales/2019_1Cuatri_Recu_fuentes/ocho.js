/*
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) 
y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color
*/

function mostrar()
{
    let continuar;
    let color;
    let valor;
    let contadorRojo;
    let contadorRojoCaro;
    let contadorBarato;
    let acumuladorValorVehiculos;
    let contadorVehiculosIngresados;
    let promedioVehiculos;
    let flagCaro;
    let maxPrecio;
    let colorMasCaro;

    continuar = "SI";

    contadorRojo = 0;
    contadorRojoCaro = 0;
    contadorBarato = 0;
    contadorVehiculosIngresados = 0;

    acumuladorValorVehiculos = 0;

    flagCaro = 0;

    while(continuar == "SI")
    {
        do
        {
            color = prompt("Ingrese su color: Rojo, Verde o Amarillo. Respete mayusculas");
        }
        while (color != "Rojo" && color != "Verde" && color != "Amarillo");

        do
        {
            valor = prompt("Ingrese el valor del vehiculo");
            valor = parseFloat(valor);
        }
        while (valor < 0 || valor > 10000);

        if (color == "Rojo")
        {
            contadorRojo++;

            if (valor > 5000)
            {
                contadorRojoCaro++;
            }
        }

        if (valor < 5000)
        {
            contadorBarato++;
        }

        if (flagCaro == 0)
        {
            maxPrecio = valor;
            colorMasCaro = color;
            flagCaro = 1;
        }
        else if (valor > maxPrecio)
        {
            maxPrecio = valor;
            colorMasCaro = color;
        }

        acumuladorValorVehiculos = acumuladorValorVehiculos + valor;

        contadorVehiculosIngresados++;

        continuar = prompt("Desea continuar? Ingrese SI o NO");
    }

    promedioVehiculos = acumuladorValorVehiculos / contadorVehiculosIngresados;


    document.write("Cantidad de rojos: " + contadorRojo + "<br>" +
    "Cantidad de rojos con precio mayor a 5000: " + contadorRojoCaro + "<br>" + 
    "Cantidad de vehiculos con precio inferior a 5000:" + contadorBarato + "<br>" + 
    "Promedio de todos los vehiculos ingresados: " + promedioVehiculos + "<br>" + 
    "Auto mas caro y su color: " + maxPrecio + " pesos. El color es " + colorMasCaro)
}   
