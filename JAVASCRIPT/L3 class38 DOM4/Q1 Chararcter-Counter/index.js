

const textfield=document.querySelector("textarea")

const cnt=document.querySelector("h1")

const dspl=document.querySelector("#display")



textfield.addEventListener("input",function(event){
    let charcounts=event.target.value.length;
    console.log(charcounts)
    dspl.innerText=charcounts;
})
