let vowel = prompt("Enter any lowerCase alphabet character only: ");

switch(vowel){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("It is a vowel..");
        break;
    default: 
        console.log("It is consonate.. ");
}