/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice, gameState;
scores = [0,0];
roundScore = 0;
activePlayer = 0; // player 0 0r player 1
gameState="ready";
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
const buttonHold = document.querySelector(`.btn-hold`);
const buttonNew = document.querySelector('.btn-new');

const initGame = {
    init: (()=>{
        scores = [0,0];
        roundScore = 0;
        gameState="running";
        document.querySelector(`#current-0`).textContent=0;
        document.querySelector(`#current-1`).textContent=0;
        document.querySelector(`#score-0`).textContent=scores[0];
        document.querySelector(`#score-1`).textContent=scores[1];
        if(activePlayer===1){
            document.querySelector(`.player-0-panel`).classList.add('active');
            document.querySelector(`.player-1-panel`).classList.remove('active');
        }
    
        activePlayer = 0; // player 0 0r player 1
    })
}
initGame.init();

buttonNew.addEventListener('click', (event)=>{
    document.querySelector(`#name-${activePlayer}`).textContent="Player "+(activePlayer+1);
    document.querySelector(`.dice`).style.display = 'none';
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove(`winner`);
    initGame.init();
});
buttonRoll.addEventListener('click', (event)=>{
    if(gameState==="end"){
        return;
    }
    let dice = Math.ceil(Math.random()*6);
    diceDom.style.display = 'block';
    diceDom.src = 'dice-'+dice+'.png';
    let scoreBoardCurrent = document.querySelector(`#current-${activePlayer}`);
    if (dice != 1){
        scoreBoardCurrent.textContent=parseInt(scoreBoardCurrent.textContent)+dice;
    }else{
        swithchPlayerStatus();
    }
});

function swithchPlayerStatus(){
    document.querySelector(`#current-${activePlayer}`).textContent=0;
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove(`active`);
    activePlayer = (activePlayer -1)*-1;
    document.querySelector(`.player-${activePlayer}-panel`).classList.add(`active`);
}
buttonHold.addEventListener(`click`, (event)=>{
    if(gameState==="end"){
        return;
    }
    let scoreBoard = document.querySelector(`#score-${activePlayer}`);
    scores[activePlayer]+=parseInt(document.querySelector(`#current-${activePlayer}`).textContent);
    scoreBoard.textContent = scores[activePlayer];
    if(scores[activePlayer]>=10){
        stateWin(activePlayer);
    }else{
        swithchPlayerStatus();
    }
});

function stateWin(activePlayer){
    document.querySelector(`#name-${activePlayer}`).textContent="Winner!";
    document.querySelector(`.dice`).style.display = 'none';
    document.querySelector(`.player-${activePlayer}-panel`).classList.add(`winner`);
    gameState="end";
    //initGame.init();
}
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




