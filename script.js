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
    div.innerHTML = `<i class="fas fa-check-circle status-icon" style="cursor: pointer;"></i>
    <p class="task-string">${inputValue}</p>
    <i class="fa-solid fa-trash" style="color: red; cursor: pointer; margin-left: auto; margin-right: 5px; opacity: 0.3;"></i>`;

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


    const statusIcon = div.querySelector('.status-icon');
    const taskString = div.querySelector('.task-string');

    statusIcon.addEventListener('click', () => {
        changeStatus(statusIcon, taskString, inputValue);
    });
}

function changeStatus(statusIcon, taskString, inputValue) {
    const currentColor = statusIcon.style.color;

    if (currentColor === "" || currentColor === "#333333" || currentColor === "rgb(51, 51, 51)") {
        statusIcon.style.color = "green";
        taskString.innerHTML = `<del><i style="color: grey;"> ${inputValue} </i></del>`;
    } else if (currentColor === "green" || currentColor === "rgb(0, 128, 0)") {
        statusIcon.style.color = "#333333";
        taskString.innerHTML = `${inputValue}`;
    }
}


function deleteTask(taskElement) {
    // Remove the task element from the task list
    taskElement.remove();
}
