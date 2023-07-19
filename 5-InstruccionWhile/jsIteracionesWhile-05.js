/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	do
	{
		sexoIngresado = prompt("Si su sexo es femenino ingrese F. Si es masculino ingrese M");
	}
	while (sexoIngresado != "F" && sexoIngresado != "M");

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN