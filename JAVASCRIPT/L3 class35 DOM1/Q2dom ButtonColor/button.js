let btn = document.querySelectorAll('button')
 for(let idx=0;idx<=btn.length;idx++){
    if (idx==0) {
        btn[idx].style.fontFamily="fira code"
        btn[idx].style.color="red"
    }else if(idx==1){
        btn[idx].style.fontFamily="fira code"
        btn[idx].style.color="blue"
    }else{
        btn[idx].style.fontFamily="fira code"
        btn[idx].style.color="green"
    }
}

