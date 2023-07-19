function mostrar()
{
	let edad;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad >= 18)
	{
		alert("La persona es mayor de edad");
	}
	else if (edad >= 14)
	{
		alert("La persona es adolescente");
	}
	else
	{
		alert("La persona es un niño");
	}
}//FIN DE LA FUNCIÓN