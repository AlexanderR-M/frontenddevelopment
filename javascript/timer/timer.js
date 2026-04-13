/**
 * "document" is an object created the js execution enviroment
 * it represetns the tree of the web page we are manipulating
 */

const start = document.getElementById("start");
console.log(start)
console.debug(start)
const stop = document.getElementById("stop");
console.log(stop)
const reset = document.getElementById("reset");
console.log(reset)
//retrive an element that does not exist from the web page DO
const anyElement = document.getElementById("any thing");
console.log(anyElement);
const timerDisplayer = document.getElementById("timerDisplay");
console.log(timerDisplayer);

const btns = document.querySelectorAll(".control-button");
console.log(btns);
btns.forEach(e => {
    
})
/**
 * start.addEventListener('event type', 'action')
 * associate an element with a type of event and an action
 * that we want to respond to the event
 * the first parameter 
 */
let fontSize = 4;
let time = 0;
let maxFontSize = 100;
let minFontSize = 2;
let isIncreasing = true;
start.addEventListener("click", () => {
    //step1: if the fontsize is increasing
    let control = 1000;
    while (control > 0) {
        if (isIncreasing) {
            fontSize++;
            //check if the current size has reached the limits
            if (fontSize >= maxFontSize) {
                isIncreasing = false;

            }
        }
        else {
            fontSize--;
            if (fontSize <= minFontSize) {
                isIncreasing = true;
            }
        }
        start.style.fontSize = fontSize + "px";
        control--;
    }
    // start.style.fontSize = fontSize + "px";
    // if(fontSize <= maxFontSize){
    //   fontSize++;
    
    //  }


});
// annonymus function 
stop.addEventListener("click", () => {
    console.debug("jajajaja");

});
function resetBtnHandeler() {
    console.debug("wowowow")
};
reset.addEventListener("click", resetBtnHandeler);