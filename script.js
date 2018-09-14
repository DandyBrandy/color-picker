let generateRandomNumber = function(){
    return Math.floor(Math.random() * 256).toString();
}

let changeColor = function(){
    document.body.style.background = 
        "linear-gradient(rgb(" + generateRandomNumber() + "," + generateRandomNumber() + "," + generateRandomNumber() + "),rgb(" 
        + generateRandomNumber() + "," + generateRandomNumber() + "," + generateRandomNumber() +"))";
}

document.getElementById("button").addEventListener("click", changeColor);


