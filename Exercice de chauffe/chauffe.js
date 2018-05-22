function my_max1(){
var numbers = [1,2,3,4,5,6,7,8];
return Math.max(numbers);
}
alert(my_max1());


function vowel_count2(){
var hibou = prompt("Veuillez entrer votre texte pour compter les voyelles");
return (hibou.match(/[aeiouy]/ig)||[]).length;
}
alert(vowel_count2());


function alenvers3() {
var pourfaireparlerlescons = prompt("Veuillez entrer votre phrase à inverser");
return pourfaireparlerlescons.split("").reverse().join("");
}
alert(alenvers3());