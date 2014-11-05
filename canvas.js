var dibujo, lienzo, t, b;
function inicio()
{
	t = document.getElementById("usuario");
	b = document.getElementById("boton");
	dibujo = document.getElementById("dibujo");
	lienzo = dibujo.getContext("2d");

	b.addEventListener("click", dibujarGrilla);
function circulo()
{	lienzo.moveTo(0,0);
	lienzo.lineTo(300,0);
	lienzo.lineTo(300,300);
	lienzo.lineTo(0,300);
	lienzo.lineTo(0,0);
	lienzo.stroke();
	lienzo.strokeStyle = "#F00";
	lienzo.stroke();

	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
	lienzo.fillStyle = "#0FB";
	lienzo.arc(150,150,100,(Math.PI*2),false);
	lienzo.closePath();
	lienzo.fill();
	lienzo.stroke();
}
circulo();
function dibujarGrilla()
{
	dibujo.width=dibujo.width;
	var l=lienzo;
	var lineas=Number(t.value);
	var ancho = 300, alto = 300;
	var ancholinea=ancho/lineas;
	var limiteX= (ancho+alto)/ancholinea;
	var limiteY= (alto+ancho)/ancholinea;
	var puntoix, puntoiy, puntofx, puntofy;

	for(linea=0;linea<=limiteX;linea++)
	{
		puntoix=-300+linea*ancholinea;
		if(puntoix<0)
		{
			puntoix=0;
		}
		puntoiy=300-linea*ancholinea;
		if(puntoiy<0)
		{
			puntoiy=0;
		}	
		puntofx=linea*ancholinea;
		if(puntofx>300)
		{
			puntofx=300;
		}			
		puntofy=600-linea*ancholinea;
		if(puntofy>300)
			{
				puntofy=300;
			}
		//Diag X
		l.beginPath();
		l.strokeStyle="#AAA";
		l.moveTo(puntoix,puntoiy);
		l.lineTo(puntofx,puntofy);
		l.closePath();
		lienzo.stroke();
	}

	for(linea=0;linea<=limiteY;linea++)
	{
		puntoix=linea*ancholinea;
		if(puntoix>300)
		{
			puntoix=300;
		}
		puntoiy=-300+linea*ancholinea;
		if(puntoiy<0)
		{
			puntoiy=0;
		}	
		puntofx=-300+linea*ancholinea;
		if(puntofx<0)
		{
			puntofx=0;
		}			
		puntofy=linea*ancholinea;
		if(puntofy>300)
			{
				puntofy=300;
			}
	//Diag  Y
		l.beginPath();
		l.strokeStyle="#AAA";
		l.moveTo(puntoix,puntoiy);
		l.lineTo(puntofx,puntofy);
		l.closePath();
		lienzo.stroke();	
	}
}

