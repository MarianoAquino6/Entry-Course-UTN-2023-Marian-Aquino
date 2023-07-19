/*A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, 
que sumados son xx kilos y el promedio de peso xx ".
*/
function mostrar()
{
  let nombre1;
  let nombre2;
  let peso1;
  let peso2;
  let sumaPeso;
  let promedioPeso;

  nombre1 = prompt("Ingrese el primer nombre");
  nombre2 = prompt("Ingrese el segundo nombre");

  peso1 = prompt("Ingrese el primer peso");
  peso1 = parseFloat(peso1);
  peso2 = prompt("Ingrese el segundo peso");
  peso2 = parseFloat(peso2);

  sumaPeso = peso1 + peso2;

  promedioPeso = sumaPeso / 2;

  alert("Ustedes se llaman " + nombre1 + " y " + nombre2  + ", pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + sumaPeso + " kilos y el promedio de peso es " + promedioPeso);


}
