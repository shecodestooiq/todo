let todo_item = document.getElementById('todoInput');
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');



function Add() {
    if (todo_item.value === "") {
        alert("Enter todo item")
    } else {
        alert(todo_item.value + " is added")
        if (item1.value != "") {
            if (item2 != "") {
                if (item3 != "") {
                    if (item4 != "") {
                        if (item5 != "")
                            alert("Your ToDo List is Full")
                        item5.innerText = todo_item.value;
                        document.getElementsByClassName('checkmark:nth-child(5)').style.display = "block";
                    }
                    item4.innerText = todo_item.value;
                    document.getElementsByClassName('checkmark:nth-child(4)').style.display = "block";
                }
                item3.innerText = todo_item.value;
                document.getElementsByClassName('checkmark:nth-child(3)').style.display = "block";
            }
            item2.innerText = todo_item.value;
            document.getElementsByClassName('checkmark:nth-child(2)').style.display = "block";
        }
        item1.innerText = todo_item.value;
        document.getElementsByClassName('checkmark:nth-child(1)').style.display = "block";
    }
}
