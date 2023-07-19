/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt("Ingrese un número entre 0 y 9.");
	numeroIngresado = parseFloat(numeroIngresado);
	
	while (numeroIngresado > 9 || numeroIngresado < 0)
	{
		alert("Te equivocaste");
		numeroIngresado = prompt("Volve a intentar");
	}

	txtIdNumero.value = numeroIngresado;
}//FIN DE LA FUNCIÓN