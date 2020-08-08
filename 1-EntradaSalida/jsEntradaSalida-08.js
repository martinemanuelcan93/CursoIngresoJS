/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/


function SacarResto()
{
	let n;
	let n1;
	n  = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	n1 = parseInt(document.getElementById("txtIdNumeroDivisor").value);	
	alert("el resto  de esta cuenta es "+ n % n1)
}
