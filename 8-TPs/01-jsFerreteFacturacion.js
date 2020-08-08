/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ let precioa
 let preciob
 let precioc
precioa = parseInt(document.getElementById("txtIdPrecioUno").value)
preciob = parseInt(document.getElementById("txtIdPrecioDos").value)
precioc = parseInt(document.getElementById("txtIdPrecioTres").value)

 total = (precioa+ preciob + precioc)
	alert(total)
}
function Promedio () 
{   
    let precioa
    let preciob
    let precioc
   precioa = parseInt(document.getElementById("txtIdPrecioUno").value)
   preciob = parseInt(document.getElementById("txtIdPrecioDos").value)
   precioc = parseInt(document.getElementById("txtIdPrecioTres").value)
   
    total = (precioa+ preciob + precioc/3 ).toFixed(2)
       alert(total)
	
}
function PrecioFinal () 
{   
    let precioa
    let preciob
    let precioc
   precioa = parseInt(document.getElementById("txtIdPrecioUno").value)
   preciob = parseInt(document.getElementById("txtIdPrecioDos").value)
   precioc = parseInt(document.getElementById("txtIdPrecioTres").value)
   
    total = (precioa + preciob + precioc) + ((precioa + preciob + precioc) * 21 /100 ).toFixed(2)

       alert(total )
	
}