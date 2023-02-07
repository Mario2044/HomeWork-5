let arr = prompt("Choice what you need (+)(-)(/)(*)?");
let twoNum = prompt("Write two numbers separated by commas.");
let twoNumbers = twoNum.split(',');
let sumAdd = +twoNumbers[0] + +twoNumbers[1];
let sumSub = +twoNumbers[0] - +twoNumbers[1];
let sumMult = +twoNumbers[0] * +twoNumbers[1];
let sumDiv = +twoNumbers[0] / +twoNumbers[1];

while(arr !== "+" && arr !== "-" && arr !== "/" && arr !== "*" && arr !== " ") {
    alert("Sorry, you did not enter any of the options", arr);
    arr = prompt("Choice what you need (+)(-)(/)(*)?");
} 

if(arr === "+") {
    alert(`${twoNumbers[0]} + ${twoNumbers[1]} = ${sumAdd}`);
}
else  if(arr === "-") {
    alert(`${twoNumbers[0]} - ${twoNumbers[1]} = ${sumSub}`);
}
else  if(arr === "*") {
    alert(`${twoNumbers[0]} * ${twoNumbers[1]} = ${sumMult}`);
}
else  if(arr === "/") {
    alert(`${twoNumbers[0]} / ${twoNumbers[1]} = ${sumDiv}`);
}


