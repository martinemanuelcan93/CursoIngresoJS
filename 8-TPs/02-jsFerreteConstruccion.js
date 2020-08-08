/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{var largo;
    var ancho;
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    alert(`Usted debe comprar ${(((partseInt(largo))+parseInt(ancho))*2)*3} metros de alambre`);
}
function Circulo ()
{
    var radio ;
    radio = document.getElementById("txtIdRadio").value;
    alert(`Usted debe comprar ${((parseInt(radio)*(Math.PI*2))*3).toFixed(2)} metros de alambre`);
}
function Materiales ()
{
    var area;
    area = parseInt(document.getElementById("txtIdLargo").value)*parseInt(document.getElementById("txtIdAncho").value);
    alert(`Usted necesita ${area * 2} bolsas de cemento y ${area * 3} de cal`);
}
