function changeDices(){
    var player1 = Math.floor(Math.random() * (6 - 1) + 1);
    var player2 = Math.floor(Math.random() * (6 - 1) + 1);
    document.getElementById("player1").src = "images/dice" + player1 + ".png";
    document.getElementById("player2").src = "images/dice" + player2 + ".png";

    if(player1 > player2){
        document.querySelector("h1").innerHTML = "Cat won";
    }
    else if(player1 === player2){
        document.querySelector("h1").innerHTML = "A draw!";
    }
    else{
        document.querySelector("h1").innerHTML = "Dog won";
    }
}



