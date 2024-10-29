

// //* Accessing Elememts --> select and save

// let outPut = document.querySelector('h1')
// outPut.textContent = "My Name is Gaurav"
// outPut.innerHTML = '<i>My name is Gaurav</i>'
// // let outPut2 = document.querySelector('.para2')
// // outPut2.textContent = "My Name is Gaurav"

//* Event Listenes

// let line1 = document.querySelector('h1');
// let btn = document.querySelector('button');
// btn.addEventListener("click", function(){
//     line1.innerHTML = 'heyy buddy'
    
// })

let button1 = document.querySelector('.btn1');
button1.style.backgroundColor="black";
button1.style.color="white";
button1.style.width="40vw";
// button1.style.height="50%";
button1.addEventListener("click",function(){
button1.innerHTML = "I'm Button 1"
button1.style.backgroundColor = "red"
// button1.location.reload(),1000;
})
// button1.addEventListener("dblclick",function() {
//     button1.style.backgroundColor = "yellow"
// })

let button2 = document.querySelector('.btn2');
button2.style.backgroundColor="black";
button2.style.color="white";
button2.style.width="40vw";
// button1.style.height="50%";
button2.addEventListener("click",function(){
button2.innerHTML = "I'm Button 2"
button2.style.backgroundColor = "blue"
})
