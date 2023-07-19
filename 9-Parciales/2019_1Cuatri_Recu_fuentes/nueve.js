/*
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) 
y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino
*/

function mostrar()
{
    let nombreEstudiante;
    let edadEstudiante;
    let sexoEstudiante;
    let notaFinal;
    let continuar;
    let contadorHombresAprobados;
    let contadorMenores;
    let acumuladorNotasMenores;
    let promedioMenores;
    let contadorAdolescentes;
    let acumuladorNotasAdolescentes;
    let promedioAdolescentes;
    let contadorMayores;
    let acumuladorNotasMayores;
    let promedioMayores;
    let contadorHombres;
    let contadorMujeres;
    let acumuladorNotasHombres;
    let acumuladorNotasMujeres;
    let promedioHombres;
    let promedioMujeres;

    continuar = "SI";

    contadorHombresAprobados = 0;
    contadorMenores = 0;
    contadorAdolescentes = 0;
    contadorMayores = 0;
    contadorHombres = 0;
    contadorMujeres = 0;

    acumuladorNotasMenores = 0;
    acumuladorNotasAdolescentes = 0;
    acumuladorNotasMayores = 0;
    acumuladorNotasHombres = 0;
    acumuladorNotasMujeres = 0;

    while (continuar == "SI")
    {
        nombreEstudiante = prompt("Ingrese el nombre del estudiante");

        do
        {
            edadEstudiante = prompt("Ingrese la edad del estudiante. Valido de 3 a 80");
            edadEstudiante = parseInt(edadEstudiante);
        }
        while (edadEstudiante < 3 || edadEstudiante > 80);

        do
        {
            sexoEstudiante = prompt("Ingrese el sexo del estudiante: F o M. Respete mayusculas");
        }
        while (sexoEstudiante != "F" && sexoEstudiante != "M");

        do
        {
            notaFinal = prompt("Ingrese la nota del final. Valido del 1 al 10");
            notaFinal = parseFloat(notaFinal);
        }
        while (notaFinal < 1 || notaFinal > 10);

        if (notaFinal > 4 && sexoEstudiante == "M")
        {
            contadorHombresAprobados++;
        }

        if (edadEstudiante < 18)
        {
           contadorMenores++;
           acumuladorNotasMenores = acumuladorNotasMenores + notaFinal;
        }
        else
        {
            contadorMayores++;
            acumuladorNotasMayores = acumuladorNotasMayores + notaFinal;
        }

        if (edadEstudiante < 20 && edadEstudiante > 9)
        {
            contadorAdolescentes++;
            acumuladorNotasAdolescentes = acumuladorNotasAdolescentes + notaFinal;
        }

        switch(sexoEstudiante)
        {
            case "M":
                contadorHombres++;
                acumuladorNotasHombres = acumuladorNotasHombres + notaFinal;
                break;
            case "F":
                contadorMujeres++;
                acumuladorNotasMujeres = acumuladorNotasMujeres + notaFinal;
                break;
        }

        continuar = prompt("Desea continuar? Si asi lo desea, ingrese SI");
    }

    promedioMenores = acumuladorNotasMenores / contadorMenores;
    promedioAdolescentes = acumuladorNotasAdolescentes / contadorAdolescentes;
    promedioMayores = acumuladorNotasMayores / contadorMayores;
    promedioHombres = acumuladorNotasHombres / contadorHombres;
    promedioMujeres = acumuladorNotasMujeres / contadorMujeres;

    document.write("Cantidad de varones aprobados: " + contadorHombresAprobados + "<br>" +
    "Promedio de notas de los menores de edad: " + promedioMenores + "<br>" + 
    "Promedio de notas de los adolescentes: " + promedioAdolescentes + "<br>" + 
    "Promedio de notas de los mayores: " + promedioMayores + "<br>" + 
    "Promedio de notas por sexo masculino: " + promedioHombres + "<br>" +
    "Promedio de notas por sexo femenino: " + promedioMujeres)
}
