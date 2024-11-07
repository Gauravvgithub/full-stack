

let redLgt = document.querySelector(".L1")

let yellowLgt = document.querySelector(".L2")

let greenLgt = document.querySelector(".L3")

// let clkBtn = document.querySelector(".btn")

function trafficLightChange(){

    redLgt.style.backgroundColor = "#ff0800";

    setTimeout(()=>{

        yellowLgt.style.backgroundColor = "yellow";

        redLgt.style.backgroundColor = "black";
    },3000);

    setTimeout(()=>{

        yellowLgt.style.backgroundColor = "black";

        greenLgt.style.backgroundColor = "#7fff00";
    },5000);

}

function trafficLightChange2(){

    redLgt.style.backgroundColor = "#ff0800";

    setTimeout(()=>{

        yellowLgt.style.backgroundColor = "yellow";

        redLgt.style.backgroundColor = "black";
    },3000);

    setTimeout(()=>{

        yellowLgt.style.backgroundColor = "black";

        greenLgt.style.backgroundColor = "#7fff00";
    },5000);

}

setInterval(()=>{
    trafficLightChange2();

    greenLgt.style.backgroundColor = "black"
},10000)