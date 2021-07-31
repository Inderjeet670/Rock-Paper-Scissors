let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('sci');
let result = document.getElementById('result')
let message = document.getElementById('winlose')

paper.appendChild


function main(yourChoice){
   
    let picked = "",comppick = ""
    
    let number = 0;
    let winorlose = "you Lost"

    if(yourChoice.id === "rock"){
        picked = "You picked rock"
        number = 1
    }
    else if(yourChoice.id === "paper"){
        picked = "You picked paper"
        number = 2
    }
    else if(yourChoice.id === "sci"){
        picked = "You picked scissors"
        number = 3
    }
    let randomPick = Math.round(Math.random() * 2 + 1)
    if(randomPick == 1){
        comppick = "Computer picked rock"
    }
    else if(randomPick == 2){
        comppick = "Computer picked paper"
    }
    else if(randomPick == 3){
        comppick = "Computer picked scissors"
    }


    if(number == 1 && randomPick == 1||number == 2 && randomPick == 2||number == 3 && randomPick == 3){
        winorlose = "it's a draw"
    }
    else if(number == 1 && randomPick == 2 || number == 2 && randomPick == 3 || number == 3 && randomPick == 1){
        winorlose = "Computer won!"
    }
    else if(number == 1 && randomPick == 3 ||number == 2 && randomPick == 1 ||number == 3 && randomPick == 2){
        winorlose = "You won!"
    }
    
    

    
    
    

result.innerHTML = "<h1>" + picked + " and "+ comppick +"</h1>"
message.innerHTML = "<h1 id = 'id'>"+winorlose+"</h1>";
}


