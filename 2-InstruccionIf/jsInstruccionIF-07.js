function mostrar()
{
	let edad;
	let estado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estado = estadoCivil.value;

	if (edad < 18 && estado != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
}//FIN DE LA FUNCIÓN