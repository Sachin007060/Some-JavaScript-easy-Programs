// let btn = document.querySelector('button')
// btn.onclick = ()=>{
//     btn.style.background = "red"
//     btn.innerText = "🤩🤩☺"
// }

let sec = document.querySelector('section')
let myDiv = document.querySelector('div')
// myDiv.onmouseenter = ()=>{
//     sec.style.display = 'block'
// }
// // myDiv.onmouseleave = ()=>{
// //     sec.style.display = 'none'
// // }
// let myMouse = ()=>{
//         sec.style.display = 'none'
// }

let handleClick = ()=>{
    sec.style.display = "block"
}

let handleDblClick = ()=>{
    sec.style.display = "none"
}
myDiv.addEventListener('click', handleClick)
myDiv.addEventListener('dblclick', handleDblClick)

