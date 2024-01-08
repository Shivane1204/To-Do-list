function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  
  function removeTask(element) {
    var taskList = document.getElementById("task-list");
    taskList.removeChild(element.parentNode);
  }
  