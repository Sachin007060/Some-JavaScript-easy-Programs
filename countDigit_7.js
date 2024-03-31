let num = +prompt("Enter any number: ")
let count = 0;
while(num>0) {
    count=count + 1;
    num = Math.floor(num/10);
}
console.log(`total count is ${count}`);