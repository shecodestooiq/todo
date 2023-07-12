document.getElementById('add').addEventListener('click', function (event) {
    event.preventDefault();
    addItem();
});
function addItem() {
    var todoInput = document.getElementById('todoInput');
    var todoList = document.getElementById('todoList');
  
    if (todoInput.value !== '') {
      var listItem = document.createElement('li');
  
      // Create a checkbox input element
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'todo-checkbox';
  
      // Create a label for the checkbox
      var label = document.createElement('label');
      label.textContent = todoInput.value;
      label.className = 'checked-label'
  
      // Append the checkbox and label to the list item
      listItem.appendChild(checkbox);
      listItem.appendChild(label);
  
      // Append the list item to the todoList
      todoList.appendChild(listItem);
  
      // Clear the input field
      todoInput.value = '';
    }
  }
  
 // Function to save the state
 function saveState() {
  var todos = [];
  var todoItems = document.querySelectorAll("#todoList li");

  // Iterate over the todo items and store their text content
  for (var i = 0; i < todoItems.length; i++) {
    todos.push(todoItems[i].textContent);
  }

  // Save the state in local storage
  localStorage.setItem("savedTodos", JSON.stringify(todos));
  alert("State saved successfully!");
}

// Function to load the saved state
function loadState() {
  var savedTodos = localStorage.getItem("savedTodos");

  if (savedTodos) {
    var todos = JSON.parse(savedTodos);

    // Create and append list items for each saved todo
    var todoList = document.getElementById("todoList");
    for (var i = 0; i < todos.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = todos[i];
      todoList.appendChild(listItem);
    }

    alert("State loaded successfully!");
  } else {
    alert("No saved state found.");
  }
}

// Call the loadState function when the page loads
window.onload = loadState;