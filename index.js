// var imgno = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

var randomNumber1 = Math.floor( Math.random()*6)+1;
var randomdiceimage1 = "dice" + randomNumber1 + ".png";


 var randomNumber2 = Math.floor( Math.random()*6)+1  ;
 var randomdiceimage2 = "dice" + randomNumber2 + ".png";



var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomdiceimage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" ,  randomdiceimage2);

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="🏆🥇p1 win";
}
else if(randomNumber1<randomNumber2){
 document.querySelector("h1").innerHTML="p2 win 🥇🏆";   
}
else{
    document.querySelector("h1").innerHTML="📍 DRAW 📍";
}










