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
/**
 * start.addEventListener('event type', 'action')
 * associate an element with a type of event and an action
 * that we want to respond to the event
 * the first parameter 
 */
let fontSize = 4;
start.addEventListener("click", ()=>{
    console.debug("jajajaja");
    start.style.fontSize = fontSize + "px";
});
// annonymus function 
stop.addEventListener("click", ()=>{
    console.debug("jajajaja");
});
function resetBtnHandeler(){
    console.debug("wowowow")
};
reset.addEventListener("click", resetBtnHandeler);