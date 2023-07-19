/*
Al presionar el botón pedir números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
10.Porcentaje de números positivos y negativos.
11.De los positivos el más grande.
12.De los negativos el más chico.
*/

function mostrar()
{
	let respuesta;
	let numeroIngresado;
	let sumaPositivos;
	let cantidadPositivos;
	let sumaNegativos;
	let cantidadNegativos;
	let cantidadCeros;
	let calculoPares;
	let cantidadPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPositivosNegativos;
	let sumaTotal;
	let porcentajePositivos;
	let porcentajeNegativos;
	let flagPositivos;
	let flagNegativos;
	let maximoPositivos;
	let minimoNegativos;

	respuesta = "SI";
	sumaPositivos = 0;
	cantidadPositivos = 0;
	sumaNegativos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	flagPositivos = 0;
	flagNegativos = 0;

	while (respuesta == "SI")
	{
		numeroIngresado = prompt("Ingrese su numero");
		numeroIngresado = parseFloat(numeroIngresado);

		calculoPares = numeroIngresado % 2;

		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos ++;

			if (flagPositivos == 0)
			{
				maximoPositivos = numeroIngresado;
				flagPositivos++;
			}
			else if (numeroIngresado > maximoPositivos)
			{
				maximoPositivos = numeroIngresado;
			}
		}
		else if (numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos ++;

			if (flagNegativos == 0)
			{
				minimoNegativos = numeroIngresado;
				flagNegativos++;
			}
			if (numeroIngresado < minimoNegativos)
			{
				minimoNegativos = numeroIngresado;
			}
		}
		else
		{
			cantidadCeros ++;
		}

		if (calculoPares == 0)
		{
			cantidadPares++;
		}

		respuesta = prompt("Si desea agregar otro numero escriba SI. De lo contrario, NO");
	}

		promedioPositivos = sumaPositivos / cantidadPositivos;
		promedioNegativos = sumaNegativos / cantidadNegativos;
		diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;
		sumaTotal = sumaNegativos + sumaPositivos;
		porcentajePositivos = (sumaPositivos * 100) / sumaTotal;
		porcentajeNegativos = (sumaNegativos * 100) / sumaTotal;

		document.write(
			"Suma de los negativos : " + sumaNegativos +"<br>" + 
			"Suma de los positivos: " + sumaPositivos + "<br>" +
			"Cantidad de positivos: " + cantidadPositivos + "<br>" +
			"Cantidad de negativos: " + cantidadNegativos + "<br>" +
			"Cantidad de ceros: " + cantidadCeros + "<br>" + 
			"Cantidad de numeros pares: " + cantidadPares + "<br>" +
			"Promedio de positivos: " + promedioPositivos.toFixed(2) + "<br>" + 
			"Promedio de negativos: " + promedioNegativos.toFixed(2) + "<br>" +
			"Diferencia entre positivos y negativos: " + diferenciaPositivosNegativos.toFixed(2) + "<br>" +
			"Porcentaje de numeros positivos: " + porcentajePositivos.toFixed(2) + "%" + "<br>" +
			"Porcentaje de numeros negativos: " + porcentajeNegativos.toFixed(2) + "%" + "<br>" +
			"Numero positivo mayor: " + maximoPositivos + "<br>" +
			"Numero negativo menor: " + minimoNegativos 
			)
}//FIN DE LA FUNCIÓN