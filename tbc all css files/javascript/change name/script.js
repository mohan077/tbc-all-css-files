const para = document.querySelector("p"); 

console.log("present paragraph value: ", para); 

para.addEventListener("click", updateName); 

function updateName(){
    const name = prompt("hey whats your name pal"); 
    para.textContent =  `first play is: ${name}`;
}




// para.addEventListener("click",()=>{
//     const name = prompt("what is your name"); 
//     para.textContent = `player1 : ${name}`;  
// })




//