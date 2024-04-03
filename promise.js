// let broPromise = new Promise((resolved, rejected)=>{
//     let response = true;
//     if(response == true){
//         resolved("tu sachha bhai hai mera🤜🤛");
//     }else{
//         rejected("Dhokebaaj🤐");
//     }
// })

// broPromise.then((happen)=>{
//     console.log(happen);
// })

// broPromise.catch((happen)=>{
//     console.log(happen);
// })

// broPromise.finally(()=>{
//     console.log("Always we  have our broCode😎");
// })

// Another example with some fun..

let pinkiPromise = new Promise((resolve, reject) => {
    let response = prompt("Tinki tumhari hn mai v na hai....");
    if (response == "yes") {
        resolve("Ab to sidha Band Baja Barat❤💥✨🎉")
    } else {
        reject("Achha chlata hu duao mai yaad rakhna🧨💔💘🥺🥺 ")
    }
})

pinkiPromise.then(() => {
    console.log("Tinki tinku get married...");
})

pinkiPromise.catch(() => {
    console.log("Thukra k meara pyaar intakam dekhegi..");
})

pinkiPromise.finally(() =>{
    console.log("bada pachtaoge..");
})