var taskInput = document.querySelector("#task-input");
var addBtn = document.querySelector("#add-btn");
var taskList = document.querySelector("#task-list");


addBtn.addEventListener("click", function () {
    const textArea = taskInput.value.trim();
    if (textArea !== "") {
        addTask(textArea);
        textArea = "";
    }
});
function addTask(text) {
    const li = document.createElement("li");
    li.className = 'task';
    li.innerHTML = `<span>${text}</span>
    <button class = "delete-btn">🗑️</button>
    `;
    li.addEventListener('click', (e) => {
        if (!e.target.classList.contains('delete-btn')) {
            li.classList.toggle('completed');
        }
    });
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    })
    taskList.appendChild(li);
}
