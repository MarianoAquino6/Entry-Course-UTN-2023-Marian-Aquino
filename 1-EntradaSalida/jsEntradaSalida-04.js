/*
A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:

nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo

1 
a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel
c- el lugar con la mayor cantidad de días acumulados
d- la suma de todos los importes

2
e-el nombre del más pesado de los pasajeros y el del más liviano
f-el lugar donde se pagó el mayor importe
g-el nombre de la mujer más alta

3
h- Cuál fue la forma de pago más utilizada
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros

4
k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo

5-solo para alumnos que crean sus propios desafíos
m- inventate uno
n- se creativo en este
o- uno facil 
p- uno dificil

*/

function mostrar()
{
	//DECLARACION DE VARIABLES:

	let continuar;
	let nombreTitular;
	let lugar;
	let temporada;
	let cantidadDias;
	let importeViaje;
	let altura;
	let peso;
	let sexo;
	let equipajeMano;
	let metodoPago;
	let cantidadPersonasTemporadaAlta;
	let cantidadPersonasTemporadaBaja;
	let pesoVillaGessel;
	let acumuladorDiasPuerto;
	let acumuladorDiasVilla;
	let acumuladorDiasCordoba;
	let lugarConMasDias;
	let sumaImportes;
	let flagPeso;
	let masPesado;
	let masLiviano;
	let maxPeso;
	let minPeso;
	let flagImporte;
	let masCaro;
	let maxImporte;
	let flagMujerMasAlta;
	let mujerMasAlta;
	let maxAltura;
	let	contadorMercado;
	let contadorTarjeta;
	let contadorEfectivo;
	let metodoMasUsado;
	let temporadaMasPopular;
	let contadorPasajerosPuerto;
	let contadorPasajerosVilla;
	let contadorPasajerosCordoba;
	let lugarConMasPasajeros;
	let contadorPasajeros;
	let cantidadPasajerosConEquipMano;
	let porcentajeEquipMano;
	let contadorMujeres;
	let contadorHombres;
	let contadorNB;
	let porcentajeMujeres;
	let porcentajeHombres;
	let porcentajeNB;
	let acumuladorPeso;
	let impuestoAbismal;
	let pesoCordoba;
	let numeroRandomAsignado;
	let acumuladorNumerosRandom;
	let acumuladorImporteImpuestos;
	let importeFinalImpuesto;

	//ASIGNACION A LAS VARIABLES:

	continuar = "SI"

	cantidadPersonasTemporadaAlta = 0;
	cantidadPersonasTemporadaBaja = 0;

	pesoVillaGessel = 0;
	
	acumuladorDiasPuerto = 0;
	acumuladorDiasVilla = 0;
	acumuladorDiasCordoba = 0;

	contadorPasajerosPuerto = 0;
	contadorPasajerosVilla = 0;
	contadorPasajerosCordoba = 0;
	contadorPasajeros = 0;

	sumaImportes = 0;

	contadorMercado = 0;
	contadorTarjeta = 0;
	contadorEfectivo = 0;

	contadorDiasPuerto = 0;
	contadorDiasVilla = 0;
	contadorDiasCordoba = 0;
	
	cantidadPasajerosConEquipMano = 0;

	contadorHombres = 0;
	contadorMujeres = 0;
	contadorNB = 0;

	acumuladorPeso = 0;

	pesoCordoba = 0;

	acumuladorNumerosRandom = 0;
	acumuladorImporteImpuestos = 0;

	flagPeso = 0;
	flagImporte = 0;
	flagMujerMasAlta = 0;

	//INICIO DE OPERACIONES:

	while (continuar == "SI")
	{
		//VALIDACION DE DATOS
		
		nombreTitular = prompt("Ingrese su nombre");

		do
		{
			lugar = prompt("Ingrese su destino: Puerto Madryn, Villa Gessel o Cordoba. Respetando mayusculas");
		}
		while (lugar != "Puerto Madryn" && lugar != "Villa Gessel" && lugar != "Cordoba");

		do
		{
			temporada = prompt("Ingrese su temporada: Alta o Baja. Respetando mayusculas");
		}
		while (temporada != "Alta" && temporada != "Baja");

		cantidadDias = prompt("Ingrese la cantidad de dias");
		cantidadDias = parseInt(cantidadDias);

		importeViaje = prompt("Ingrese el importe del viaje");
		importeViaje = parseFloat(importeViaje);

		altura = prompt("Ingrese su altura en cm");
		altura = parseInt(altura);

		peso = prompt("Ingrese su peso en Kg");
		peso = parseFloat(peso);

		do
		{
			sexo = prompt("Ingrese su sexo: F, M o NB. Respetando mayusculas");
		}
		while (sexo != "F" && sexo != "M" && sexo != "NB");

		do
		{
			equipajeMano = prompt("Viaja con equipaje de mano? Ingrese SI o NO, respetando mayusculas");
		}
		while (equipajeMano != "SI" && equipajeMano != "NO");

		do
		{
			metodoPago = prompt("Ingrese su metodo de pago: Mercado, Tarjeta o Efectivo. Respetando mayusculas");
		}
		while (metodoPago != "Mercado" && metodoPago != "Tarjeta" && metodoPago != "Efectivo");

		//RESOLUCION DE EJERCICIOS CON LOS DATOS VALIDADOS:

		//1A: Cantidad de personas que viajan en cada temporada

		if (temporada == "Alta")
		{
			cantidadPersonasTemporadaAlta++;
		}
		else if (temporada == "Baja")
		{
			cantidadPersonasTemporadaBaja++;
		}
		
		//1B: Peso acumulado de todos los que viajan a villa gessel

		if (lugar == "Villa Gessel")
		{
			pesoVillaGessel = pesoVillaGessel + peso;
		}

		//1C: Lugar con la mayor cantidad de días acumulados

		switch(lugar)
		{
			case "Puerto Madryn":
				acumuladorDiasPuerto = acumuladorDiasPuerto + cantidadDias;
				contadorPasajerosPuerto++;
				break;
			case "Villa Gessel":
				acumuladorDiasVilla = acumuladorDiasVilla + cantidadDias;
				contadorPasajerosVilla++;
				break;
			case "Cordoba":
				acumuladorDiasCordoba = acumuladorDiasCordoba + cantidadDias;
				contadorPasajerosCordoba++;
				break;
		}
		
		if (acumuladorDiasPuerto > acumuladorDiasVilla && acumuladorDiasPuerto > acumuladorDiasCordoba)
		{
			lugarConMasDias = "Puerto Madryn";
		}
		else if (acumuladorDiasVilla > acumuladorDiasPuerto && acumuladorDiasVilla > acumuladorDiasCordoba)
		{
			lugarConMasDias = "Villa Gessel";
		}
		else if (acumuladorDiasCordoba > acumuladorDiasPuerto && acumuladorDiasCordoba > acumuladorDiasVilla)
		{
			lugarConMasDias = "Cordoba";
		}

		//1D: Suma de todos los importes
		
		sumaImportes = sumaImportes + importeViaje;

		//2E: Nombre del más pesado de los pasajeros y el del más liviano

		if (flagPeso == 0)
		{
			masPesado = nombreTitular;
			maxPeso = peso;
			masLiviano = nombreTitular;
			minPeso = peso;
			flagPeso++;
		}
		else
		{
			if (peso > maxPeso)
			{
				maxPeso = peso;
				masPesado = nombreTitular;
			}
			if (peso < minPeso)
			{
				minPeso = peso;
				masLiviano = nombreTitular;
			}
		}

		//2F: Lugar donde se pagó el mayor importe 

		if (flagImporte == 0)
		{
			masCaro = lugar;
			maxImporte = importeViaje;
			flagImporte++;
		}
		else if (importeViaje > maxImporte)
		{
			masCaro = lugar;
			maxImporte = importeViaje;
		}

		//2G: Nombre de la mujer más alta

		if (sexo == "F")
		{
			if (flagMujerMasAlta == 0)
			{
				maxAltura = altura;
				mujerMasAlta = nombreTitular;
				flagMujerMasAlta++;
			} 
			else if (altura > maxAltura)
			{
				mujerMasAlta = nombreTitular;
				maxAltura = altura;
			}
		}

		//3H: Forma de pago más utilizada

		switch(metodoPago)
		{
			case "Mercado":
				contadorMercado++;
				break;
			case "Tarjeta":
				contadorTarjeta++;
				break;
			case "Efectivo":
				contadorEfectivo++;
				break;
		}

		if (contadorMercado > contadorTarjeta && contadorMercado > contadorEfectivo)
		{
			metodoMasUsado = "Mercado";
		}
		else if (contadorTarjeta > contadorMercado && contadorTarjeta > contadorEfectivo)
		{
			metodoMasUsado = "Tarjeta";
		}
		else if (contadorEfectivo > contadorMercado && contadorEfectivo > contadorTarjeta)
		{
			metodoMasUsado = "Efectivo";
		}

		//3I: Temporada en la que se viajó más

		if (cantidadPersonasTemporadaAlta > cantidadPersonasTemporadaBaja)
		{
			temporadaMasPopular = "Temporada Alta";
		}
		else if (cantidadPersonasTemporadaBaja > cantidadPersonasTemporadaAlta)
		{
			temporadaMasPopular = "Temporada Baja";
		}

		//3J: Lugar que tuvo más pasajeros

		if (contadorPasajerosPuerto > contadorPasajerosVilla && contadorPasajerosPuerto > contadorPasajerosCordoba)
		{
			lugarConMasPasajeros = "Puerto Madryd";
		}
		else if (contadorPasajerosVilla > contadorPasajerosPuerto && contadorPasajerosVilla > contadorPasajerosCordoba)
		{
			lugarConMasPasajeros = "Villa Gessel";
		}
		else if (contadorPasajerosCordoba > contadorPasajerosPuerto && contadorPasajerosCordoba > contadorPasajerosVilla)
		{
			lugarConMasPasajeros = "Cordoba";
		}

		//4K: Porcentaje que usa equipaje de mano

		contadorPasajeros++;

		if (equipajeMano == "SI")
		{
			cantidadPasajerosConEquipMano++;
		}

		porcentajeEquipMano = (cantidadPasajerosConEquipMano * 100) / contadorPasajeros;

		//4L: Porcentaje que hay de cada sexo

		switch(sexo)
		{
			case "M":
				contadorHombres++;
				break;
			case "F":
				contadorMujeres++;
				break;
			case "NB":
				contadorNB++;
				break;
		}

		porcentajeHombres = (contadorHombres * 100) / contadorPasajeros;
		porcentajeMujeres = (contadorMujeres * 100) / contadorPasajeros;
		porcentajeNB = (contadorNB * 100) / contadorPasajeros;

		//5M: Suma de los pesos de todos los pasajeros

		acumuladorPeso = acumuladorPeso + peso;

		//5N: Si el importe correspondiente al pasajero es mayor a 120, añadir un 300% de impuestos sobre el mismo

		if (importeViaje > 120)
		{
			impuestoAbismal = (300 * importeViaje) / 100;
			importeFinalImpuesto = importeViaje + impuestoAbismal;
		}
		else
		{
			importeFinalImpuesto = importeViaje;
		}

		acumuladorImporteImpuestos = acumuladorImporteImpuestos + importeFinalImpuesto; 

		//5O: Peso acumulado de todos los pasajeros que iran a Cordoba

		if (lugar == "Cordoba")
		{
			pesoCordoba = pesoCordoba + peso;
		}

		//5P: Asignar un numero random del 1 al 10 a cada uno de los pasajeros, y luego realizar una suma de los mismos

		numeroRandomAsignado = Math.floor(Math.random() * 10) + 1;
		acumuladorNumerosRandom = acumuladorNumerosRandom + numeroRandomAsignado;

		//SE PREGUNTA AL USUARIO SI DESEA CONTINUAR:

		continuar = prompt("Desea continuar con otro pasajero? SI o NO. Respetando mayusculas");
	}

		//UNA VEZ EL USUARIO HAYA TERMINADO DE INGRESAR LOS DATOS DE LOS PASAJEROS, SE MUESTRA LA INFORMACION:

		document.write
		(
			"Cantidad de personas que viajan en temporada alta: " + cantidadPersonasTemporadaAlta + "<br>" +
			"Cantidad de personas que viajan en temporada baja: " + cantidadPersonasTemporadaBaja + "<br>" +
			"Peso acumulado de todos los que viajan a villa gessel: " + pesoVillaGessel + " Kg" + "<br>" +
			"Lugar con la mayor cantidad de días acumulados: " + lugarConMasDias + "<br>" +
			"Suma de todos los importes: " + "$" + sumaImportes + "<br>" +
			"Nombre del pasajero mas pesado: " + masPesado + "<br>" +
			"Nombre del pasajero mas liviano: " + masLiviano + "<br>" +
			"Lugar donde se pagó el mayor importe: " + masCaro + "<br>" +
			"Nombre de la mujer más alta: " + mujerMasAlta + "<br>" +
			"Forma de pago más utilizada: " + metodoMasUsado + "<br>" +
			"Temporada en la que se viajó más: " + temporadaMasPopular + "<br>" +
			"Lugar que tuvo más pasajeros: " + lugarConMasPasajeros + "<br>" +
			"Porcentaje que usa equipaje de mano: " + porcentajeEquipMano.toFixed(2) + "%" + "<br>" +
			"Porcentaje de Hombres: " + porcentajeHombres.toFixed(2) + "%" + "<br>" +
			"Porcentaje de Mujeres: " + porcentajeMujeres.toFixed(2) + "%" + "<br>" +
			"Porcentaje de NB: " + porcentajeNB.toFixed(2) + "%" + "<br>" +
			"Suma de los pesos de todos los pasajeros: " + acumuladorPeso + " Kg" + "<br>" +
			"Suma de todos los importes, si se aplica el impuesto del 300%: " + "$" + acumuladorImporteImpuestos + "<br>" +
			"Suma de numeros random asignados a los pasajeros: " + acumuladorNumerosRandom
		)
}