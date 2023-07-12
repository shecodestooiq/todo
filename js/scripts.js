document.getElementById('add').addEventListener('click', function (event) {
  event.preventDefault();
  addItem();
});

// Function to add an item to the todo list
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
      label.className = 'checked-label';

      // Append the checkbox and label to the list item
      listItem.appendChild(checkbox);
      listItem.appendChild(label);

      // Append the list item to the todoList
      todoList.appendChild(listItem);

      // Clear the input field
      todoInput.value = '';

      saveState(); // Save the state after adding an item
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
          listItem.innerHTML = '<input type="checkbox" class="todo-checkbox"><label class="checked-label">' + todos[i] + '</label>';
          todoList.appendChild(listItem);
      }
  }
}

// Call the loadState function when the page loads
window.onload = loadState;
