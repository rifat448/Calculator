
var flag=0;

function getNumber(num){
    if(flag==1) {
        document.querySelector("input").value="";
        flag=0;
    }
    var key = document.querySelector("input");
    switch(num){
        case 1:
            key.value += "1";
            break;
        case 2:
            key.value += "2";
            break;
        case 3:
            key.value += "3";
            break;
        case 4:
            key.value += "4";
            break;
        case 5:
            key.value += "5";
            break;
        case 6:
            key.value += "6";
            break;
        case 7:
            key.value += "7";
            break;
        case 8:
            key.value += "8";
            break;
        case 9:
            key.value += "9";
            break;
        case 0:
            key.value += "0";
            break;
    }
}


function clearScreenBoth(){
    document.querySelector("input").value="";
    document.querySelector("#answer").value="";
}

function clearScreen(){
    document.querySelector("input").value="";
    flag=0;
}



function getOperand(operand){
    flag=0;
    var key = document.querySelector("input");
    switch(operand){
        case '.':
            key.value +='.';
            break;
        case '+':
            key.value +='+';
            break;
        case '-':
            key.value +='-';
            break;
        case '*':
            key.value +='*';
            break;
        case '/':
            key.value +='/';
            break;
    }

}

function backSpace(){
    var key = document.querySelector("input");
    var x = key.value;
    if(x.length>0){
        x = x.substring(0,x.length-1);
        key.value = x;
    }
}

function compute(){
    var key = document.querySelector("input");
    console.log(key);
    var ans = eval(key.value);
    if(ans=="Infinity") ans="undefined";
    document.querySelector("#answer").value = ans;
    flag=1;
}

var i=0;
function bracket(){
    var key = document.querySelector("input");
    if(i == 0){
        key.value +="(";
        i=1;
    }else{
        key.value +=")";
        i=0;
    }
}