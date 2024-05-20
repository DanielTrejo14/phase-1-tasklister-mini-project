document.addEventListener("DOMContentLoaded", () => {
  
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks")

    form.addEventListener("submit", (event) => {
        event.preventDefault();

    const newTaskDescription = document.getElementById("new-task-description").value;

    const newTaskItem = document.createElement("li")
    newTaskItem.textContent = newTaskDescription

    taskList.appendChild(newTaskItem);

    document.getElementById("new-task-description").value = "";

    const deleteButton = document.createElement('button');

    deleteButton.textContent = "X"
    deleteButton.style.marginLeft = "10px"
    deleteButton.style.padding = "2px 4px"
    deleteButton.style.fontSize = "10px"


    deleteButton.addEventListener("click", () => {
    taskList.removeChild(newTaskItem);


    })
    newTaskItem.appendChild(deleteButton);

    })
});
