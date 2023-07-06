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
  