document.querySelector(".btn").addEventListener("click", caller);


function caller(){
 var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;

 var x = "images/"+"dice"+String(randomNumber1)+".png";

 document.querySelector(".img1").setAttribute("src", x);
 var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
  var y = "images/"+"dice"+String(randomNumber2)+".png";

document.querySelector(".img2").setAttribute("src", y);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML= "🎁Player 1 wins";
}
else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML= "DRAW";
}
else{
  document.querySelector("h1").innerHTML = "Player 2 wins🎁";
}
}
