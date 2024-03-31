// Q. WAP to find square and qube of the number..
let bs = +prompt("Enter any base number: ");
let eq = +prompt("Enter the power: ");
let pow =1;
for(let i=0; i<eq; i++){
    pow = bs*pow;
}
console.log(`${bs}'s power ${eq} is = ${pow}`);
