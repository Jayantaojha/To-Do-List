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
    div.innerHTML = `<i class="fas fa-check-circle" id="status-icon" style="cursor: pointer;"></i>
    <p>${inputValue}</p><i class="fa-solid fa-trash" style="color: red; cursor: pointer; margin-left: auto; margin-right: 5px; opacity: 0.3;"></i>`;

    taskList.appendChild(div);
    data.value = '';

    const deleteIcon = div.querySelector('.fa-trash');
    deleteIcon.addEventListener('mouseover', function () {
        // Code to execute when the mouse enters (hovers over) the delete icon
        deleteIcon.style.opacity = "1";
    });
    
    deleteIcon.addEventListener('mouseout', function () {
        // Code to execute when the mouse leaves the delete icon
        deleteIcon.style.opacity = "0.3"; // You can set it back to the original opacity or any other value
    });

    deleteIcon.addEventListener('click', function () {
        deleteTask(div);
    });


    const statusIcon = document.querySelector('#status-icon');
    statusIcon.addEventListener('click', () => {
        const currentColor = statusIcon.style.color;
        statusIcon.style.color = currentColor === 'green' ? '' : 'green';
    });
}

function deleteTask(taskElement) {
    // Remove the task element from the task list
    taskElement.remove();
}

if (screen.width < 700) {
    swipeItem();
}

function swipeItem(){
    const task = document.querySelector('.task');
    console.log(task);
}