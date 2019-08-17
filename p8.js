var upper = parseInt(prompt("type any number?")) ;
var lower =  parseInt(prompt("type any number?"));
var answer = Math.floor(Math.random(upper - lower+1)-lower);
document.write(answer);
