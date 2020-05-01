/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice;
scores = [0,0];
roundScore = 0;
activePlayer = 0; // player 0 0r player 1

dice = Math.ceil(Math.random()*6);
//console.log(dice);
/*
document.querySelector(`#score-${activePlayer}`).textContent=dice;
 //by query Selector only plain text can be set as textContent
 //if we need to set an html as a content of an emement then innerHTML must be used
document.querySelector(`#current-${activePlayer}`).innerHTML = `<em>${dice}<em>`;

var x = document.querySelector(`#score-${activePlayer}`).textContent;
//console.log(x);
document.querySelector('.dice').style.dsiplay = 'none'*/
//document.getElementById("dice").style.display = "none";
const diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';
const buttonRoll = document.querySelector('.btn-roll'); 

(()=>{ // init all function
    document.querySelector(`#current-0`).textContent=0;
    document.querySelector(`#current-1`).textContent=0;
})();
buttonRoll.addEventListener('click', (event)=>{
    var dice = Math.ceil(Math.random()*6);
    diceDom.style.display = 'block';
    diceDom.src = 'dice-'+dice+'.png';
    var scoreBoardCurrent = document.querySelector(`#current-${activePlayer}`);
    if (dice != 1){
        scoreBoardCurrent.textContent=parseInt(scoreBoardCurrent.textContent)+dice;
    }else{
        scoreBoardCurrent.textContent=0;
        
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove(`active`);
        activePlayer = (activePlayer -1)*-1;
        document.querySelector(`.player-${activePlayer}-panel`).classList.add(`active`);
    }
})
/*var x = 2;
function printX(){
    var x = 3;
    console.log(this.x);
    console.log(x);
}

var object = {
     x : 5,
     printX: function(){
         //var x = 9
        console.log(this.x);
        console.log(x);   
     }
}

var m = object.printX;
m();
object.printX();
printX();

console.log(this);
console.log(window);
console.log(this==window);*/
//2,2,5,2,2,3*/

// var http = require('http'),
//     fs = require('fs');


// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(8000);
// });




