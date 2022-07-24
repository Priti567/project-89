function addUser(){
    player1_name= document.getElementById("player1_name_input").value;
    player2_name= document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name", player1_name)
    localStorage.setItem("player2_name", player2_name)
    window.location.replace("game_page.html")
}

function getScore(){
    var score1= localStorage.getItem("player1_score")
    var score2= localStorage.getItem("player2_score")
    document.getElementById("player1_score").innerHTML="<span> score: "+  score1 + "</span>"
    document.getElementById("player2_score").innerHTML="<span> score: "+  score2 + "</span>"
}

