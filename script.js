var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function additem() {
  var li = document.createElement("li");
  var item = document.getElementById("todoInput").value;
  var t = document.createTextNode(item);
  li.appendChild(t);
  if (item === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todoList").appendChild(li);
  }
  document.getElementById("todoInput").value = "";

}