function mostrar()
{
	let destinoIngresado;

	destinoIngresado = txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Punto cardinal oeste");
			break;
		case "Cataratas":
			alert("Punto cardinal norte");
			break;
		case "Mar del plata":
			alert("Punto cardinal este");
			break;
		case "Ushuaia":
			alert("Punto cardinal sur");
			break;
	}
}//FIN DE LA FUNCIÓN