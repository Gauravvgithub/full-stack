let objP={
    name:gaurav,
    age:21,
    education:"BA",
    course:"full Stack",
    detailP: (){
        
        const child(){
            console.log(this);       

        }
        console.log(child);
        
    }
}
console.log(objP.detailP());
