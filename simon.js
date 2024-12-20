let gameseq = [];
let userseq = [];
let started = false;
let level = 0;

let btns = ['red','yellow','green','purple'];

let h2 = document.querySelector('h2');
document.addEventListener('keypress', function(){
    if(started == false){
        console.log("pressed");
        started = true;
        
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add('white');
    setTimeout(function(){
        btn.classList.remove('white');
    },250);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameseq.push(randCol);
    console.log(gameseq);
    btnFlash(randBtn);
}

function checkSeq(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any Key to start.`;
        document.querySelector('body').style.backgroundColor = "red" ; 
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white" ; 
        },250)
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute('id');
    userseq.push(userColor);

    checkSeq(userseq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener('click',btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

