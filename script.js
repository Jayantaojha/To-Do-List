const body = document.querySelector('body');
const button = document.querySelector('#new-task button');
const data = document.querySelector('#new-task input');
let taskList = document.querySelector('#task-list');


data.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const inputValue = data.value;
        if (inputValue !== null && inputValue !== "") {
            addTask(inputValue);
        }
    }
})

button.addEventListener('click', () => {
    const inputValue = data.value;
    if (inputValue !== null && inputValue !== "") {
        addTask(inputValue);
    }
})


function addTask(inputValue) {
    const div = document.createElement('div');
    div.className = "task";
    div.innerHTML = `<i class="fas fa-check-circle" id="status-icon"></i>
    <p>${inputValue}</p>`

    taskList.appendChild(div);
}
