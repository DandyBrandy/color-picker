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
    topA = generateRandomNumber();
    topB = generateRandomNumber();
    topC = generateRandomNumber();
    bottomA = generateRandomNumber();
    bottomB = generateRandomNumber();
    bottomC = generateRandomNumber();

    return "linear-gradient(rgb(" + topA + "," + topB + "," + topC + "),rgb(" 
    + bottomA + "," + bottomB + "," + bottomC +"))";
}

let changeFontColor = function(){
    let rgbOne = Number(topA);
    let rgbTwo = Number(topB);
    let rgbThree = Number(topC);
    let rgbAvg = (rgbOne + rgbTwo + rgbThree) / 3;

    if(rgbAvg > 120){
        document.getElementById("text").style.color = "rgb(0,0,0)";
    } else {
        document.getElementById("text").style.color = "rgb(255,255,255)";
    }
}

let changeColor = function(){
    document.body.style.background = createRGB();
    changeFontColor();
}

document.getElementById("button").addEventListener("click", changeColor);


