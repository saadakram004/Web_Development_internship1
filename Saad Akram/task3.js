function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const li = document.createElement("li");
  
    const span = document.createElement("span");
    span.innerText = taskText;
  
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "task-buttons";
  
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.onclick = function () {
      if (editButton.innerText === "Edit") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.innerText;
        li.insertBefore(input, span);
        li.removeChild(span);
        editButton.innerText = "Save";
      } else {
        const updatedText = li.querySelector("input").value;
        span.innerText = updatedText;
        li.insertBefore(span, li.querySelector("input"));
        li.removeChild(li.querySelector("input"));
        editButton.innerText = "Edit";
      }
    };
  
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
      li.remove();
    };
  
    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);
  
    li.appendChild(span);
    li.appendChild(buttonsDiv);
  
    document.getElementById("taskList").appendChild(li);
  
    taskInput.value = "";
  }
  