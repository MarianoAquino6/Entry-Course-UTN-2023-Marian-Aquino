/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".*/

function mostrar()
{
    let numero1;
    let numero2;
    let resta;
    let suma;

    numero1 = prompt("Ingrese su primer numero");
    numero1 = parseFloat(numero1);
    numero2 = prompt("Ingrese su segundo numero");
    numero2 = parseFloat(numero2);

    if (numero1 == numero2)
    {
        alert(numero1 + " y " + numero2);
    }
    else if (numero1 > numero2)
    {
        resta = numero1 - numero2;
        if (resta > 10)
        {
            alert("La resta es " + resta + " y supero el 10");
        }
    }
    else
    {
        suma = numero1 + numero2;
    }
}
