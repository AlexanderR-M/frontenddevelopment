function firstTask(){
    secondTask(); //pushes to the second task
    console.log("1. inside first task")
}

function secondTask(){
    finalTask();//pushes to the final task
    console.log("2. inside second task")
}
function finalTask(){
    console.log("3. inside final task")
}

firstTask();

function add(num){
    console.log(num);
    add(++num);

}

add(0);
