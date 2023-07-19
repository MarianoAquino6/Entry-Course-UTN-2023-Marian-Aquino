function mostrar()
{
	let mesDelAno;
	
	mesDelAno = txtIdMes.value;

	switch(mesDelAno)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		default:
			alert("Tiene 31 dias");
	}
}//FIN DE LA FUNCIÓN