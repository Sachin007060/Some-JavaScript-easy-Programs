// WAP reverse a given number.. 
let num = +prompt("Enter any number: ");
let rev = 0;
console.log(`The given number is: ${num}`);
while(num > 0) {
    let rem = num%10;
    rev = (rev*10)+rem;
    num = Math.floor(num/10);
}
console.log(`reverse of the given number is ${rev}`);