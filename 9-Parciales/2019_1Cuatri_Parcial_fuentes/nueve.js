/*Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en 
millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
(pais=tunes;habitantes = 10; t =1 )
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
(pais=china;habitantes = 2000; t =-12 )
*/

function mostrar()
{
    let nombrePais;
    let cantidadHabitantes;
    let temperaturaMinima;
    let continuar;
    let preguntaTempPar;
    let contadorTempPar;
    let flagHabitantes;
    let minHabitantes;
    let paisMinHabitantes;
    let paisesCalor;
    let acumuladorHabitantes;
    let contadorPaises;
    let promedioHabitantes;
    let flagFrio;
    let minTemp;
    let paisFrio;

    continuar = "SI";

    contadorTempPar = 0;
    contadorPaises = 0;

    acumuladorHabitantes = 0;

    flagHabitantes = 0;
    flagFrio = 0;

    while (continuar == "SI")
    {
        nombrePais = prompt("Ingrese el nombre del pais");

        do
        {
            cantidadHabitantes = prompt("Ingrese la cantidad de habitantes en MILLONES. Valido de 1 a 7000");
            cantidadHabitantes = parseInt(cantidadHabitantes);
        }
        while (cantidadHabitantes < 1 || cantidadHabitantes > 7000);

        do
        {
            temperaturaMinima = prompt("Ingrese la temperatura minima del territorio. Valido de -50 a 50");
            temperaturaMinima = parseFloat(temperaturaMinima);
        }
        while (temperaturaMinima < -50 || temperaturaMinima > 50);

        preguntaTempPar = temperaturaMinima % 2;

        if (preguntaTempPar == 0)
        {
            contadorTempPar++;
        }

        if (flagHabitantes == 0)
        {
            minHabitantes = cantidadHabitantes;
            paisMinHabitantes = nombrePais;
            flagHabitantes = 1;
        }
        else if (cantidadHabitantes < minHabitantes)
        {
            minHabitantes = cantidadHabitantes;
            paisMinHabitantes = nombrePais;
        }

        if (temperaturaMinima > 40)
        {
            paisesCalor++;
        }

        if (flagFrio == 0)
        {
            minTemp = temperaturaMinima;
            paisFrio = nombrePais;
            flagFrio = 1;
        }
        else if (temperaturaMinima < minTemp)
        {
            minTemp = temperaturaMinima;
            paisFrio = nombrePais;
        }

        acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantes;

        contadorPaises++;

        continuar = prompt("Desea continuar? Ingrese SI o NO, respetando mayusculas");
    }

    promedioHabitantes = acumuladorHabitantes / contadorPaises;

    document.write("Cantidad de temperaturas pares: " + contadorTempPar + "<br>" + 
    "Nombre del pais con menos habitantes: " + paisMinHabitantes + "<br>" + 
    "Cantidad de paises que superan los 40 grados: " + paisesCalor + "<br>" + 
    "Promedio de habitantes entre los paises ingresados: " + promedioHabitantes + "<br>" + 
    "Temperatura mínima ingresada y nombre del pais que registro esa temperatura: " + minTemp + " grados, correpondiente a " + paisFrio)
}
