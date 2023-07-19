/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let cantidadProductos;
	let flag;
	let minAlcohol;
	let cantidadBarato;
	let fabricanteBarato;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let unidadesTotal;
	let masComprado;
	let promedioCompra;
	const CANTIDAD_COMPRAS = 5;

	cantidadProductos = 0;
	unidadesTotal = 0;

	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0;

	flag = 0;

	while (cantidadProductos < CANTIDAD_COMPRAS)
	{
		tipo = prompt("Ingrese el tipo de producto: Barbijo , Jabon o Alcohol. Respete mayusculas");
		
		do
		{
			precio = prompt("Ingrese el precio correspondiente al producto. Valido de 100 a 300");
			precio = parseFloat(precio);
		}
		while (precio < 100 || precio > 300);

		do
		{
			cantidad = prompt("Ingrese la cantidad de unidades. Valido de 1 al 1000")
			cantidad = parseInt(cantidad);
		}
		while (cantidad < 1 || cantidad > 1000);

		marca = prompt("Ingrese la marca");

		fabricante = prompt("Ingrese el nombre del fabricante")

		//PUNTO A:

		if (tipo == "Alcohol")
		{
			if (flag == 0)
			{
				minAlcohol = precio;
				cantidadBarato = cantidad;
				fabricanteBarato = fabricante;
				flag = 1;
			}
			else if (precio < minAlcohol)
			{
				minAlcohol = precio;
				cantidadBarato = cantidad;
				fabricanteBarato = fabricante;
			}
		}

		//PUNTO B Y C:

		switch(tipo)
		{
			case "Barbijo":
			acumuladorBarbijo = acumuladorBarbijo + cantidad;
			break;
			case "Jabon":
			acumuladorJabon = acumuladorJabon + cantidad;
			break;
			case "Alcohol":
			acumuladorAlcohol = acumuladorAlcohol + cantidad;
			break;
		}

		unidadesTotal = unidadesTotal + cantidad;

		cantidadProductos++;
	}

	//CONTINUACION PUNTO B:

	if (acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
	{
		masComprado = acumuladorBarbijo;
	}
	else if (acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol)
	{
		masComprado = acumuladorJabon;
	}
	else if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		masComprado = acumuladorAlcohol;
	}

	promedioCompra = masComprado / CANTIDAD_COMPRAS;

	alert("Cantidad de unidades de alcohol mas barato: " + cantidadBarato + "\n" +
	"Fabricante de alcohol mas barato: " + fabricanteBarato + "\n" + 
	"Promedio por compra del tipo mas comprado: " + promedioCompra.toFixed(2) + "%" + "\n" +
	"Cantidad total de Jabones: " + acumuladorJabon);
}