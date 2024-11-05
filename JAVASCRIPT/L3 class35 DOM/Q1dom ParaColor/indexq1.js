// let para=document.querySelector('.para1')
// console.log(para);
// para.style.color="lime"
// para.style.backgroundColor="black"
// para.style.fontFamily="fira code"


let paras=document.querySelectorAll('p')

for(let idx=0; idx<=paras.length;idx++){

    switch (idx) {
        case 1: 
        paras[0].style.color="red"
        paras[0].style.backgroundColor="black"
            
        break;
    
        case 2:
        paras[1].style.color="blue"

        break;

        case 3:
        paras[2].style.color="green"

        break;
    }
}


