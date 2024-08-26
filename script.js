const taskName = document.querySelector(".write-task");
const addBtn = document.querySelector("button");
let taskAdded = document.querySelector("ul li");
const uncheckedBtn = document.querySelector(".fa-circle");
const list = document.querySelector(".list-container");

function addTask(taskAdded){
    const newTask = document.createElement("li");
    newTask.innerHTML = `<i class="fa-regular fa-circle"></i>${taskAdded}`;
    list.appendChild(newTask);
    taskName.value = '';
}

addBtn.addEventListener("click", function(){
    taskAdded = taskName.value;
    console.log(taskAdded);
    addTask(taskAdded);
});
