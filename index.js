console.log("Welcome to the game of Tic Tac Toe.")
let music=new Audio("bgmusic.mp3")
let move=new Audio("move.mp3")
let gameover=new Audio("gameover.mp3")
let turn='x';
let over=false;



const changeTurn=()=>{
    return turn ==='x'?"o":"x"
}

const checkwin=()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!==""))
        {
            document.getElementsByClassName("info")[0].innerText=boxtexts[e[0]].innerText+" wins";
            gameover.play();
            over=true;
            
        }
    })

}

//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(over==false){
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn(); 
            move.play();
            checkwin();
            if(over===false)
            {            
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    }
    })
})

let button = document.getElementById("reset");
button.addEventListener('click', () => {
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector(".boxtext");
        boxtext.innerText = "";
        document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
        over=false;
    });
});
