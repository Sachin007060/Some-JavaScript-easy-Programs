// let num = +prompt("Enter any number: ");
// let rem = num % 10;
// console.log(`Entered number is ${num}`);
// if (rem == 7 && num % 7 == 0)
//     console.log(`Number end with 7 and also divide by 7`);
// else
//     console.log("You entered invalid number");


// print number upto 500 that are divided by 7 and end with 7..
console.log("number which are are divided by  7 and end with 7 upto 500");
for (let i = 1; i <= 500; i++) {
    let rem = i%10;
    if (rem == 7 && i % 7 == 0)
        console.log(`${i}`);
}