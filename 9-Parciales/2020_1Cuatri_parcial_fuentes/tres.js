/* En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	let continuar;
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let flagTemperatura;
	let maxTemperatura;
	let pasajeroMasTemperatura;
	let contadorViudos;
	let contadorSolteroOViudo;
	let ancianosConFiebre;
	let contadorHombresSolteros;
	let acumuladorEdadSolteros;
	let promedioSolteros;

	continuar = "SI";

	contadorViudos = 0;
	contadorSolteroOViudo = 0;
	ancianosConFiebre = 0;
	contadorHombresSolteros = 0;
	acumuladorEdadSolteros = 0;

	flagTemperatura = 0;

	while (continuar == "SI")
	{
		//VALIDACION:
		nombre = prompt("Ingrese su nombre");
		
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		do
		{
			sexo = prompt("Ingrese su sexo. Puede ser F o M. Respete mayusculas");
		}
		while (sexo != "F" && sexo != "M");

		do
		{
			estadoCivil = prompt("Ingrese su estado civil. Puede ser Soltero, Casado o Viudo. Respete mayusculas")
		}
		while (estadoCivil != "Soltero" && estadoCivil != "Casado" && estadoCivil != "Viudo");

		temperatura = prompt("Ingrese su temperatura");
		temperatura = parseFloat(temperatura);

		//EJERCICIO A:

		if (flagTemperatura == 0)
		{
			maxTemperatura = temperatura;
			pasajeroMasTemperatura = nombre;
			flagTemperatura = 1;
		}
		else if (temperatura > maxTemperatura)
		{
			maxTemperatura = temperatura;
			pasajeroMasTemperatura = nombre;
		}

		//EJERCICIO B:

		if (estadoCivil == "Viudo" && edad > 18)
		{
			contadorViudos++;
		}

		//EJERCICIO C Y E (RESOLUCION CON SWITCH):

		if (sexo == "M")
		{
			switch (estadoCivil)
			{
				case "Soltero":
					contadorSolteroOViudo++;
					contadorHombresSolteros++;
					acumuladorEdadSolteros = acumuladorEdadSolteros + edad;
					break;
				case "Viudo":
					contadorSolteroOViudo++;
					break;
			}
		}


		/* RESOLUCION C Y E (RESOLUCION CON IF):

		if (sexo == M && estadoCivil == "Soltero" || estadoCivil == "Viudo")
		{
			contadorSolteroOViudo++;
		}

		if (sexo == "M" && estadoCivil == "Soltero")
		{
			contadorHombresSolteros++;
			acumuladorEdadSolteros = acumuladorEdadSolteros + edad;
		}
		*/
	
		//EJERCICIO D:

		if (edad > 60 && temperatura > 38)
		{
			ancianosConFiebre++;
		}

		continuar = prompt("Desea continuar? Conteste SI o NO, respetando mayusculas");
	}

	//CONTINUACION EJERCICIO E:
	promedioSolteros = acumuladorEdadSolteros / contadorHombresSolteros;

	//MUESTRO LOS DATOS:
	alert("Pasajero con mayor temperatura: " + pasajeroMasTemperatura + "\n" +
	"Mayores de edad viudos: " + contadorViudos + "\n" +
	"Cantidad hombres solteros o viudos: " + contadorSolteroOViudo + "\n" +
	"Personas de la tercera edad(Mas de 60 años) con mas de 38 de temperatura: " + ancianosConFiebre + "\n" +
	"Promedio de edad entre hombres solteros: " + promedioSolteros);
}
