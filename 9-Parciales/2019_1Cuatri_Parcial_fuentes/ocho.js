/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/

function mostrar()
{
    let letra;
    let numero;
    let continuar;
    let preguntaNumeroPar;
    let contadorPares;
    let contadorImpar;
    let contadorCeros;
    let acumuladorPositivos;
    let promedio;
    let acumuladorNegativos;
    let flag;
    let numeroMaximo;
    let letraMax;
    let numeroMinimo;
    let letraMin;
    let contadorPositivos;

    continuar = "SI"

    contadorPares = 0;
    contadorImpar = 0;
    contadorCeros = 0;
    contadorPositivos = 0;

    acumuladorPositivos = 0;
    acumuladorNegativos = 0;

    flag = 0;

    while(continuar == "SI")
    {
        letra = prompt("Ingrese su letra");

        do
        {
            numero = prompt("Ingrese su numero");
            numero = parseFloat(numero);
        }
        while (numero < -100 || numero > 100);

        preguntaNumeroPar = numero % 2;

        if (preguntaNumeroPar == 0)
        {
            contadorPares++;
        }
        else
        {
            contadorImpar++;
        }

        if (numero > 0)
        {
            acumuladorPositivos = acumuladorPositivos + numero;
            contadorPositivos++;

        }
        else if (numero < 0)
        {
            acumuladorNegativos = acumuladorNegativos + numero;
        }
        else
        {
            contadorCeros++;
        }

        if (flag == 0)
        {
            numeroMaximo = numero;
            letraMax = letra;
            numeroMinimo = numero;
            letraMin = letra;
            flag = 1;
        }
        else
        {
            if (numero > numeroMaximo)
            {
                numeroMaximo = numero;
                letraMax = letra;
            }
            if (numero < numeroMinimo)
            {
                numeroMinimo = numero;
                letraMin = letra;
            }
        }

        continuar = prompt("Desea continuar? Escriba SI o NO. Respete mayusculas");
    }

    promedio = acumuladorPositivos / contadorPositivos;

    document.write("Cantidad de números pares: " + contadorPares + "<br>" + 
    "Cantidad de números impares: " + contadorImpar + "<br>" +
    "Cantidad de ceros: " + contadorCeros + "<br>" + 
    "Promedio de todos los números positivos ingresados: " + promedio + "<br>" + 
    "Suma de todos los números negativos: " + acumuladorNegativos + "<br>" + 
    "Numero y letra del maximo: " + numeroMaximo + " " + letraMax + "<br>" + 
    "Numero y letra del minimo: " + numeroMinimo + " " + letraMin)
}
