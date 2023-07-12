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
  

  function saveState() {
    var elements = document.getElementsByTagName("label");
    var state = {};

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var id = element.id;
      var value = element.value;

      // Save relevant attributes based on the element type
      if (element.type === "checkbox") {
        state[id] = element.checked;
      } else {
        state[id] = value;
      }
    }

    localStorage.setItem("pageState", JSON.stringify(state));
    alert("To do list saved successfully!");
  }

  // Reload the state of the HTML page
  function reloadState() {
    var state = localStorage.getItem("pageState");

    if (state) {
      state = JSON.parse(state);

      for (var id in state) {
        var element = document.getElementById(id);
        var value = state[id];

        // Set values and attributes based on the element type
        if (element.type === "checkbox") {
          element.checked = value;
        } else {
          element.value = value;
        }
      }
    }
  }

  // Call reloadState() when the page loads
  window.onload = reloadState;
