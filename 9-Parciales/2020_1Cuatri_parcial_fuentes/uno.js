/*5(cinco) productos de prevención de contagio,
	de cada una debo obtener los siguientes datos:
el tipo(validar "barbijo", "jabón" o "alcohol"),
	el precio(validar entre 100 y 300),
	la cantidad de unidades(no puede ser 0 o negativo y no debe superar las 1000 unidades),
	la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra(contadorproductos)
c) Cuántas unidades de jabones hay en total*/
function mostrar() {
	let productos
	let precio
	let contadorveces = 0
	let unidades = 0
	let flag = 0
	let contadoruni = 0
	let acumuladoral=0
	let acumuladorja=0
	let acumuladorba=0

	do {
		productos = prompt("Ingrese 5 productos para prevencion del contagio")// nombre 
		contadorveces++

		do {
			tipo = prompt("ingrese el tipo -barbijo -jabon -alcohol") // tipo
		}
		while (!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol"))

		do {
			precio = parseInt(prompt("Ingrese el precio entre 100 y 300 ")) // precio
		}
		while (!(precio > 100 && precio < 300))

		do{
			unidades=parseInt("Ingrese las unidades del producto") //unidades
				}
		while(!(unidades>0 && unidades<1000))

		marca = prompt("ingrese marca") //marca 
		fabricante=prompt("ingresee fabricante")// fabricante

		switch(tipo){
		case "alcohol":{
			contadoruni++			
			if(flag=0||precio>maxalcohol){
			precio=maxalcohol				
		}
			if(flag=0||precio<minalcohol){
				precio=minalcohol
				acumuladoral=unidades
				flag=1
			}}
		case "jabon":{
			contadoruni++
			acumuladorja=unidades
		}
		case "barbijo":{
			contadoruni++
			acumuladorba= unidades
		}
	}




	}
	while (contadorveces < 6)

}


