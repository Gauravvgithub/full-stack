

const textfields=document.querySelector("textarea")
const countdisplay=document.querySelector("h1")


var counts=0;
textfields.addEventListener("input",function(event){
   

    if(event.target.value==" "){
        counts++;
        console.log(counts)
        countdisplay.innerText=counts;
    }

})