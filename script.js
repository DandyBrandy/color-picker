let generateRandomNumber = function(){
    return Math.floor(Math.random() * 256).toString();
}

let createRGB = function(){
    return "linear-gradient(rgb(" + generateRandomNumber() + "," + generateRandomNumber() + "," + generateRandomNumber() + "),rgb(" 
    + generateRandomNumber() + "," + generateRandomNumber() + "," + generateRandomNumber() +"))";
}

let changeColor = function(){
    document.body.style.background = createRGB();
}

document.getElementById("button").addEventListener("click", changeColor);


