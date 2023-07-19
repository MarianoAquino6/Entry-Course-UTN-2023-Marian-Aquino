function mostrar()
{
	let destinoIngresado;

	destinoIngresado = txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
			break;
	}
}//FIN DE LA FUNCIÓN