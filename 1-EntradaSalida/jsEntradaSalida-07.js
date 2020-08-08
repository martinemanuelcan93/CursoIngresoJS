/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resultado por medio de "ALERT"
ej.: "la Resta es 750"*/ 

	function sumar()
{	var num;
	var num1;
	var total;
	num  = document.getElementById("txtIdNumeroUno").value; 
	num1 = document.getElementById("txtIdNumeroDos").value; 	
    num  = parseInt(num)
    num1 = parseInt(num1)
    total = num + num1
    alert("el total es " + total);
}

function restar()
{	var num
	var num1
	var total
	num  = document.getElementById("txtIdNumeroUno").value; 
	num1 = document.getElementById("txtIdNumeroDos").value; 	
    num  = parseInt(num)
    num1 = parseInt(num1)
    total = num - num1
    alert("el total es " + total)	
}

function multiplicar()
{	var num
	var num1
	var total
	num  = document.getElementById("txtIdNumeroUno").value; 
	num1 = document.getElementById("txtIdNumeroDos").value; 	
	num  = parseInt(num)
	num1 = parseInt(num1)
	total = num*num1
	alert("el total es " + total)	
}

function dividir()
{	var num
	var num1
	var total
	num  = document.getElementById("txtIdNumeroUno").value;
	num1 = document.getElementById("txtIdNumeroDos").value;
	num  = parseInt(num)
	num1 = parseInt(num1)
	total = num/num1
	alert("el total es " + total)
	
}

