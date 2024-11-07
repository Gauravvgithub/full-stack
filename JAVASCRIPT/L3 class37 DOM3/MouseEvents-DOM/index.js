
console.log("hey");


let btn = document.querySelector("button")
// console.log(btn);


function changeColor(){

    btn.style.color = "white";
    btn.style.backgroundColor = "green";
    btn.style.fontWeight = "bold";
    btn.style.border = "none"
    btn.style.width = "10%"
    btn.style.height = "100px"
    btn.style.borderRadius = "50%"


}

let btn2 = document.querySelector(".btn2")

function changeColor2(){
    btn2.style.color = "white";
    btn2.style.backgroundColor = "red";
    btn2.style.fontWeight = "bold";
    btn2.style.border = "none"
    btn2.style.width = "10%"
    btn2.style.height = "100px"
    btn2.style.borderRadius = "50%"
    
}

let para = document.querySelector("#para1")

function changeParaColor(){
    para.style.color = "white"
    para.style.backgroundColor = "blue"
    para.style.fontWeight = "bold";
    para.style.display = "inline-block"
    btn2.style.display = "block"
    
}

let btn3 = document.querySelector(".btn3")
function changeColorOnMove(){
    btn3.style.backgroundColor = "gold"
}

let btn4 = document.querySelector("#btn4")
function changeColorOnEnter(){
    btn4.style.backgroundColor = "purple"
}