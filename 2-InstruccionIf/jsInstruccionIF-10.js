function mostrar()
{	//Genero el número RANDOM entre 1 y 10 

	let nota = Math.round(Math.random() * (10 -1) + 1);
	if (nota >=9)
	{alert("EXCELENTE nota "+ nota);}
	else if (nota >= 4)
	{alert("APROBO nota "+ nota);}
	else 
	{alert("vamos la próxima SE PUEDE nota "+ nota);}

}  // FIN DE LA FUNCIÓN ~