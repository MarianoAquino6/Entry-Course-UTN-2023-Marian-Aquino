function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	contador=0;
	acumulador=0;
	
	while (contador < 5)
	{
		numeroIngresado = prompt("Ingrese los 5 numeros... de a uno");
		numeroIngresado = parseFloat(numeroIngresado);
		
		contador++;
		acumulador = acumulador + numeroIngresado;
	}
	
	promedio = acumulador / contador;
	txtIdSuma.value = acumulador.toFixed(2);
	txtIdPromedio.value = promedio.toFixed(2);
}//FIN DE LA FUNCIÓN