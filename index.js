let arr = prompt("Choice what you need (+)(-)(/)(*)?");
let numOne = prompt("Tell me number.");
let numTwo = prompt("Tell me number.");
let sum = +numOne + +numTwo;
let summ = -numOne - -numTwo;
let suma = numOne / numTwo;
let summa = numOne * numTwo;

while(arr !== "+" && arr !== "-" && arr !== "/" && arr !== "*" && arr !== " ") {
    console.log("Sorry, you did not enter any of the options", arr);
    arr = prompt("Choice what you need (+)(-)(/)(*)?");
    numOne = prompt("Tell me number.");
    numTwo = prompt("Tell me number.");
}

if(arr === "+") {
    console.log(`${numOne} + ${numTwo} = ${sum}`);
}
else  if(arr === "-") {
    console.log(`${numOne} - ${numTwo} = ${summ}`);
}
else  if(arr === "/") {
    console.log(`${numOne} / ${numTwo} = ${suma}`);
}
else  if(arr === "*") {
    console.log(`${numOne} * ${numTwo} = ${summa}`);
}

