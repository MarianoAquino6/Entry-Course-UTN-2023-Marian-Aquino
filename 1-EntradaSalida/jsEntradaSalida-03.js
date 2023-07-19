/*
Ejercicio 3:

"La carnicería barrial ""Paul Mc Carne"" quiere crear su propia página web para poder realizar ventas a domicilio. 
Para esto nos piden hacer un programa para que los clientes realicen compras y la carnicería gestione los 
pedidos con eficiencia.

Lista de precios
- Asado: $2500 x Kg
- Vacio: $2700 x Kg
- Achuras: $ 950 x Kg
- Pollo: $615 x Kg

Se le pide al usuario agregar productos a su ""carrito"" hasta que el desee: 

· Productos (Asado, Vacío, Achuras, Pollo)
· Cantidad de kilos. (No puede ser negativo o mayor a 20 por stock)
· País del cual proviene (Argentina, Italia, Japón, Uruguay)

Aclaraciones:
- Si compro achuras, se agrega un 15%  porque están escaseando en el país.
- Si el producto no proviene de la producción interna del país se le cobra un 20% de interés sobre el precio
bruto de ese producto
- Si la cantidad de kilos total supera los 10 Kg se debe cobrar un interés del 25% Sobre el precio bruto.
- Si compró todos los items de la lista (Asado, vacio, achuras y pollo), el cliente recibira un 10% de descuento.

Se le informa: 
A) Producto más requerido (Sin importar su peso).
B) Porcentaje de cortes de carne (Asado, Vacío, Pollo) solicitado sobre el total de compras.
C) Promedio de achuras sobre el total de kilos de todos los productos.
D) Cuánto pagará el cliente incluyendo descuentos e intereses.
*/

function mostrar()
{
	let continuar;
	let producto;
	let cantidadKilos;
	let paisOrigen;

	const PRECIO_ASADO = 2500;
	const PRECIO_VACIO = 2700;
	const PRECIO_ACHURAS = 950;
	const PRECIO_POLLO = 615;
	let cantidadAumentoAchuras;
	let cantidadAumentoExtranjero;
	let acumuladorPrecioBruto;
	let aumentoAchuras;
	let aumentoExtranjero;
	let aumentoMuchosKilos;
	let descuento;
	let precioFinalAchuras;
	let precioFinalExtranjero;

	let contadorAsado;
	let contadorVacio;
	let contadorAchuras;
	let contadorPollo;
	let productoMasRequerido;

	let contadorCompras;
	let porcentajeAsado;
	let porcentajeVacio;
	let porcentajePollo;

	let acumuladorPesoAchuras;
	let acumuladorPesoTotal;
	let promedioAchuras;

	continuar = "SI";

	contadorAsado = 0;
	contadorAchuras = 0;
	contadorVacio = 0;
	contadorPollo = 0;
	contadorCompras = 0;

	acumuladorPesoAchuras = 0;
	acumuladorPesoTotal = 0;
	acumuladorPrecioBruto = 0;

	while (continuar == "SI")
	{
		do
		{
			producto = prompt("Ingrese el producto: Asado, Vacío, Achuras o Pollo");
		}
		while (producto != "Asado" && producto != "Vacio" && producto != "Achuras" && producto != "Pollo");

		do
		{
			cantidadKilos = prompt("Ingrese la cantidad de kilos, en KG");
			cantidadKilos = parseFloat(cantidadKilos);
		}
		while (cantidadKilos < 0 || cantidadKilos > 20);

		do
		{
			paisOrigen = prompt("Ingrese el pais de origen: Argentina, Italia, Japon o Uruguay");
		}
		while (paisOrigen != "Argentina" && paisOrigen != "Italia" && paisOrigen != "Japon" && paisOrigen != "Uruguay");

		switch (producto)
		{
			case "Achuras":
				contadorAchuras++;
				acumuladorPesoAchuras = acumuladorPesoAchuras + cantidadKilos;

				aumentoAchuras = 15;
				cantidadAumentoAchuras = (aumentoAchuras * (PRECIO_ACHURAS * cantidadKilos)) / 100;
				precioFinalAchuras = (PRECIO_ACHURAS * cantidadKilos) + cantidadAumentoAchuras;

				if (paisOrigen != "Argentina")
				{
					aumentoExtranjero = 20;
					cantidadAumentoExtranjero = (aumentoExtranjero * (PRECIO_ACHURAS * cantidadKilos)) / 100;
					precioFinalAchuras = ((PRECIO_ACHURAS * cantidadKilos) + cantidadAumentoExtranjero + cantidadAumentoAchuras);
				}

				break;
			case "Asado":
				contadorAsado++;
				if (paisOrigen != "Argentina")
				{
					aumentoExtranjero = 20;
					cantidadAumentoExtranjero = (aumentoExtranjero * (PRECIO_ASADO * cantidadKilos)) / 100;
					precioFinalExtranjero = ((PRECIO_ASADO * cantidadKilos) + cantidadAumentoExtranjero);
				}
				break;
			case "Pollo":
				contadorPollo++;
				if (paisOrigen != "Argentina")
				{
					aumentoExtranjero = 20;
					cantidadAumentoExtranjero = (aumentoExtranjero * (PRECIO_POLLO * cantidadKilos)) / 100;
					precioFinalExtranjero = ((PRECIO_POLLO * cantidadKilos) + cantidadAumentoExtranjero);
				}
				break;
			case "Vacio":
				contadorVacio++;
				if (paisOrigen != "Argentina")
				{
					aumentoExtranjero = 20;
					cantidadAumentoExtranjero = (aumentoExtranjero * (PRECIO_VACIO * cantidadKilos)) / 100;
					precioFinalExtranjero = ((PRECIO_VACIO * cantidadKilos) + cantidadAumentoExtranjero);
				}
				break;
		}

		acumuladorPesoTotal = acumuladorPesoTotal + cantidadKilos;

		contadorCompras++;

		continuar = prompt("Si desea continuar ingrese SI");
	}

	if (acumuladorPesoTotal > 10)
		{
			aumentoMuchosKilos = 25;
		}

	if (contadorAsado != 0 && contadorVacio != 0 && contadorAchuras != 0 && contadorPollo != 0)
	{
		descuento = 10;
	}

	if (contadorAchuras > contadorAsado && contadorAchuras > contadorPollo && contadorAchuras > contadorVacio)
	{
		productoMasRequerido = "Achuras";
	}
	else if (contadorAsado > contadorPollo && contadorAsado > contadorVacio)
	{
		productoMasRequerido = "Asado";
	}
	else if (contadorPollo > contadorVacio)
	{
		productoMasRequerido = "Pollo";
	}
	else 
	{
		productoMasRequerido = "Vacio";
	}

	porcentajeAsado = (contadorAsado * 100) / contadorCompras;
	porcentajeVacio = (contadorVacio * 100) / contadorCompras;
	porcentajePollo = (contadorPollo * 100) / contadorCompras;

	promedioAchuras = acumuladorPesoAchuras / acumuladorPesoTotal;

	document.write("Producto más requerido (Sin importar su peso): " + productoMasRequerido + "<br>" + 
	"Porcentaje de cortes de carne (Asado, Vacío, Pollo) solicitado sobre el total de compras: Asado: " + porcentajeAsado + "%, Vacio: " + porcentajeVacio + "%, Pollo: " + porcentajePollo + "%" + "<br>" + 
	"Promedio de achuras sobre el total de kilos de todos los productos: " + promedioAchuras + "<br>" + 
	"Cuánto pagará el cliente incluyendo descuentos e intereses: ");
}