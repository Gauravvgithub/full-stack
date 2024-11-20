/*
step 1 - dice server connect

step 2 - course explore

step 3 - course selection

step 4 - class enroll
*/

function connecToDiceServer(){

    console.log("connecting....");

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("connected to dice server")
        }, 2000);
    });
    
}
function courseExplore(){
    console.log("course exploring....");

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            
            resolve("course explored")
        }, 2000);
    });
    
}
function courseSelection(){
    console.log("course selecting in process...");

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            
            resolve("course selected successfully")
        }, 2000);
    });
    
}
function classEnroll(){
    console.log("class enrolling in process...");
    
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("class Enrolled Successfully")
            
        }, 2000);
        // reject("i am not interested")
    });
}
connecToDiceServer()
.then((result)=>{
    console.log(result);
    return courseExplore();
})
.then((result)=>{
    console.log(result);
    return courseSelection();
    
})
.then((result)=>{
    console.log(result);
    return classEnroll()
})
.then((EnrolledSuccessfully)=>{
    console.log(EnrolledSuccessfully);

})
.catch((error)=>{
    console.error(error,"error 404");
    
})
