/*Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt 
y que muestre el perímetro por alert.
*/
function mostrar()
{
    let longitudLado;
    let calculoPerimetro;

    longitudLado = prompt("Ingrese la longitud de UNO de los lados del triangulo equilatero, expresado en cm");
    longitudLado = parseFloat(longitudLado);

    calculoPerimetro = longitudLado * 3

    alert("El perimetro del triangulo equilatero es de: " + calculoPerimetro);
}
