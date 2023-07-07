function addItems(event) {
    event.preventDefault();
    let item = document.getElementById("todoInput");
    let ul = document.getElementById("todoList")

    let br = document.createElement("br");
    let newLi = document.createElement("li");
    let newCheck = document.createElement("input");
        newCheck.type = "checkbox";

    if (item.value === "") {
        alert("Enter your TO-Do please!")
        item.focus();
        return false;
    } else{
        ul.appendChild(newCheck);
        ul.appendChild(newLi);
        newLi.innerHTML = item.value;
        ul.appendChild(br);
    }
}