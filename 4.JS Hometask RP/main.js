let addTaskBtn = document.getElementById("add-task");
let removeTaskBtn = document.getElementById("remove-task");
let taskInput = document.querySelector("input.task-title");
let taskWrapper = document.querySelector(".tasks .list-group");


let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}
today = dd + "-" + mm + "-" + yyyy;

let clock = new Date();
let hh = clock.getHours();
let nn = clock.getMinutes();
let ss = clock.getSeconds();
if (hh < 10) {
  hh = "0" + hh;
}

if (nn < 10) {
  nn = "0" + nn;
}

if (ss < 10) {
  ss = "0" + ss;
}
clock = hh + ":" + nn + ":" + ss;

taskInput.addEventListener("keypress", function(e){
    if(e.keyCode==13){
        addTaskBtn.click();
    }
})
addTaskBtn.addEventListener("click", Write )


function Write() {
  if (taskInput.value.trim() !== "") {
    let newTaskElem =
      "<li class='list-group-item'>" +
      taskInput.value +
      " " +
      today +
      " " +
      clock +
      "</li>";
    taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML;
    taskInput.value = "";
  } else {
    alert("Can't add an empty task!");
  }
}

removeTaskBtn.addEventListener("click", () => {
    document.querySelectorAll(".list-group-item").forEach(e=>{
        e.remove();
    })
})