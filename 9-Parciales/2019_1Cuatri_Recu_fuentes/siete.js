/*
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,
con los kilos (validar entre 0 y 500) , sabor validar(carne, vegetales, pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor.
c) La cantidad de sabor carne y el promedio de kilos de sabor carne.
*/
function mostrar()
{
    const BOLSAS_ALIMENTO = 10;
    let kilos;
    let sabor;
    let acumuladorKilos;
    let promedio;
    let flagPeso;
    let minPeso;
    let saborLiviano;
    let contadorCarne;
    let acumuladorCarne;
    let promedioCarne;
    let contadorBolsas;
    let contadorComprasCarne;

    contadorCarne = 0;
    contadorBolsas = 0;
    contadorComprasCarne = 0;

    acumuladorKilos = 0;
    acumuladorCarne = 0;

    flagPeso = 0;

    while (contadorBolsas < BOLSAS_ALIMENTO)
    {
        do
        {
            kilos = prompt("Ingrese la cantidad de kilos");
            kilos = parseFloat(kilos);
        }
        while (kilos < 0 || kilos > 500);

        do
        {
            sabor = prompt("Ingrese el sabor: Carne, Vegetales, Pollo. Respetar mayusculas")
        }
        while (sabor != "Carne" && sabor != "Vegetales" && sabor != "Pollo");

        acumuladorKilos = acumuladorKilos + kilos;

        if (flagPeso == 0)
        {
            minPeso = kilos;
            saborLiviano = sabor;
            flagPeso = 1;
        }
        else if (kilos < minPeso)
        {
            minPeso = kilos;
            saborLiviano = sabor;
        }

        if (sabor == "Carne")
        {
        acumuladorCarne = acumuladorCarne + kilos;
        contadorComprasCarne++;
        }

        contadorBolsas++;
    }

    promedio = acumuladorKilos / BOLSAS_ALIMENTO;
    promedioCarne = acumuladorCarne / contadorComprasCarne;

    alert("Promedio de los kilos totales: " + promedio + "\n" +
    "El mas liviano y su sabor: " + minPeso + " Kg. El sabor es " + saborLiviano + "\n" + 
    "La cantidad de sabor carne: " + acumuladorCarne + "\n" +
    "Cantidad de sabor carne y promedio de kilos de sabor carne: " + acumuladorCarne + " Kg de carne. Su promedio es de " + promedioCarne);
}
