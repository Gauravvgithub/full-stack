/*

clock - 3 var -> Hr,Min,Sec

60sec+ --> min+1
1min+ --> hr+1

*/

// setTimeout(() => {
//     console.log("Gaurav Timeout");
    
// }, 1000);

// setInterval(() => {
//     console.log("Gaurav Interval");
    
// }, 1000);


let hr=12;
let min=0;
let sec=0;
setInterval(()=>{
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
        clearInterval(setInterval);
        console.log("Timer has Stopped after 24Hr");
    }
    console.log("hr",hr,"min",min,"sec",sec);        
},1000);