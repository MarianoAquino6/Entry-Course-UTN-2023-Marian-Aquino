function mostrar()
{
	let numero;
	let contador;
	let calculoDivisor;
	let contadorDivisores;

	numero = prompt("Ingrese su numero");
	contadorDivisores = 0;

	for (contador = 1; contador <= numero; contador++)
	{
		calculoDivisor = numero % contador;
		if (calculoDivisor == 0)
		{
			contadorDivisores++;
			alert("Se encontro: " + contador)
		}
	}

	alert("Total: " + contadorDivisores)

}//FIN DE LA FUNCIÓN