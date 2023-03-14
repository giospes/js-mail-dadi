const cpuDicecontainer = document.getElementById('dice-container-cpu')
const playerDicecontainer = document.getElementById('dice-container-player')
const gameBtn = document.getElementById("game-btn");
const formG = document.querySelector("form")
const firstPage = document.getElementById("start")
const secondPage = document.getElementById("middle")



gameBtn.addEventListener('click', game);


function game(){
    const playerName= document.getElementById("Pname").value;
    const Ndadi = parseInt(document.getElementById("Ndadi").value);
    let playerNameContainer = document.getElementById("player-container");
    let player1 = {}, cpu = {}, winner;
    player1 = numGen(Ndadi);
    cpu = numGen(Ndadi);

    firstPage.classList.add("d-none")
    secondPage.classList.remove("d-none")

    playerNameContainer.innerHTML = playerName; 
    generateDice(cpuDicecontainer, player1.dadiVal, Ndadi)
    generateDice(playerDicecontainer, cpu.dadiVal, Ndadi)

    if(player1.somma === cpu.somma){
        winner = "draw"
    }else if(player1.somma > cpu.somma){
        winner = "cpu"
    }
    else{
        winner = "player1"
    }
    console.log(winner)

}


function numGen(Ndadi){
    let i, dadi=[], sum = 0;
    for (i=0; i<Ndadi; i++){
        dadi[i] = Math.floor(Math.random()*6) + 1 
        sum += dadi[i]
    }
    const myObj = {
        dadiVal: dadi,
        somma : sum,
    };
    console.log(myObj.somma)
    return myObj;

}

function generateDice(container, dadi, Ndadi){
    let dice = [], dot;
    for (i=0; i<Ndadi; i++){
        dice[i] = document.createElement("div");
        dice[i].classList.add("dice","d-flex" ,"justify-content-center", "align-items-center", "mx-3");     
        dot = document.createElement("span");
        dot.classList.add("fs-4")
        dot.innerHTML = dadi[i] ;
        dice[i].appendChild(dot); 
        container.append(dice[i])  
    }
    

}