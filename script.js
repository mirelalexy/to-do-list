const taskName = document.querySelector(".write-task");
const addBtn = document.querySelector(".addTaskBtn");
let taskAdded = document.querySelector("ul li");
const list = document.querySelector(".list-container");
const themeBtn = document.querySelector(".toggleThemeBtn");
const body = document.querySelector("body");
const img = document.querySelector("img");

function addTask(taskAdded){ 
    const newTask = document.createElement("li");
    newTask.classList.add("task-item");
    newTask.innerHTML = `<i class="fa-regular fa-circle"></i><span class="task-text">${taskAdded}</span><i class="fa-solid fa-trash orangeTrash"></i>`;
    list.appendChild(newTask); // add task to list
    taskName.value = ''; // restart the input box text
}

// add task
addBtn.addEventListener("click", function(event){
    console.log(event);
    taskAdded = taskName.value;
    console.log(taskAdded);
    if (!(taskAdded === '')) { // if user did not write anything in the input box, no task will be added
        addTask(taskAdded);
    }
});

list.addEventListener("click", function(event) {
    // check/uncheck task
    // check if the circle icon was clicked
    if (event.target.classList.contains("fa-circle") || event.target.classList.contains("fa-circle-check")) {

        // toggle between checked and unchecked icon
        event.target.classList.toggle("fa-circle");
        event.target.classList.toggle("fa-circle-check");

        const taskContent = event.target.parentElement;
        // change text decoration
        taskContent.classList.toggle("checkedTask");
    }

    // delete task
    // check if the trash icon was clicked
    if (event.target.classList.contains("fa-trash")) {
        const taskItem = event.target.parentElement;
        taskItem.remove(); // remove the task item from the list
    }
});

// toggle theme
themeBtn.addEventListener("click", function(){
    const trashIcon = document.querySelector(".fa-trash");

    // background
    body.classList.toggle("orange-body");
    body.classList.toggle("pink-body");

    // orange theme
    if(body.classList.contains("orange-body")) {
        img.src = "assets/images/pumpkin.png";
        img.classList.add("pumpkin");
        img.classList.remove("bow");
        addBtn.classList.add("orangeBtn");
        addBtn.classList.remove("pinkBtn");
        trashIcon.classList.add("orangeTrash");
        trashIcon.classList.remove("pinkTrash");
    // pink theme
    } else if (body.classList.contains("pink-body")) {
        img.src = "assets/images/bow.png";
        img.classList.add("bow");
        img.classList.remove("pumpkin");
        addBtn.classList.add("pinkBtn");
        addBtn.classList.remove("orangeBtn");
        trashIcon.classList.add("pinkTrash");
        trashIcon.classList.remove("orangeTrash");
    }
});
