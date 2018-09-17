let generateRandomNumber = function(){
    return Math.floor(Math.random() * 256);
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

    return "linear-gradient(rgb(" + topA.toString() + "," + topB.toString() + "," + topC.toString() + "),rgb(" 
    + bottomA.toString() + "," + bottomB.toString() + "," + bottomC.toString() +"))";
}

let changeFontColor = function(){
    let rgbAvg = (topA + topB + topC) / 3;

    if(rgbAvg > 120){
        document.getElementById("text").style.color = "rgb(0,0,0)";
        document.getElementById("hexValueTop").style.color = "rgb(0,0,0)";
        document.getElementById("hexValueBottom").style.color = "rgb(0,0,0)";
    } else {
        document.getElementById("text").style.color = "rgb(255,255,255)";
        document.getElementById("hexValueTop").style.color = "rgb(255,255,255)";
        document.getElementById("hexValueBottom").style.color = "rgb(255,255,255)";
    }
}

let calculateHexValue = function(rgb){
    return rgb.toString(16);
}

let createHexText = function(){
    let a = calculateHexValue(topA);
    let b = calculateHexValue(topB);
    let c = calculateHexValue(topC);
    let d = calculateHexValue(bottomA);
    let e = calculateHexValue(bottomB);
    let f = calculateHexValue(bottomC);

    document.getElementById("hexValueTop").textContent = "#" + a + b + c;
    document.getElementById("hexValueBottom").textContent = "#" + d + e + f;
}

let changeColor = function(){
    document.body.style.background = createRGB();
    changeFontColor();
    createHexText();
}

document.getElementById("button").addEventListener("click", changeColor);


