let myDiv = document.querySelector('div');

let sc = () => {
    myDiv.style.fontSize = "2vw"
    myDiv.style.color = "white"
    myDiv.style.font = "bold"
    myDiv.style.backgroundColor = "black"
}
myDiv.addEventListener('scroll', sc);
