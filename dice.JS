var num = Math.floor(56.6)
console.log(num);
var num2 =Math.ceil(56.6)
console.log(num2);
var num3= Math.random()*6;
console.log(num3);
var randomnum = Math.floor(Math.random()*6)
console.log(randomnum);



var randomnum1 = Math.floor(Math.random()*6+1)
console.log(randomnum1);
var guess = parseInt(prompt("enter the number"))
console.log(randomnum1);
if(guess  === randomnum1)
{document.write("the ans is correct");}
else if (guess < randomnum1)
  {     document.write("the ans is wrong value is less ");
   guess = parseInt(promt("enter the number again"))
      if(guess === randomnum1)
        document.write("the ans is correct");

      else
        document.write("ans is incorrect");

  }

else if (guess > randomnum1)
  {      document.write("the ans is more than the value");

      if(guess === randomnum1)
      document.write("the ans is correct");

      else
      guess= parseInt(promt("enter the number again"))

  }
