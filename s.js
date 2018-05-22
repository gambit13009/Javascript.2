function add(x,y){
return x + y ;
}


function multiply(x,y){
return x * y ;
}


function divide(x,y){
return x / y ;
}


function substract(x,y){
return x - y ;
}


function show(valeur){
document.getElementById('input').value+=valeur;
}

function calcul(){
	var somme = document.getElementById("input").value;
	document.getElementById("input").value = eval(somme);
}


function front()
if ( navigator.platform.indexOf('Win') != -1 ) {
  window.document.getElementById("wrapper").setAttribute("class", "windows");
} else if ( navigator.platform.indexOf('Mac') != -1 ) {
  window.document.getElementById("wrapper").setAttribute("class", "mac");
}