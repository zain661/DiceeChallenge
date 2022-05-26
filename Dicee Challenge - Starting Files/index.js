var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomSource1= "images/dice" +randomNumber1 + ".png";
var n =document.querySelectorAll("img")[0];
n.setAttribute("src",randomSource1);
var randomNumber2= Math.floor(Math.random()*6)+1;
var randomSource2 = "images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);
if(randomNumber2>randomNumber1)
    document.querySelector("h1").innerHTML="🎉player 2 is winner";
else if (randomNumber2<randomNumber1)
document.querySelector("h1").innerHTML="🎉player 1 is winner";
else
document.querySelector("h1").innerHTML="🤷‍♂️draw";



