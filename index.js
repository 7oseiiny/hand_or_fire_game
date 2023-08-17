// let img =document.getElementById('img')
const allcards=[1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13]
let tempcards=allcards.concat()
let counter =52
window.onbeforeunload = function (event) {
    return confirm("Confirm refresh");
  };
let content =document.getElementById('content')
 
let ready   =document.getElementById('ready'  )
let steady  =document.getElementById('steady' )
let start   =document.getElementById('start'  )
let change  =document.getElementById('change' )
let playername  =document.getElementById('playername' )
let playerinf  =document.getElementById('players' )

let players=[]

ready.onclick = ()=>{
    document.getElementById('content').innerHTML=
    `
    <h2 id="lableNum" >enter number of players</h2>
    <input class ="" id ='num' type="text">
    `;
    ready.classList.add("none")
    steady.classList.remove("none")
    start.classList.add("none")
    change.classList.add("none")
}

steady.onclick = ()=>{
let num =parseInt(document.getElementById("num").value);
    document.getElementById('content').innerHTML=
        `<h2 id="lableNames" >enter names of players</h2> `;
    for (let i = 0; i < num; i++) {
        var input = document.createElement('input');
        input.className = 'player';
        content.appendChild(input);
    }
    ready.classList.add("none")
    steady.classList.add("none")
    start.classList.remove("none")
    change.classList.add("none")

    

}

start.onclick = ()=>{
    playersname=document.getElementsByClassName("player")
    for (let i = 0; i < playersname.length; i++) {
        players.push({
            "name":playersname[i].value,
            "score":0,
            "question": 0
        })
    }
    reset()
    ready.classList.add("none")
    steady.classList.add("none")
    start.classList.add("none")
    change.classList.remove("none")
    
    content.innerHTML= `<img id = 'img'  src="joker.svg" >`;
    change.style.width='30%'
    change.style.height='60px'

}

let namecounter=0;
change.onclick = ()=>{
    if (counter!=-0){
        
    let random =Math.floor(Math.random() * counter );
    playername.innerHTML=players[namecounter].name

    if (tempcards[random]==1) {
        console.log("ewwewewew");
        players[namecounter].score-=1; 
    }
    else if (tempcards[random]==13) {
        console.log("ewwewewew");
        players[namecounter].score+=1; 
    }
    else if (tempcards[random]==11) {
        console.log("ewwewewew");
        players[namecounter].question+=1; 
    }
    else if (tempcards[random]==10) {
        console.log("ewwewewew");
        players[namecounter].question+=1; 
    }else if (tempcards[random]==9) {
        console.log("ewwewewew");
        players[namecounter].question+=1; 
    }else if (tempcards[random]==8) {
        console.log("ewwewewew");
        players[namecounter].question+=1; 
    }
    if ((players.length)==(namecounter+1)) {
        namecounter=-1;
    }

    console.log( tempcards[random]  );
    

   
    namecounter++
    img.classList.add("hidden")
    content.style.backgroundColor='gray'
    img.src =tempcards[random]+".svg"
    counter--
    tempcards.splice(random,1)
    

    // console.log(tempcards);
    // console.log(counter);
    console.log(players);
    console.log(counter);
    
    reset()
    }
    else{
        win()
    }
}
content.onclick=()=>{img.classList.remove("hidden")}

function reset(){
    playerinf.innerHTML=""
    for (let i = 0; i < players.length; i++) {
        playerinf.innerHTML+=`
    <div id="psq" class="psq">
            <div class="psqc">
                <div >name</div>
                <div class="playername">${players[i].name}</div>
            </div>
            <div onclick="btnp(${i})" class="psqc">
                <div >score</div>
                <div  class="score">${players[i].score}</div>
            </div>
            <div onclick="btnm(${i})" class="psqc">
                <div >question</div>
                <div  class="question">${players[i].question}</div>
            </div>
        </div>
    `
        
    }
}
function btnm(m){
    players[m].question-=1
    reset()
}
function btnp(p){
    players[p].score+=1
    reset()

}
/////////////////////////////////
function win(){
    for (let i = 0; i < players.length; i++) {

        players[i].score+=players[i].question
        players[i].question=0
        reset()

    }
}