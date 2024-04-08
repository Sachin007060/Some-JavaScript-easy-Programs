console.log("Exam started");
setTimeout(()=>{
    console.log("exam end!");
},2000)


// let count=0
// let myInterval =  setInterval(()=>{
//     // count = count++;
//     // console.log(count++);
//     console.log("Hello");
// }, 2000)


// by the help of promise calling an API..
// let p = new Promise((resolve, reject)=>{
//     let myData = fetch("https://api.github.com/users").then(resp=>resp.json()).then(resp => console.log(resp))
//     console.log("My data");
// })


// Calling the API using promise and aslo using catch if any exception occurs
// let nP = new Promise(() => {
//     fetch("https://api.github.com/users").then(resp => resp.json()
//     .then(resp => console.log(resp)))
//     .catch(err => console.log(err.name))
// })


// Calling the API using async() function.. 
let fetchData = async() => {
    let myData = await fetch("https://api.github.com/users");
    let jsonData = await myData.json();
    console.log(jsonData);
}
fetchData();    