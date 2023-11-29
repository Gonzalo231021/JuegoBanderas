// *** JUEGO AHORCADO ***

// *** VARIABLES ***
//He creado 10 arrys, 5 de paises y otros 5 de sus respectivas banderas
var palabras_asia = ["Kazajistan","Kirguistan","Tayikistan","Turkmenistan","Uzbekistan","Afganistan","Bangladesh","Butan",		"India",	"Iran",		"Maldivas",		"Nepal",  "Pakistan", "Sri Lanka", "Arabia Saudi","Armenia", "Azerbaiyan", "Bahrein","Emiratos Arabes Unidos","Georgia","Yemen",  "Iraq",    "Israel",   "Jordania",   "Kuwait",    "Libano",    "Oman",     "Qatar",      "Siria",   "Palestina",  "Turquia","Corea del Norte","Corea del Sur","Japon","Mongolia",	  "Taiwán",		"China",	"Brunei",	"Camboya",	"Filipinas", "Indonesia","Laos",		"Malasia",		"Myanmar","Singapur","Tailandia","Timor Oriental","Vietnam"];
var banderas_asia = ["img/kz.png","img/kg.png","img/tj.png","img/tm.png","img/uz.png","img/an.png","img/bd.png","img/bt.png","img/in.png","img/ir.png","img/mv.png","img/np.png","img/pk.png","img/lk.png","img/sa.png","img/am.png","img/az.png","img/bh.png","img/ae.png","img/ge.png","img/ye.png","img/iq.png","img/il.png","img/jo.png","img/kw.png","img/lb.png","img/om.png","img/qa.png","img/sy.png","img/ps.png","img/tr.png","img/kp.png","img/kr.png","img/jp.png","img/mn.png","img/tw.png","img/cn.png","img/bn.png","img/kh.png","img/fp.png","img/id.png","img/la.png","img/my.png","img/mm.png","img/sg.png","img/th.png","img/tl.png","img/vn.png"];
/*49 palabras* He modificado las arrays de palabras*/
var palabras_africa = ["Angola","Camerun","Congo","Gabon","Guinea Ecuatorial","Republica Centroafricana","Republica Democratica del Congo","Santo Tome y Principe","Chad","Botswana","Lesotho","Namibia","Sudafrica","Swazilandia","Benin","Burkina Faso","Cabo Verde","Costa de Marfil","Gambia","Ghana","Guinea","Guinea-Bissau","Liberia","Mali","Mauritania","Niger","Nigeria","Senegal","Sierra Leona","Togo","Burundi","Comores","Djibouti","Eritrea","Etiopía","Kenia","Madagascar","Malawi","Mauricio","Mozambique","Ruanda","Seychelles","Somalia","Tanzania","Uganda","Zambia","Zimbabwe","Argelia","Egipto","Libia","Marruecos","Sahara Occidental","Sudan del Sur","Sudan","Tunez"];
var banderas_africa = ["img/ao.png","img/cm.png","img/cg.png","img/ga.png","img/gq.png","img/cf.png","img/cd.png","img/st.png","img/td.png","img/bw.png","img/ls.png","img/na.png","img/za.png","img/sz.png","img/bj.png","img/bf.png","img/cv.png","img/ci.png","img/gm.png","img/gh.png","img/gn.png","img/gw.png","img/lr.png","img/ml.png","img/mr.png","img/ne.png","img/ng.png","img/sn.png","img/sl.png","img/tg.png","img/bi.png","img/km.png","img/dj.png","img/er.png","img/et.png","img/ke.png","img/mg.png","img/mw.png","img/mu.png","img/mz.png","img/rw.png","img/sc.png","img/so.png","img/tz.png","img/ug.png","img/zm.png","img/zw.png","img/dz.png","img/eg.png","img/ly.png","img/ma.png","img/eh.png","img/ss.png","img/sd.png","img/tn.png"];

