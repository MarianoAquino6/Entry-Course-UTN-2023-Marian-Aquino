/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroOne;
	let numeroTwo;
	let resto;

	numeroOne = txtIdNumeroDividendo.value;
	numeroOne = parseInt(numeroOne);
	numeroTwo = txtIdNumeroDivisor.value;
	numeroTwo = parseInt(numeroTwo);

	resto = (numeroOne % numeroTwo);

	alert ("El resto es: " + resto);
}
