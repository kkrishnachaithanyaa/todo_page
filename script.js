document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.className = "task-text";

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "task-actions";

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✔️";
    completeBtn.title = "Mark as complete";
    completeBtn.addEventListener("click", () => {
      taskSpan.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.title = "Delete task";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);

    listItem.appendChild(taskSpan);
    listItem.appendChild(actionsDiv);

    taskList.appendChild(listItem);
    taskInput.value = "";
  }
});
