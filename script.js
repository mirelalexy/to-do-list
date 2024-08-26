const taskName = document.querySelector(".write-task");
const addBtn = document.querySelector("button");
let taskAdded = document.querySelector("ul li");
const list = document.querySelector(".list-container");

function addTask(taskAdded){
    const newTask = document.createElement("li");
    newTask.classList.add("task-item");
    newTask.innerHTML = `<i class="fa-regular fa-circle"></i><span class="task-text">${taskAdded}</span><i class="fa-solid fa-trash"></i>`;
    list.appendChild(newTask);
    taskName.value = '';
}

// add task
addBtn.addEventListener("click", function(){
    taskAdded = taskName.value;
    console.log(taskAdded);
    addTask(taskAdded);
});

// check/uncheck task
list.addEventListener("click", function (event) {
    console.log(event);

    // Check if the click was on the circle icon
    if (event.target.classList.contains("fa-circle") || event.target.classList.contains("fa-circle-check")) {
        console.log("Check button clicked!", event.target);

        // Toggle between checked and unchecked icon
        event.target.classList.toggle("fa-circle");
        event.target.classList.toggle("fa-circle-check");

        // Get the parent <li> element of the clicked icon
        const taskContent = event.target.parentElement;

        // Toggle the 'checkedTask' class on the <li> element to change text decoration
        taskContent.classList.toggle("checkedTask");
    }
});