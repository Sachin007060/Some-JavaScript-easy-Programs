let num = +prompt("Enter any number: ");
let sum = 0;
while (num > 0) {
    let rem = num%10;
    sum += rem;
    num = Math.floor(num/10);
}
console.log(`Total sum of all the digit present in the number ${sum}`);