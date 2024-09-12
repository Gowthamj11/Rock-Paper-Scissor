let userScore=0;
let compScore=0;
let msg = document.querySelector(".msg");
let userscore = document.querySelector(".user-score");
let compscore = document.querySelector(".comp-score");
let reset=document.querySelector(".reset");
const choices = document.querySelectorAll(".choice");


const drawGame =() =>{
  msg.innerText="Draw. Play again";
  msg.style.backgroundColor=" #727072";
}


const showWinner=(userWin, compChoice, userChoice)=>{
  if(userWin){
    userscore.innerText=`${++userScore}`
    msg.innerText="You Win!",`Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
  }
  else{
    compscore.innerText=`${++compScore}`;
    msg.innerText="You Loose",`Your ${userChoice} defeted by ${compChoice}`;
    msg.style.backgroundColor="red";
}
}


const genCompChoice=()=>{
  let options=["rock","paper","scissor"];
  let randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}


const playGame= (userChoice) =>{
  console.log("user",userChoice);
   let compChoice = genCompChoice()
  console.log("comp",compChoice); 
  if(userChoice===compChoice){
    drawGame();
  }
  else{
    let userWin = true;
    if(userChoice==="rock"){
      userWin = compChoice === "paper" ? false : true
    }
    else if(userChoice==="paper"){
      userWin = compChoice === "scissor" ? false : true
    }
    else if(userChoice==="scissor"){
      userWin = compChoice === "rock" ? false : true
    }
    showWinner(userWin);
  }
}

const resetGame=()=> {
  userscore.innerText=0;
  userScore=0;
  compscore.innerText=0;
  compScore=0;
 msg.innerText="Play Your Turn";
 msg.style.backgroundColor="#727072";
};


choices.forEach((choices)=>{
  choices.addEventListener("click", (click)=>{
  let userChoice = choices.getAttribute("id");
    playGame(userChoice);
  }
)  
})

reset.addEventListener("click", resetGame);