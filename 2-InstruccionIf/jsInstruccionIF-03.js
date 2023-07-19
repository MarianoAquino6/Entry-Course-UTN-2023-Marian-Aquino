function mostrar()
{
	let edad;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad >= 18)
	{
		alert("La persona es mayor de edad");
	}
	else
	{
		alert("La persona no es mayor de edad");
	}
}//FIN DE LA FUNCIÓN