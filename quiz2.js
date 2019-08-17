document.write("hello")
var correctGuess = false;
var randomnum1 = Math.floor(Math.random()*6+1)
console.log(randomnum1);
var guess = parseInt(prompt("enter the number"))
console.log(randomnum1);
if(guess  === randomnum1)
correctGuess = true;
      else if (guess > randomnum1)
          { guess = parseInt(prompt("the next option"));
            if(guess=== randomnum1)
              correctGuess =true;

          }
          else if (guess < randomnum1)
              { guess = parseInt(prompt("the next option"));
                if(guess=== randomnum1)
                  correctGuess =true;

              }

              if(correctGuess===true)
              {alert("answer is correct");
              }
              else {
                {alert("answer is not correct")}
              }
