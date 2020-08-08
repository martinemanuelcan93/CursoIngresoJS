/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
   gradosf = parseInt(document.getElementById("txtIdTemperatura").value)
   gradosc = ((gradosf - 32) * 5/9).toFixed(2)
   alert(gradosf + "° Fahrenheit son "+gradosc +"° grados celcius").toFixed(2)
	
}

function CentigradosFahrenheit () 
{
   gradosc = parseInt(document.getElementById("txtIdTemperatura").value)
   gradosf = ((gradosc * 9/5) + 32).toFixed(2)
   alert(gradosc + "° Celsius son "+ gradosf +"° grados Fahreinheit").toFixed(2)
}
