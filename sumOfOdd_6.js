// WAP to print sum of odd numbers.. 
let num = +prompt("Enter the number where you want a sum of odd numbers: ");
let sum = 0;
for(let i=0; i<=num ; i++){
    if(i%2!=0)
        sum +=i;
}
console.log(`Total sum of odd numbers are ${sum}`);