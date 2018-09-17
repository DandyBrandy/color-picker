let generateRandomNumber = function(){
    return Math.floor(Math.random() * 256).toString();
}

let topA;
let topB;
let topC;
let bottomA;
let bottomB;
let bottomC;

let createRGB = function(){
    bottomA = generateRandomNumber();
    bottomB = generateRandomNumber();
    bottomC = generateRandomNumber();
    topA = generateRandomNumber();
    topB = generateRandomNumber();
    topC = generateRandomNumber();

    return "linear-gradient(rgb(" + topA + "," + topB + "," + topC + "),rgb(" 
    + bottomA + "," + bottomB + "," + bottomC +"))";
}

let changeFontColor = function(){
    if(Number(topA) > 150){
        document.getElementById("text").style.color = "rgb(0,0,0)";
    } else {
        document.getElementById("text").style.color = "rgb(255,255,255)";
    }
}

let changeColor = function(){
    changeFontColor();
    document.body.style.background = createRGB();
}

document.getElementById("button").addEventListener("click", changeColor);


