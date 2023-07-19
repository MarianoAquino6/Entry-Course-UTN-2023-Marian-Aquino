/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumentoDeSueldo;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	aumentoDeSueldo = sueldo + (sueldo * 0.10);

	txtIdResultado.value = aumentoDeSueldo;
}
