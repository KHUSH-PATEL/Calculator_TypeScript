var showOnScreen= document.getElementById('display')! as HTMLInputElement;
showOnScreen.style.display ="block";
var showOnScreen2 = document.getElementById('display2')! as HTMLInputElement;
showOnScreen2.style.display ="block";

var PIE:Number = Math.PI;
var ButtonClicked:number = 0;
var count:number = 0;
var lcount:number = 0;
var memory:any = [];
memoryCheck()

//Numbers function
function numbers(num:any):void {
    if (Number(showOnScreen.value) == PIE || Number(showOnScreen.value) == Math.E) {
        showOnScreen.value = "";
    }
    switch (num) {
        case "zero":
            showOnScreen.value += 0;
            break;
        case "one":
            showOnScreen.value += 1;
            break;
        case "two":
            showOnScreen.value += 2;
            break;
        case "three":
            showOnScreen.value += 3;
            break;
        case "four":
            showOnScreen.value += 4;
            break;
        case "five":
            showOnScreen.value += 5;
            break;
        case "six":
            showOnScreen.value += 6;
            break;
        case "seven":
            showOnScreen.value += 7;
            break;
        case "eight":
            showOnScreen.value += 8;
            break;
        case "nine":
            showOnScreen.value += 9;
            break;
    }
}
function validateInput() {
    let z = showOnScreen.value[showOnScreen.value.length - 1];
    let operators = ["%", "+", "-", "*", "/", ".", "^", ".e+0"];
    if (operators.includes(z)) {
        return true;
    }
    else {
        return false;
    }
}
//Arithmetic functions;
function arithmetic(arithmetics:string):void {
    switch (arithmetics) {
        case "substraction":
            if (validateInput()) {
                showOnScreen.value = showOnScreen.value.slice(0, -1) + '-';
            }
            else if (showOnScreen.value == "") {
                showOnScreen.value = "0-";
            }
            else {
                showOnScreen.value += "-";
            }
            break;

        case "addition":
            if (validateInput()) {
                showOnScreen.value = showOnScreen.value.slice(0, -1) + '+';
            }
            else if (showOnScreen.value == "") {
                showOnScreen.value = "0+";
            }
            else {
                showOnScreen.value += "+";
            }
            break;

        case "multiplication":
            if (validateInput()) {
                showOnScreen.value = showOnScreen.value.slice(0, -1) + '*';
            }
            else if (showOnScreen.value == "") {
                showOnScreen.value = "0*";
            }
            else {
                showOnScreen.value += "*";
            }
            break;

        case "division":
            if (validateInput()) {
                showOnScreen.value = showOnScreen.value.slice(0, -1) + '/';
            }
            else if (showOnScreen.value == "") {
                showOnScreen.value = "0/";
            }
            else {
                showOnScreen.value += "/";
            }
            break;

        case "pi":
            showOnScreen.value = PIE.toString();
            break;
        case "ex":
            showOnScreen.value = Math.E.toString();
            break;
        case "square":
            (showOnScreen.value != "") ? showOnScreen.value = Math.pow(Number(showOnScreen.value), 2).toString() : showOnScreen.value += "0";
            break;
        case "cube":
            (showOnScreen.value != "") ? showOnScreen.value = Math.pow(Number(showOnScreen.value), 3).toString() : showOnScreen.value += "0";
            break;
        case "inverse":
            (showOnScreen.value != "") ? showOnScreen.value = (1 / Number(showOnScreen.value)).toString() : showOnScreen.value = "Cannot divide by zero";
            break;
        case "squareRoot":
            showOnScreen.value = Math.sqrt(Number(showOnScreen.value)).toString();
            break;
        case "cubeRoot":
            showOnScreen.value = Math.cbrt(Number(showOnScreen.value)).toString();
            break;
    }
}
//exponential Function
function exponential():void {
    if(!showOnScreen.value.includes(".e+0")){
        showOnScreen.value = showOnScreen.value + '.e+0';
    }
}
//Modulo functions
function modulo():void {
    if (validateInput()) {
        showOnScreen.value = showOnScreen.value.slice(0, -1) + '%';
    }
    else if (showOnScreen.value == "") {
        showOnScreen.value = "0%";
    }
    else {
        showOnScreen.value += "%";
    }
}
//X Raise to Y functions
function xTimesy():void {
    if (!showOnScreen.value.includes("^")) {
        showOnScreen.value += "^";
    }
}
//To find Y root of X functions
function yRootx():void {
    showOnScreen.value += "Yroot";
}
//X raise to Y square functions
function xySquare():void {
    let a = showOnScreen.value[showOnScreen.value.length - 1];
    if (a.match(/[0-9]/)) {
        let b = showOnScreen.value.split("^");
        showOnScreen.value = (Math.pow(Number(b[0]), Number(b[1]))).toString();
    }
    else {
        showOnScreen.value = "Invalid input";
    }
}
//Y root of X functions
function xyRoot():void {
    let a = showOnScreen.value[showOnScreen.value.length - 1];
    if (a.match(/[0-9]/)) {
        let b = showOnScreen.value.split("Yroot");
        showOnScreen.value = (Math.pow(Number(b[0]), 1 / Number(b[1]))).toString();
    }
    else {
        showOnScreen.value = "Invalid input";
    }
}
//10 raise to X functions
function xTimes10():void {
    showOnScreen.value = Math.pow(10, Number(showOnScreen.value)).toString();
}
//2 raise to X functions
function twoRaiseX():void {
    showOnScreen.value = Math.pow(2, Number(showOnScreen.value)).toString();
}
//Log with base 10 functions
function logBase10():void {
    (showOnScreen.value =="" || showOnScreen.value == "0") ? showOnScreen.value = "Invalid Input" : showOnScreen.value = Math.log10(Number(showOnScreen.value)).toString();
}
//Log with base Y functions
function logBaseY():void {
    showOnScreen.value += "baseY";
}
//Log with base Y functions
function calculatelogBaseY():void {
    let a = showOnScreen.value[showOnScreen.value.length - 1];
    if (a.match(/[0-9]/)) {
        let b = showOnScreen.value.split("baseY");
        showOnScreen.value = (Math.log(Number(b[0])) / Math.log(Number(b[1]))).toString();
    }
    else {
        showOnScreen.value = "Invalid input";
    }
}
//Log with base E functions
function logBaseE():void {
    (showOnScreen.value =="" || showOnScreen.value == "0") ? showOnScreen.value = "Invalid Input" : showOnScreen.value = Math.log(Number(showOnScreen.value)).toString();
}
function eRaiseX(){
    showOnScreen.value = Math.pow(Math.E, Number(showOnScreen.value)).toString();
}
//Inverse the value functions
function inverseValue():void {
    let num = showOnScreen.value[0];
    let a = num[0];
    let b = "-";
    if (a != "-") {
        showOnScreen.value = b.concat(showOnScreen.value);
    }
    else if (num == "-") {
        showOnScreen.value = showOnScreen.value.slice(1);
    }
}
//Bracket Functions
function openBracket():void {
    showOnScreen.value += "(";
    count++;
    document.getElementById("cnt").innerHTML = count.toString();
}
//Bracket Functions
function closeBracket():void {
    let lastValue = showOnScreen.value[showOnScreen.value.length-1];
    if (count > 0) {
        if (lcount == 0 && lastValue == "(") {
            showOnScreen.value += "0)";
        }
        else {
            showOnScreen.value += ")";
        }
        count--;
        lcount++;
        if (count == 0) {
            lcount = 0;
            showOnScreen.value += "*";
        }
        if (count == 0) {
            document.getElementById("cnt").innerHTML = "";
        }
        else {
            document.getElementById("cnt").innerHTML = count.toString();
        }
    }
}
function factorialResult(n:number):void {
    var result = factorial(n);
    showOnScreen.value = result;
}
//Factorial function
function factorial(x:number):any {
    if (x == 0 || x == 1) {
        return 1;
    }
    //if number is negative
    else if (x < 0) {
        return "Invalid Input";
    }
    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}