/*55 palabras*/
var palabras_europa = ["Albania","Andorra","Bosnia y Herzegovina","Croacia","Eslovenia","España","Grecia","Italia","Macedonia","Malta","Montenegro","Portugal","San Marino","Ciudad del Vaticano","Serbia","Alemania","Austria","Belgica","Francia","Liechtenstein","Luxemburgo","Monaco","Paises Bajos","Suiza","Bielorrusia","Bulgaria","Hungria","Moldavia","Polonia","Republica Checa","Eslovaquia","Rumania","Rusia","Ucrania","Dinamarca","Estonia","Finlandia","Irlanda","Islandia","Letonia","Lituania","Noruega","Reino Unido","Suecia","Groenlandia","Isla de Man", "Escocia","Inglaterra","Irlanda del Norte","Gales"];
var banderas_europa = ["img/al.png","img/ad.png","img/ba.png","img/hr.png","img/si.png","img/es.png","img/gr.png","img/it.png","img/mk.png","img/mt.png","img/me.png","img/pt.png","img/sm.png","img/va.png","img/rs.png","img/de.png","img/at.png","img/be.png","img/fr.png","img/li.png","img/lu.png","img/mc.png","img/nl.png","img/ch.png","img/by.png","img/bg.png","img/hu.png","img/md.png","img/pl.png","img/cz.png","img/sk.png","img/ro.png","img/ru.png","img/ua.png","img/dk.png","img/ee.png","img/fi.png","img/ie.png","img/is.png","img/lv.png","img/lt.png","img/no.png","img/gb.png","img/se.png","img/gl.png","img/im.png","img/gb-sct.png","img/gb-eng.png","img/gb-nir.png","img/gb-wls.png"];
/*48 palabras*/

var palabras_america = ["Belice","Costa Rica","El Salvador","Guatemala","Honduras","Mexico","Nicaragua","Panama","Canada","Estados Unidos","Argentina","Bolivia","Brasil","Colombia","Ecuador","Guyana","Paraguay","Peru","Surinam","Uruguay","Venezuela","Chile","Antigua y Barbuda","Bahamas","Barbados","Cuba","Dominica","Granada","Haiti","Jamaica","Republica Dominicana","San Cristobal y Nieves","Santa Luca","San Vicente y las Granadinas","Trinidad y Tobago"];
var banderas_america = ["img/bz.png","img/cr.png","img/sv.png","img/gt.png","img/hn.png","img/mx.png","img/ni.png","img/pa.png","img/ca.png","img/us.png","img/ar.png","img/bo.png","img/br.png","img/co.png","img/ec.png","img/gu.png","img/py.png","img/pe.png","img/sr.png","img/uy.png","img/ve.png","img/cl.png","img/ag.png","img/bs.png","img/bb.png","img/cu.png","img/dm.png","img/gd.png","img/ht.png","img/jm.png","img/do.png","img/kn.png","img/lc.png","img/vc.png","img/tt.png"];

/*35 palabras*/
var palabras_oceania = ["Australia","Nueva Zelanda","Fiji","Islas Salomon","Papua Nueva Guinea","Vanuatu","Islas Marshall","Kiribati","Micronesia","Nauru","Palaos","Samoa","Tonga","Tuvalu"];
var banderas_oceania = ["img/au.png","img/nz.png","img/fj.png","img/sb.png","img/pg.png","img/vu.png","img/mh.png","img/ki.png","img/fm.png","img/nr.png","img/pw.png","img/ws.png","img/to.png","img/tv.png"];
/*14 palabras*/	
var hangman = ["img/ahorcado_0.png", "img/ahorcado_1.png","img/ahorcado_2.png","img/ahorcado_3.png","img/ahorcado_4.png","img/ahorcado_5.png","img/ahorcado_6.png"];
				//He tenido que añadir un array ya que no conseguia con la opacidad jugar para que se volviera a su posición. 	
	

//He modificado las variables añadiendo los botones de cada contienente y sus funciones
var palabra = ""; // Palabra a averiguar
var rand;  // nº aleatorio
var oculta = [];  // Palabra oculta. Array vacío
var cont = 6;  //Contador
var errores;
var hueco = document.getElementById("palabra");  
var buttonsL = document.getElementsByClassName('letra');  // Botones de letras
var btnAfrica = document.getElementById("africa");  // Boton de Africa
var btnAsia = document.getElementById("asia");  // Boton de Asia
var btnAmerica = document.getElementById("america");  // Boton de America
var btnEuropa = document.getElementById("europa");  // Boton de Europa
var btnOceania = document.getElementById("oceania");  // Boton de Oceania
var rightAudio = new Audio("sfx/encaraMessi.mp3");//cambiado
var wrongAudio = new Audio("sfx/queMiraBobo.mp3");//Cambiada
var completeAudio = new Audio("sfx/siu.mp3"); //He cambiando el audio, SIUUU
var vamoAjuga = new Audio("sfx/vamoAjuga.mp3");
var gameOver = new Audio("sfx/memeFinal.mp3");//Cambiado
var continentes; 
var array; //Declaro variable para el array que eligo
var arrayb; //Declaro variable para las banderas


