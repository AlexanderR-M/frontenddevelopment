const timeDisplay = document.getElementById("timePanel");
console.log(timeDisplay)
function updateTime(){
    //step 1 
    const date = new Date();
    console.log(date);
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    timeDisplay.innerText = date.getSeconds();
}

setInterval(updateTime, 1000);