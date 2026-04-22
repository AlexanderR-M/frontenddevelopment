const btns = document.querySelectorAll(".theme-btn");
const bd = document.querySelector("body")
console.log(bd)
console.log(btns);
// iterate all theme buttons to associate each one with
//a task that we want to execute when ocurring a click event
for (let index= 0; index <btns.length; index++) {
    const btn = btns[index];
    console.log(btn);
    btn.addEventListener("click",()=> {
        console.log(btn.getAttribute("data-theme"));
        console.log(btn.getAttribute("class"));
        bd.className = btn.getAttribute("data-theme");

    });

}
// add a key value pair data to the local storage
//localStorage.setItem("theme", "dark");
//access data
//const theme = localStorage.getItem("theme");
console.log("current theme = " + theme);

//remove the data associated with the key 
localStorage.removeItem("theme")
console.log("current theme " + localStorage.getItem("theme"))
//Step 1: read the theme value stored in the local sotrage
const theme = localStorage.getItem("theme")
if("theme"){// if the theme value exists, not null
    //set the current theme to the one sleected by the user
    bd.className = theme;
}



btns.array.forEach(btn => {
    console.log(btn);
    btn.addEventListener("click",()=> {
        console.log(btn.getAttribute("data-theme"));
        console.log(btn.getAttribute("class"));
        bd.className = btn.getAttribute("data-theme");

    });
})