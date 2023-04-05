// Write your solution here! 
let cats = ["Milo", "Otis","Garfield"];
 function destructivelyAppendCat(name){ cats.push('Ralph'); } 
 function destructivelyPrependCat(name){ cats.unshift('Bob'); } 
 function destructivelyRemoveLastCat(name){ cats.pop(); } 
function destructivelyRemoveFirstCat(name){ cats.shift(); } 
function appendCat(name){ cats[3] = 'Broom'; cats; } 
function removeLastCat(){ cats.splice(0,1); }