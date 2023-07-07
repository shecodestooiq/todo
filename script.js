const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");



todoForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const task = todoInput.value.trim(); // Remove leading/trailing whitespace

    if (task !== "") {
        const listItem = document.createElement("li");

        const toggleInput = document.createElement("input");
        toggleInput.type = "checkbox";
        toggleInput.addEventListener("change", function() {
            if (this.checked) {
                listItem.classList.add("completed");
            } else {
                listItem.classList.remove("completed");
            }
        });
        listItem.appendChild(toggleInput);

        const taskLabel = document.createElement("label");
        taskLabel.textContent = task;
        listItem.appendChild(taskLabel);

        todoList.appendChild(listItem);
        todoInput.value = ""; // Clear input field
    }
});
