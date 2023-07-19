function mostrar()
{
	let notaRandom;

	notaRandom = Math.floor(Math.random() * 10) + 1;

	if (notaRandom >= 9)
	{
		alert("Excelente");
	}
	else if (notaRandom >= 4)
	{
		alert("Aprobo");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN