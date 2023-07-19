/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let continuar;
	let numeroIngresado;
	let sumaPositivos;
	let multiplicacionNegativos;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	continuar = "SI";

	while (continuar == "SI")
	{
		numeroIngresado = prompt("Ingrese su numero");
		numeroIngresado = parseFloat(numeroIngresado);
		
		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

		continuar = prompt("Si quiere añadir otro numero escriba SI. De lo contrario escriba NO");
	}

	if (multiplicacionNegativos == 1 && sumaPositivos != 0)
	{
		txtIdSuma.value = sumaPositivos.toFixed(2);
		txtIdProducto.value = 0;
	}
	else if (multiplicacionNegativos != 0 && sumaPositivos == 0)
	{
		txtIdProducto.value = multiplicacionNegativos.toFixed(2);
		txtIdSuma.value = 0;
	}
	else
	{
		txtIdSuma.value = sumaPositivos.toFixed(2);
		txtIdProducto.value = multiplicacionNegativos.toFixed(2);
	}

}//FIN DE LA FUNCIÓN