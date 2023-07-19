/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares() {
    let numeroIngresado;
    let calculoPares;
    let cantidadPares;

    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseFloat(numeroIngresado);
    cantidadPares = 0;

    while (numeroIngresado > 0) {
        calculoPares = numeroIngresado % 2;

        if (calculoPares == 0) {
            cantidadPares++;
        }

        numeroIngresado = numeroIngresado - 2;
    }

    alert("Hay " + cantidadPares + " numeros pares.");
}

function NumerosImpares() {
    let numeroIngresado;
    let calculoImpares;
    let cantidadImpares;

    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseFloat(numeroIngresado);
    cantidadImpares = 0;


    while (numeroIngresado > 0) {
        calculoImpares = numeroIngresado % 2;

        if (calculoImpares == 1) {
            cantidadImpares++;
        }

        numeroIngresado--;
    }

    alert("Hay " + cantidadImpares + " numeros impares.");
}

function NumerosDivisibles() {
    let numeroIngresado;
    let calculoDivisor;
    let cantidadDivisor;
    let numeroIncognita;
    let flag;

    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseFloat(numeroIngresado);
    cantidadDivisor = 0;
    flag = 0;

    do {
        if (flag == 0) {
            numeroIncognita = numeroIngresado;
            flag++;
        }

        calculoDivisor = numeroIngresado % numeroIncognita;

        if (calculoDivisor == 0 && numeroIncognita <= 100 && numeroIncognita >= 1) {
            cantidadDivisor++;
        }

        numeroIncognita--;
    }
    while (numeroIncognita > 0);

    alert("Hay " + cantidadDivisor + " divisores del numero en un rango del 1 al 100.");
}

function VerificarPrimo() {
    let numeroIngresado;
    let calculoDivisor;
    let cantidadDivisor;
    let numeroIncognita;
    let flag;

    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseFloat(numeroIngresado);
    cantidadDivisor = 0;
    flag = 0;

    do {
        if (flag == 0) {
            numeroIncognita = numeroIngresado;
            flag++;
        }

        calculoDivisor = numeroIngresado % numeroIncognita;

        if (calculoDivisor == 0 && numeroIncognita <= 100 && numeroIncognita >= 1) {
            cantidadDivisor++;
        }

        numeroIncognita--;
    }
    while (numeroIncognita > 0);

    if (cantidadDivisor == 2) {
        alert("Su numero es PRIMO");
    }
    else {
        alert("Su numero NO es primo");
    }
}

function NumerosPrimos() {
    let numeroIngresado;
    let calculoDivisor;
    let cantidadDivisor;
    let cantidadDivisorDescentente;
    let numeroIncognita;
    let flag;
    let flag2;
    let flag3;
    let cantidadPrimos;

    numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);
    cantidadDivisor = 0;
    flag2 = 0;
    flag3 = 0;
    cantidadPrimos = 0;
    cantidadDivisorDescendente = 0;


    do {
        numeroIncognita = numeroIngresado;
        cantidadDivisor = 0;
        do {
            calculoDivisor = numeroIngresado % numeroIncognita;

            if (calculoDivisor == 0) {
                cantidadDivisor++;
            }

            numeroIncognita--;
        } while (numeroIncognita > 0);
        if (cantidadDivisor == 2) {
            cantidadPrimos++;
        }
        numeroIngresado--;
    } while (numeroIngresado > 0);

    alert("La cantidad de numeros primos desde el numero ingresado es: " + cantidadPrimos);
}