//Dot operator function
function operator():void {
    var last = showOnScreen.value[showOnScreen.value.length-1];
    if(last != "."){
        if (showOnScreen.value == "") {
            showOnScreen.value = "0.";
        }
        else {
            showOnScreen.value += ".";
        }
    }
}
//Backspace function
function backSpace():void {
    if (showOnScreen.value != "") {
        let lastValue = showOnScreen.value[showOnScreen.value.length-1];
        if(lastValue == "("){
            count--;
            document.getElementById("cnt").innerHTML = count.toString();
            showOnScreen.value = showOnScreen.value.slice(0, -1);
        }
        else if(lastValue == ")"){
            count++;
            document.getElementById("cnt").innerHTML = count.toString();
            showOnScreen.value = showOnScreen.value.slice(0, -1);
        }
        else{
            showOnScreen.value = showOnScreen.value.slice(0, -1);
        }
    }
}
//Clear the screen function for Display 1
function clickclr():void {
    showOnScreen.value = "";
    count = 0;
    document.getElementById("cnt").innerHTML = "";
}
//Clear the screen function for Display 2
function clickclr2():void {
    showOnScreen2.value = "";
}
//Display the screen function for Display 2
function display2():void {
    let z = showOnScreen.value + "=";
    showOnScreen2.value = z;
}
//On click Equal to function
function clickequ():void {
    if (showOnScreen.value.includes("^")) {
        xySquare();
    }
    if (showOnScreen.value.includes("Yroot")) {
        xyRoot();
    }
    if (showOnScreen.value.includes("baseY")) {
        calculatelogBaseY();
    }
    if(showOnScreen.value == ""){
        showOnScreen.value = "0";
    }
    var Display = eval(showOnScreen.value);
    display2();
    showOnScreen.value = Display;
}
//Trigonometry functions
function trigonometry(tigno:any):void {
    switch (tigno) {
        case "sin":
            showOnScreen.value = Math.sin(Number(showOnScreen.value)).toString();
            break;
        case "cos":
            showOnScreen.value = Math.cos(Number(showOnScreen.value)).toString();
            break;
        case "tan":
            showOnScreen.value = Math.tan(Number(showOnScreen.value)).toString();
            break;
        case "sec":
            showOnScreen.value = (1 / Math.cos(Number(showOnScreen.value))).toString();
            break;
        case "cosec":
            showOnScreen.value = (1 / Math.sin(Number(showOnScreen.value))).toString();
            break;
        case "cot":
            showOnScreen.value = (1 / Math.tan(Number(showOnScreen.value))).toString();
            break;
    }
}
//Mathematical functions
function functions(valueId:string):void {
    switch (valueId) {
        case "floor":
            showOnScreen.value = Math.floor(Number(showOnScreen.value)).toString();
            break;
        case "ceil":
            showOnScreen.value = Math.ceil(Number(showOnScreen.value)).toString();
            break;
        case "mod":
            showOnScreen.value = Math.abs(Number(showOnScreen.value)).toString();
            break;
    }
}
//Change the value by pressing '2nd' button
function revert():void {
    document.getElementById("square").style.display = (ButtonClicked % 2 == 0) ? "none": "block";
    document.getElementById("squareRoot").style.display = (ButtonClicked % 2 == 0) ? "none": "block";
    document.getElementById("xySquare").style.display = (ButtonClicked % 2 == 0) ? "none": "block";
    document.getElementById("xTimes10").style.display = (ButtonClicked % 2 == 0) ? "none": "block";
    document.getElementById("log").style.display = (ButtonClicked % 2 == 0) ? "none": "block";
    document.getElementById("logE").style.display = (ButtonClicked % 2 == 0) ? "none": "block";

    document.getElementById("cube").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    document.getElementById("cubeRoot").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    document.getElementById("yRootx").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    document.getElementById("twoRaiseX").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    document.getElementById("logyx").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    document.getElementById("logyx").style.fontSize = "14px";
    document.getElementById("EraiseX").style.display = (ButtonClicked % 2 == 0) ? "block": "none";
    ButtonClicked++;
}
function enableBtn():void{
    (document.getElementById("memoryClear") as HTMLButtonElement).disabled = true;
    (document.getElementById("memoryResult") as HTMLButtonElement).disabled = true;
}
function disableBtn():void{
    (document.getElementById("memoryClear") as HTMLButtonElement).disabled = false;
    (document.getElementById("memoryResult") as HTMLButtonElement).disabled = false;
}
function memoryCheck():void{
    (memory.length==0) ? enableBtn() : disableBtn();
}
function memoryOperation(memoryId:string):void{
    switch(memoryId){
        case "memoryClear":
            memory = [];
            alert("Memory Cleared");
            memoryCheck();
            break;

        case "memoryResult":
            showOnScreen.value = memory[memory.length - 1];
            memoryCheck()
            break;
            
        case "memoryPlus":
            if(memory.length == 0 && (!isNaN(Number(showOnScreen.value)))) {
                memory.push(showOnScreen.value);
                clickclr();
                memoryCheck();
            }
            else if(!isNaN(Number(showOnScreen.value))){
                let a = Number(showOnScreen.value) + Number(memory[memory.length - 1]);
                memory.push(a);
                clickclr();
                memoryCheck();
            }
            break;

        case "memorySub":
            if(memory.length == 0 && !isNaN(Number(showOnScreen.value))) {
                memory.push(showOnScreen.value);
                let x = Number(memory[memory.length - 1]);
                if (x > 0) {
                    x = -Math.abs(x);
                    memory.push(x);
                }
                clickclr();
                memoryCheck();
            }
            else if(!isNaN(Number(showOnScreen.value))){
                let a = Number(memory[memory.length - 1]) - Number(showOnScreen.value);
                memory.push(a);
                clickclr();
                memoryCheck();
            }
            break;

        case "memoryStore":
            if(!isNaN(Number(showOnScreen.value))){
                memory.push(showOnScreen.value);
                clickclr();
                memoryCheck();
            }
            break;
    }
}