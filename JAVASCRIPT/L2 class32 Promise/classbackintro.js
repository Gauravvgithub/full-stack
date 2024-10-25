
// Introduction of Callback Function.

function sayHello(name,callfunction){
    console.log("Hello",name);
    callfunction();
}
function sayBye(){
    console.log("Bye Gaurav");
}

sayHello("Gaurav",sayBye);

// *----------------------------------------------------

/*
ISSUES WITH CALLBACKS
1- CALLBACK HELL
2- INVERSION OF CONTROL
3- CODE Readability ISSUES 

//* Callback hell is a common issue that can make your JavaScript code difficult to read, maintain, and debug.

*/