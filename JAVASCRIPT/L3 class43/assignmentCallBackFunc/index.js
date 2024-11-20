/*

promise, callback function, async await, settimeout and setinterval..


step 1 - dice server connect

step 2 - course explore

step 3 - course selection

step 4 - class enroll

*/

// callback function - 

function connecToDiceServer(name,callfunction){
    console.log("connecting to dice server....",name);

    setTimeout(()=>{
        console.log("connected to dice server....");
        callfunction();
        
    },3000);
    
}


function courseExplore(){
    console.log("exploring course");

    setTimeout(()=>{
        console.log("course explored");
        
    },5000);
    
}

function classSelection(name,callfunction){
    console.log("class selection in process....",name);

    setTimeout(()=>{
        console.log("class selected successfully");
        callfunction();
        
    },7000);
    
}


function classEnroll(){
    console.log("class enrolling");

    setTimeout(()=>{
        console.log("class enrolled successfully");
        
    },11000);
    
}

connecToDiceServer("",courseExplore);
classSelection("",classEnroll);







