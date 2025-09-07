let btn = document.querySelector(".addBtn");
let input = document.querySelector("#taskInput");
let ul = document.querySelector("#taskList");
let clearAllBtn = document.querySelector("#clearAll");
let taskCount = document.querySelector("#taskCount");

// Load tasks from localStorage
window.onload = function () {
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => {
    addTask(task.text, task.completed);
  });
  updateCounter();
};

// Add Task
btn.addEventListener("click", function(){
  if(input.value.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }
  addTask(input.value, false);
  saveTasks();
  input.value = "";
});

// Add Task Function
function addTask(taskText, completed){
  let item = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = taskText;
  if(completed) span.classList.add("complete");

  // Toggle complete
  span.addEventListener("click", function(){
    span.classList.toggle("complete");
    saveTasks();
    updateCounter();
  });

  let delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.classList.add("dele");
  delbtn.addEventListener("click", function(){
    item.remove();
    saveTasks();
    updateCounter();
  });

  item.appendChild(span);
  item.appendChild(delbtn);
  ul.appendChild(item);
  updateCounter();
}

// Clear All Tasks
clearAllBtn.addEventListener("click", function(){
  ul.innerHTML = "";
  saveTasks();
  updateCounter();
});

// Update Counter
function updateCounter(){
  let tasks = document.querySelectorAll("li span:not(.complete)");
  taskCount.innerText = tasks.length;
}

// Save to localStorage
function saveTasks(){
  let tasks = [];
  document.querySelectorAll("li span").forEach(span => {
    tasks.push({
      text: span.innerText,
      completed: span.classList.contains("complete")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
