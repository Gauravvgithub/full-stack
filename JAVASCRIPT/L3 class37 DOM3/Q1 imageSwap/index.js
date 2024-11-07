

let img1 = document.querySelector("#image1")
let img2 = document.querySelector("#image2")

let btn = document.querySelector("button")

function swapimage(){

    let temp = image1.src;
    image1.src = image2.src;
    image2.src = temp;
}