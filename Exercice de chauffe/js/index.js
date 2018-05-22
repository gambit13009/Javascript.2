function my_max() {
	var arr = []
  arr = prompt("Entrez une série de nombres séparés par des espaces").split(" ");
	alert(Math.max(...arr));
}



function vowel_count() {
var string = prompt("Veuillez entrer votre texte pour compter les voyelles");
alert(string.match(/[aeiouy]/ig || []).length);

}



function reverse() {
alert(prompt("Quelle phrase voulez-vous inverser ?").split("").reverse().join(""));

}

if ( navigator.platform.indexOf('Win') != -1 ) {
  window.document.getElementById("wrapper").setAttribute("class", "windows");
} else if ( navigator.platform.indexOf('Mac') != -1 ) {
  window.document.getElementById("wrapper").setAttribute("class", "mac");
}