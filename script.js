const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

// add new task
function additem() {
    if (input.value == "") {
        alert("please add your tasks")
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);

    }
    input.value = "";
}

// check the complete task
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);