/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let numeroMaximo;
	let numeroMinimo;
	let flag;

	flag = 0;
	respuesta = "SI";

	while (respuesta == "SI")
	{
		numeroIngresado = prompt("Ingrese su numero");
		numeroIngresado = parseFloat(numeroIngresado);
		
		if (flag == 0)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flag++;
		}
		else
		{
			if (numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			if (numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta = prompt("Si desea agregar otro numero escriba SI. De lo contrario, NO");
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN