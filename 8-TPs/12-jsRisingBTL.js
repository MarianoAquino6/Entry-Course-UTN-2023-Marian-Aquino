/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;

	do
	{
		edadIngresada = prompt("Ingrese su edad, entre 18 y 90 años inclusive");
	}
	while (edadIngresada < 18 || edadIngresada > 90);
	txtIdEdad.value = edadIngresada;

	do 
	{
		sexoIngresado = prompt("Ingrese su sexo. M para masculino y F para femenino");
	} 
	while (sexoIngresado != "M" && sexoIngresado != "F");
	txtIdSexo.value = sexoIngresado;

	do
	{
		estadoCivilIngresado = prompt("Ingrese su estado civil:" + "\n" + "1: Soltero" + "\n" + "2: Casado" + "\n" + "3: Divorciado" + "\n" + "4: Viudo");
	}
	while (estadoCivilIngresado < 1 || estadoCivilIngresado > 4);
	txtIdEstadoCivil.value = estadoCivilIngresado;

	do
	{
		sueldoBruto = prompt("Ingrese su sueldo bruto. No menor a 8000");
		sueldoBruto = parseFloat(sueldoBruto);
	}
	while (sueldoBruto < 8000);
	txtIdSueldo.value = sueldoBruto;

	do
	{
		numeroLegajo = prompt("Ingrese el numero de legajo. Sin ceros a la izquierda y de 4 cifras");
	}
	while (numeroLegajo < 1000 || numeroLegajo > 9999);
	txtIdLegajo.value = numeroLegajo;

	do
	{
		nacionalidad = prompt("Ingrese su nacionalidad:" + "\n" + "A: Argentinos" + "\n" + "E: Extranjeros" + "\n" + "N: Nacionalizados")
	}
	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N");
	txtIdNacionalidad.value = nacionalidad;
}