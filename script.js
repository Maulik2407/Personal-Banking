// let Demo = 67;


// if (Demo<=30) {
//     console.log("Game over baby");    
// }

// else if (Demo>30 && Demo<=50) {
//     console.log("you are win silver player");  
// }
// else if (Demo>50 && Demo<=100) {
//     console.log("you are Gold player");  
// }

// else {
//     console.log("wrong number nikal be");
// }s


let scr = document.querySelector(".small-card");

function onbox() {

    scr.style.transform = "translateX(0px)";
    scr.style.transition = ".4s linear"
}
function onboxclose() {

    scr.style.transform = "translateX(340px)";
    scr.style.transition = ".4s linear"
}



let flesh = document.querySelector(".flesh")

function clickon() {   
    flesh.style.display = "none";
    flesh.style.opacity = "0";
    flesh.style.transition = ".3s linear"
}


