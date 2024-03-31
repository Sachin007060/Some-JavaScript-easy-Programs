let num1 = +prompt("Enter the first number")
let num2 = +prompt("Enter the second number")
let operation = prompt("Enter the operation you want to perform \n1(+).addition \n2(-).subtraction \n3(*).multiplication \n4(/).division \n5(%).remainder:")
if(operation == 1 || operation == '+')
    console.log(`${num1} + ${num2} = ${num1+num2}`);
else if(operation == 2 || operation == '-' )
    console.log(`${num1} - ${num2} = ${num1-num2}`);
else if(operation == 3 || operation == '*' )
    console.log(`${num1} * ${num2} = ${num1*num2}`);
else if(operation == 4 || operation == '/' )
    console.log(`${num1} / ${num2} = ${num1/num2}`);
else if(operation == 5 || operation == '%' )
    console.log(`${num1} % ${num2} = ${num1%num2}`);
else
    console.log("you enter invalid operation");