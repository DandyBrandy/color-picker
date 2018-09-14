let generateRandomNumber = function(){
    return Math.floor(Math.random() * 256);
}

let val1 = generateRandomNumber().toString();
let val2 = generateRandomNumber().toString();
let val3 = generateRandomNumber().toString();

let val4 = generateRandomNumber().toString();
let val5 = generateRandomNumber().toString();
let val6 = generateRandomNumber().toString();

let changeColor = function(){
    document.body.style.background = 
        "linear-gradient(rgb(" + val1 + "," + val2 + "," + val3 + "),rgb(" 
        + val4 + "," + val5 + "," + val6 +"))";
}
    
changeColor();


