/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numerosIngresados;
	let continuar;

	contador = 0;
	acumulador = 0;
	continuar = "SI";

	while (continuar == "SI")
	{
	numerosIngresados = prompt("Ingrese su numero");
	numerosIngresados = parseFloat(numerosIngresados);

	contador = contador + 1;
	acumulador = acumulador + numerosIngresados;
	
	continuar = prompt("Desea continuar? Escriba SI o NO");
	}

	txtIdSuma.value = acumulador.toFixed(2);
	txtIdPromedio.value = (acumulador / contador).toFixed(2);
}//FIN DE LA FUNCIÓN