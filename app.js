function getNumber(n){
    var num = document.getElementById("result");
    if (num.value != 0){
        num.value += n;
    }
    else{
        num.value = n;
    }
}


function clearScreen(){
    var num = document.getElementById("result");
    num.value = 0;
}


function getResult(){
    var num = document.getElementById("result");
    num.value = eval(num.value);
}


function getSquareRoot(){
    var num = document.getElementById("result");
    num.value = Math.sqrt(num.value);
}


function getFactorial(){
    var num = document.getElementById("result");
    var fact = 1;
    for(var i = 1; i <= num.value; i++){
        fact = fact * i;
    }
    num.value = fact;
}

function getPiValue(){
    var  num = document.getElementById("result");
    num.value = 3.141592653589793238;
}


function getSquare(){
    var num = document.getElementById("result");
    num.value = num.value ** 2;
}


function getCube(){
    var num = document.getElementById("result");
    num.value = num.value ** 3;
}


function getBackSpace(){
    var num = document.getElementById("result");
    num.value = num.value.slice(0,num.value.length - 1);
    if(num.value == ""){
        num.value = 0;
    } 
}

