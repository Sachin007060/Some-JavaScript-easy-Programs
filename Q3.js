// WAP to print last digit of number..
let a = +prompt("Enter any positive number: ")
if(a>0){
    let rem = a%10;
    console.log(`last digit in ${a}  is ${rem}`);
}else
    console.log("Invalid entery!");