function mostrar()
    {
        let numeroPedido1;
        let numeroPedido2;
        let divisible;
        
        numeroPedido1 = prompt("Ingrese su primer numero");
        numeroPedido1 = parseInt(numeroPedido1);
        numeroPedido2 = prompt("Ingrese su segundo numero");
        numeroPedido2 = parseInt(numeroPedido2);

        divisible = numeroPedido1 % numeroPedido2
        
        if (numeroPedido1 == numeroPedido2)
        {
            alert(numeroPedido1 * numeroPedido2);
        }
        else if (divisible == 0)
        {
            let resta;
            resta = numeroPedido1 - numeroPedido2;
            alert("Resultado de resta de ambos numeros: " + resta);
        }
        else 
        {
            let resto;
            resto = numeroPedido1 % numeroPedido2;
            alert("El resto entre ambos numeros es: " + resto);
            
            if (resto > 3)
            {
                alert("El resto es mayor a 3");
            }
        }
        }




//Pedir dos números y mostrar el resultado:
//Si son iguales los muestro el cuadrado del numero.
//Si el primero divisible por el segundo, los resto,
//de lo contrario muestro solo el resto.
//si el resto es mayor a 3(tres ) informarlo por alert.