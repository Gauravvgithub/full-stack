

// let count = 0;

// let interval1 = setInterval(() => {
//     count += 1;
//     if(count===60){
//         clearInterval(interval1);
//     }
    
//     let dateTime = new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);
    
// }, 1000);

let hr=23;
let min=59;
let sec=50;
let stop = setInterval(()=>{
    sec++;
    if(sec>=60){
        sec=0;
        min++;
    }
    if(min>=60){
        min=0;
        hr++;
    }
    if(hr>=24){
        console.log("Timer is Stopped after 24Hr");
        clearInterval(stop);
    }
    console.log("hr",hr,"min",min,"sec",sec); 
          
},1000);