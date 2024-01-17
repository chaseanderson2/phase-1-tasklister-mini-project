document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task-description");

  taskInput.addEventListener("input", (event) => {
    const userInput = event.target.value;
    console.log(userInput);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const userInput = taskInput.value;
    console.log(userInput);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const userInput = taskInput.value;

    const newTask = document.createElement("li");
    newTask.textContent = userInput;

    taskList.appendChild(newTask);
    taskInput.value = "";
  });
});
