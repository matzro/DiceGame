function changeDices(){
    var player1 = Math.floor(Math.random() * (6 - 1) + 1);
    var player2 = Math.floor(Math.random() * (6 - 1) + 1);
    document.getElementById("player1").src = "images/dice" + player1 + ".png";
    document.getElementById("player2").src = "images/dice" + player2 + ".png";
}

