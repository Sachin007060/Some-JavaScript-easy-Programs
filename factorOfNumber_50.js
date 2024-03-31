// WAP to print the factor of a number and also print the number of factor of that..
let num = +prompt("Enter any number for factor: ");
for(let i=1; i<=num/2; i++){
    if(num%i==0)
        console.log(`${i}`);;
}