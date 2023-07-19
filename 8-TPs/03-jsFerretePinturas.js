/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaFarenheit;
    let conversionFarenheitACelsius;

    temperaturaFarenheit = txtIdTemperatura.value;
    temperaturaFarenheit = parseFloat(temperaturaFarenheit);
    
    conversionFarenheitACelsius = (temperaturaFarenheit - 32) / 1.8;
    conversionFarenheitACelsius = parseFloat(conversionFarenheitACelsius);

    alert(temperaturaFarenheit.toFixed(2) + " grados Farenheit equivalen a " + conversionFarenheitACelsius.toFixed(2) + " centigrados");


}

function CentigradosFahrenheit () 
{
	let temperaturaCelsius;
    let conversionCelsiusAFarenheit;

    temperaturaCelsius = txtIdTemperatura.value;
    temperaturaCelsius = parseFloat(temperaturaCelsius);
    
    conversionCelsiusAFarenheit = (temperaturaCelsius * 1.8) + 32;

    alert(temperaturaCelsius.toFixed(2) + " centigrados equivalen a " + conversionCelsiusAFarenheit.toFixed(2) + " grados Farenheit");
}
