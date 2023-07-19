/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let sumaTp1;

    precio1 = txtIdPrecioUno.value;
    precio1 = parseFloat(precio1);
    precio2 = txtIdPrecioDos.value;
    precio2 = parseFloat(precio2);
    precio3 = txtIdPrecioTres.value;
    precio3 = parseFloat(precio3);

    sumaTp1 = precio1 + precio2 + precio3;

    alert("La suma resultante es: " + sumaTp1.toFixed(2));
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedioTp1;

    precio1 = txtIdPrecioUno.value;
    precio1 = parseFloat(precio1);
    precio2 = txtIdPrecioDos.value;
    precio2 = parseFloat(precio2);
    precio3 = txtIdPrecioTres.value;
    precio3 = parseFloat(precio3);

    promedioTp1 = (precio1 + precio2 + precio3) / 3;

    alert("El promedio obtenido es: " + promedioTp1.toFixed(2));
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let sumaDePrecios1;
    let PrecioIVATp1;

    precio1 = txtIdPrecioUno.value;
    precio1 = parseFloat(precio1);
    precio2 = txtIdPrecioDos.value;
    precio2 = parseFloat(precio2);
    precio3 = txtIdPrecioTres.value;
    precio3 = parseFloat(precio3);

    sumaDePrecios1 = precio1 + precio2 + precio3;

    PrecioIVATp1 = sumaDePrecios1 + (sumaDePrecios1 * 0.21);

    alert("El precio final con IVA (Del 21%) incluido es: " + PrecioIVATp1.toFixed(2));
}
