/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let perimetroRectangulo;
    let cantidadAlambre;

    largoTerreno = txtIdLargo.value;
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = txtIdAncho.value;
    anchoTerreno = parseFloat(anchoTerreno);
    
    perimetroRectangulo = (largoTerreno * 2) + (anchoTerreno * 2);

    cantidadAlambre = perimetroRectangulo * 3;

    alert("Se requiere " + cantidadAlambre.toFixed(2) + " metros de alambre para alambrar con 3 hilos el terreno");
}
function Circulo () 
{
	let radioCirculo;
    let circunferenciaCirculo;
    let alambreNecesario;

    radioCirculo = txtIdRadio.value;
    radioCirculo = parseFloat(radioCirculo);

    circunferenciaCirculo = 2 * radioCirculo * Math.PI;

    alambreNecesario = circunferenciaCirculo * 3;

    alert("Se requiere " + alambreNecesario.toFixed(2) + " metros de alambre para alambrar con 3 hilos el terreno");
}
function Materiales () 
{
	let largoTerreno2;
    let anchoTerreno2;
    let bolsasCemento;
    let bolsasCal;

    largoTerreno2 = txtIdLargo.value;
    largoTerreno2 = parseFloat(largoTerreno2);
    anchoTerreno2 = txtIdAncho.value;
    anchoTerreno2 = parseFloat(anchoTerreno2);

    bolsasCemento = (largoTerreno2 * anchoTerreno2) * 2;
    bolsasCal = (largoTerreno2 * anchoTerreno2) * 3;

    alert("Se requieren " + bolsasCemento.toFixed(1) + " bolsas de cemento y " + bolsasCal.toFixed(1) + " bolsas de cal para construir el piso del terreno rectangular.");
}
