/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let suma;

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	alert("El resultado de la suma es: " + suma);
}
