function mostrar()
{
let numeroPedido1;
let numeroPedido2;

numeroPedido1 = prompt("Ingrese su primer numero");
numeroPedido1 = parseInt(numeroPedido1);
numeroPedido2 = prompt("Ingrese su segundo numero");
numeroPedido2 = parseInt(numeroPedido2);

if (numeroPedido1 == numeroPedido2)
{
    alert(numeroPedido1 + " " + numeroPedido2);
}
else if (numeroPedido1 > numeroPedido2)
{
    let resta;
    resta = numeroPedido1 - numeroPedido2;
    alert("Resultado de resta de ambos numeros: " + resta);
}
else if (numeroPedido1 < numeroPedido2)
{
    let suma;
    suma = numeroPedido1 + numeroPedido2;
    alert("Resultado de suma de ambos numeros: " + suma);
    
    if (suma > 10)
    {
        alert("la suma es " + suma + " y supero el 10");
    }
}
}