//creacion de funcion de inicio entera
function inicio(continente) {
    
	document.getElementById("msg-final").innerHTML = "";
    completeAudio.pause();
	rightAudio.pause();
	wrongAudio.pause();
	gameOver.pause();
    gameOver.pause();
    cont = 6;

    if (continente === 'asia') {
        array = palabras_asia;
        arrayb = banderas_asia;
		vamoAjuga.play();
    } else if (continente === 'africa') {
        array = palabras_africa;
        arrayb = banderas_africa;
		vamoAjuga.play();
    } else if (continente === 'america') {
        array = palabras_america;
        arrayb = banderas_america;
		vamoAjuga.play();
    } else if (continente === 'europa') {
        array = palabras_europa;
        arrayb = banderas_europa;
		vamoAjuga.play();
    } else if (continente === 'oceania') {
        array = palabras_oceania;
        arrayb = banderas_oceania;
		vamoAjuga.play();
    }
    // Genera una nueva palabra y actualiza la bandera
    generaPalabra();
    // Pinta los guiones y genera el teclado
    pintarGuiones();
    generaABC("a", "z");
	intento(letra);
}
//Modificada e inicialiada
function generaPalabra(){
 palabra = ""; 
 rand = Math.round(Math.random() * array.length);
 palabra = array[rand].toUpperCase();
  
  // Asigna la ruta de la bandera a la imagen
  document.getElementById("bandera").src = arrayb [rand];
}



function pintarGuiones(){
	oculta = [];
	hueco.innerHTML = "";
  for (var i = 0; i < palabra.length; i++){
/*Añado que en caso de haber espacios o "-" los imprima directamente
	sin dibujar un guion*/
	if(palabra[i] === " "){
	oculta[i] = " ";}
	else if (palabra[i] === "-"){
	oculta [i] = "-"
	}
	else
	{
		oculta[i] = "_";
	}
  }
  hueco.innerHTML = oculta.join("");
}

//Generar abecedario (teclado)
function generaABC(a,z){
	document.getElementById("abcdario").innerHTML = "";
	var i = a.charCodeAt(0);
	var j = z.charCodeAt(0);
	var letra = "";
	for(i,j ; i<=j ; i++){
		letra = String.fromCharCode(i).toUpperCase();
		document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
		if(i===110){//Correjido los 2 iguales
		document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+'Ñ'+"'>Ñ</button>";
		}
	}	
}

// Chequear intento
function intento(letra){
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById(letra).disabled = true;
	rightAudio.pause();
	wrongAudio.pause();
  if(palabra.indexOf(letra) != -1){
    for(var i=0; i<palabra.length; i++){
      if(palabra[i]===letra){ //Corrijo error de ==
		  oculta[i] = letra;
	  } 
    }
    hueco.innerHTML = oculta.join("");
    document.getElementById("acierto").innerHTML = "SIIIUUUU";
    document.getElementById("acierto").className += "acierto verde";
	rightAudio.play();
  }else{
	rightAudio.pause();
	wrongAudio.pause();
    cont--;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("acierto").innerHTML = "Noo";
    document.getElementById("acierto").className += "acierto rojo";
    document.getElementById("image").src = hangman[cont];
	wrongAudio.play();
  }
  compruebaFin();
  setTimeout(function (){ 
    document.getElementById("acierto").className = ""; 
  }, 800);
}

// Compruba si ha finalizado
function compruebaFin() {
	
	if(oculta.indexOf("_") == -1){
		var errores = 6 - cont
		document.getElementById("msg-final").innerHTML = "GG, pero que haces tú en informática, tira pa Geografia,\nQue sepas que has tenido " + errores + " errores";
		document.getElementById("msg-final").className += "zoom-in";
		for (var i = 0; i < buttonsL.length; i++){
			buttonsL[i].disabled = true;
		}
		completeAudio.play();
		borrarMuneco();//Añadida, para el reseteo del hangman, definida abajo
    }else if(cont === 0) { //Añado que en caso de perder aparezca la solución
		document.getElementById("msg-final").innerHTML = "Perdiste, el país correcto era:" + palabra;
		document.getElementById("msg-final").className += "zoom-in";
		for (var i = 0; i < buttonsL.length; i++){
			buttonsL[i].disabled = true;
		}
		gameOver.play();
		borrarMuneco();	//añadida, definida abajo
	}	
//Funcion añadida para volver a la imagen con el hangman inicial
function borrarMuneco(){
	document.getElementById("image").src = hangman[6];
}
}
