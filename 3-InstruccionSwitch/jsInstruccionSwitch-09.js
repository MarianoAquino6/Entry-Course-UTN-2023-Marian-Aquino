function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	const TARIFA_BASE = 15000;
	let Aumento;
	let Descuento;
	let precioFinal;

	Aumento = 0;
	Descuento = 0;
	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;

	switch(estacionIngresada)
	{
		case "Invierno":
			if (destinoIngresado == "Bariloche")
			{
				Aumento = 20;
			}
			else if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
			{
				Descuento = 10;
			}
			else if (destinoIngresado == "Mar del plata")
			{
				Descuento = 20;
			}
			break;
		case "Verano":
			if (destinoIngresado == "Bariloche")
			{
				Descuento = 20;
			}
			else if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
			{
				Aumento = 10;
			}
			else if (destinoIngresado == "Mar del plata")
			{
				Aumento = 20;
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destinoIngresado != "Cordoba")
			{
				Aumento = 10;
			}
			break;
	}

	if (Aumento != 0)
	{
		precioFinal = TARIFA_BASE + (TARIFA_BASE * Aumento/100);
	}
	else if (Descuento != 0)
	{
		precioFinal = TARIFA_BASE - (TARIFA_BASE * Descuento/100);
	}
	else
	{
		precioFinal = TARIFA_BASE;
	}

	alert("El precio final es: " + precioFinal);
}