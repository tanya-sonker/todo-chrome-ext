const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// changing inline event handler to event listener to comply with chrome's security policy 
document.getElementById("addBtn").addEventListener("click", function() {
    if (inputBox.value === '') {
        alert('Please enter a task!');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let del = document.createElement("button");
        del.innerHTML = "x";
        li.appendChild(del);
    }
    inputBox.value = '';
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
}, false);