function mostrar()
{
	let numero;
	let contador;
	let calculoPar;
	let contadorPares;

	numero = prompt("Ingrese su numero");
	contadorPares = 0;

	for (contador = 1; contador <= numero; contador++)
	{
		calculoPar = contador % 2;
		if (calculoPar == 0)
		{
			contadorPares++;
			alert("Se encontro: " + contador)
		}
	}

	alert("Total: " + contadorPares)

}//FIN DE LA FUNCIÓN