let addTaskBtn = document.getElementById("add-task");
let removeTaskBtn = document.getElementById("remove-task");
let taskInput = document.querySelector("input.task-title");
let taskWrapper = document.querySelector(".tasks .list-group");
let myDiv=document.querySelector(".tasks ");

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = dd+'-'+mm+'-'+yyyy;

var clock = new Date();
var hh = clock.getHours();
var nn=clock.getMinutes();
var ss=clock.getSeconds();
if(hh<10) 
{
    hh='0'+hh;
} 

if(nn<10) 
{
    nn='0'+nn;
} 

if(ss<10) 
{
    ss='0'+ss;
} 
clock = hh+':'+nn+':'+ss;

document.addEventListener("keyup",(e) => {
    e.stopPropagation();
    if(e.keyCode==13){
    if (taskInput.value.trim() !== "") {
        let newTaskElem = "<li class='list-group-item'>" + taskInput.value + " "+today+" "+clock+ "</li>"
        taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML ;
        taskInput.value = "";
    }
    else {
        alert("Can't add an empty task!");
    }
    }
   
})

document.addEventListener("click",(e) => {
    e.stopPropagation();
    if (taskInput.value.trim() !== "") {
        let newTaskElem = "<li class='list-group-item'>" + taskInput.value + " "+today+" "+clock+ "</li>"
        taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML ;
        taskInput.value = "";
    }
    else {
        alert("Can't add an empty task!");
    }
    }
)

removeTaskBtn.addEventListener("click",(e) => {
    e.stopPropagation();
    myDiv.removeChild(taskWrapper);
}
)
