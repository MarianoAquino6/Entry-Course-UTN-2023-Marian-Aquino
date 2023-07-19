/*
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , 
el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros.
*/

function mostrar()
{
    let altura;
    let sexo;
    let promedioAltura;
    let flagAltura;
    let minAltura;
    let masBajo;
    let contadorMujeresAltas;
    let contadorJugadores;
    let acumuladorAltura;

    contadorJugadores = 0;
    contadorMujeresAltas = 0;

    acumuladorAltura = 0;

    flagAltura = 0;

    while (contadorJugadores < 5)
    {
    do
    {
        altura = prompt("Ingrese su altura en CM. Solo valido entre 0 y 250");
        altura = parseInt(altura);
    }
    while (altura < 0 || altura > 250);

    do
    {
        sexo = prompt("Ingrese su sexo: F o M. Respete mayusculas");
    }
    while (sexo != "F" && sexo != "M");

    acumuladorAltura = acumuladorAltura + altura;

    if (flagAltura == 0)
    {
        minAltura = altura;
        masBajo = sexo;
        flagAltura = 1;
    }
    else if (altura < minAltura)
    {
        minAltura = altura;
        masBajo = sexo;
    }

    if (altura > 190 && sexo == "F")
    {
        contadorMujeresAltas++;
    }

    contadorJugadores++;
    }

    promedioAltura = acumuladorAltura / contadorJugadores;

    alert ("Promedio de las alturas totales: " + promedioAltura + "\n" + 
    "Altura y sexo del mas bajo: " + minAltura + " " + masBajo + "\n" + 
    "Cantidad de mujeres que superan los 190 centimetros: " + contadorMujeresAltas)
}
