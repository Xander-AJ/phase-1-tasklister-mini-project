document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
  
      const inputField = document.getElementById("new-task-description");
      const task = inputField.value;
  
      const newTaskItem = document.createElement("li");
      newTaskItem.textContent = task;
      taskList.appendChild(newTaskItem);
  
      inputField.value = ""; // Clear the input field after submitting
    });
  });
  

