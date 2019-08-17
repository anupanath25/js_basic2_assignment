var correctguess = false;
var randomnumber = Math.floor(Math.random()*10)+1;
var guess = parseInt(prompt("write number b/w 1 to 10"))
while(!correctguess)
{if (randomnumber === guess)
    correctguess= true;
  }
  else {
    guess=(prompt("write again the next number?"))


}
