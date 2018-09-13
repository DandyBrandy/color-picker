let generateRandomNumber = function(){
    return Math.floor(Math.random() * 256);
}

let val1 = generateRandomNumber().toString();
let val2 = generateRandomNumber().toString();
let val3 = generateRandomNumber().toString();

let changeColor = function(){
    document.getElementById("buttonColor").style.background = "rgb(" + val1 + "," + val2 + "," + val3 + ")";
}

changeColor();


