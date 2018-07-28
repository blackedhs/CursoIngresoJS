
function mostrar()
{
	var marca;	
	var peso;
	var temperatura;
	var temPares=0;
	var respuesta;
	var	conserva0Grados=0;
	var promedio;
	var contador=0;
	var pesoMax;
	var pesoMin
	var par;
	var marcaMasPesada;
	var acumProd=0;
	while(respuesta!="no")
		{
			contador++;
			marca=prompt("ingrese la marca");
			peso=prompt("ingrese el peso");
			peso=parseInt(peso);
			while(isNaN(peso)||peso<1||peso>100){
				peso=prompt("ingrese el peso");
				peso=parseInt(peso);
			}
			temperatura=prompt("ingrese la temperatura");
			temperatura=parseInt(temperatura);
			while(isNaN(temperatura)||temperatura<-30||temperatura>30)
			{
				temperatura=prompt("ingrese la temperatura");
				temperatura=parseInt(temperatura);
			}
			respuesta=prompt("desea continuar ingresando?");

			par=temperatura/2;
			if(par==0||temperatura==0){
				temPares++;
			}
			if(contador==1){
				pesoMin=peso;
				pesoMax=peso;
				marcaMasPesada=marca;
			}else if (peso>pesoMax) {
				marcaMasPesada=marca;
				pesoMax=peso;
			}else if(peso<pesoMin){
				pesoMin=peso;
			}
			if(temperatura<0){
				conserva0Grados++;				
			}
			acumProd+=peso;
	}
	promedio=acumProd/contador;
	
	//a)la cantidad de temperaturas pares.
	document.write("La cantidad de productos pares es= "+temPares+"<br>"); 
	//b) La marca del producto más pesado
	document.write("La marca del producto mas pesado es= "+marcaMasPesada+"<br>");
	//c) La cantidad de productos que se conservan a menos de 0 grados. 
	document.write("La cantidad de productos que se conservan a menos de 0 grados es= "+conserva0Grados+"<br>");
	//d) El promedio del peso de todos los productos.	
	document.write("El promedio del peso de todos los productos es= "+promedio+"<br>");
	//f) El peso máximo y el mínimo
	document.write("El peso maximo es= "+pesoMax+" y el minimo es= "+pesoMin+"<br>");
}