let a = Number(prompt("Enter first number"))
let b = Number(prompt("Enter second number"))
let c = Number(prompt("Enter third number"))
// let result = a>b?(a>c?a+" is a greater":(b>c)?):c+"is greater";
result = (a>b)?((a>c)?a+" is greatest":c+" is greatest"):((b>c)?b+" is greatest":c+" is greatest");
console.log(result);