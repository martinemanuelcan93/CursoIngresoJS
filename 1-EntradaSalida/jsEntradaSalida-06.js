/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
/*

function sumar()

{//1)Defino variables 
	var year; 
	var year1;
	var resultado;

//2)Asigno valores
	year  = document.getElementById("txtIdNumeroUno").value;
    year1 = document.getElementById("txtIdNumeroDos").value;

//3)Transformo de string a entero	
	
    year = parseint(year);
	year1 = parseInt(year1);

//4)Defino que es "Resultado"
	resultado = year + year1 

	alert("La suma total es " + resultado);
}
*/
// tambien se puede achicar mas el codigo haciendo lo siguiente :

function sumar()

{
	var n; 
	var n1;
	// si uso let en vez de var, es local la variable 

	n  = parseInt(document.getElementById("txtIdNumeroUno").value);
    n1 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	alert("La suma total es " + (n + n1));

}