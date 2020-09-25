var decimal = document.getElementById("decimal");
var clear = document.getElementById("clear");
var displayValElement = document.getElementById("display__numbers");


var displayVal = '0';
var pendingVal;  
var evalStringArray = [];  

var btnNumbers = document.getElementsByClassName("btn--number");
var btnOperators = document.getElementsByClassName("btn--operator");


var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;
    if(displayVal === "0") { 
        displayVal = "";  
    }

    displayVal += btnText; 
    displayValElement.innerText = displayVal;
} 

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case '×':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + ''; 
            displayValElement.innerText = displayVal;
            evalStringArray = []; 
            break;
        default:
            break;
    }
}

for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', updateDisplayVal, false) 
}

for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener('click', performOperation, false);
}
 
clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}


decimal.onclick = () => { 
    if(!displayVal.includes('.')) {
        displayVal += '.';
    }
    displayValElement.innerText = displayVal;
}

