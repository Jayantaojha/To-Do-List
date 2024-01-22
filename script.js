const body = document.querySelector('body');
const button = document.querySelector('#new-task button');
const data = document.querySelector('#new-task input');
let taskList = document.querySelector('#task-list');

const colors = [
    {
        gradient: 'linear-gradient(to right, #333333, #000000)', // black
        text: '#FFFFFF', // White text color
        button: '#FFFFFF' // White button color
    },
    {
        gradient: 'linear-gradient(to right, #0099FF, #66CCFF)', // blue
        text: '#007BFF', // Default text color
        button: '#007BFF' // Default button color
    },
    {
        gradient: 'linear-gradient(to right, #8CC84B, #5A8F28)', // light-green
        text: '#007BFF', // Default text color
        button: '#007BFF' // Default button color
    },
    {
        gradient: 'linear-gradient(to right, #FF8C5A, #FF6060)', // pink
        text: '#FFFFFF', // White text color
        button: '#FFFFFF' // White button color
    },
    {
        gradient: 'linear-gradient(to right, #FFD89B, #19547B)', // grey-blue
        text: '#FFFFFF', // White text color
        button: '#FFFFFF' // White button color
    },
    {
        gradient: 'linear-gradient(to right, #FF6B6B, #FF8E53)', // orange-pink
        text: '#FFFFFF', // White text color
        button: '#FFFFFF' // White button color
    },
    {
        gradient: 'linear-gradient(to right, #0093E9, #80D0C7)', // skyblue
        text: '#007BFF', // Default text color
        button: '#007BFF' // Default button color
    }
];

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

// ----------------------------   for background color for the body --------------------------------------

// Debounce function to ensure the event is processed only once within a specific time frame
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    };
}

colorIndex = 0;

const handleDoubleClick = debounce(() => {
    
    if (colorIndex !== 7) {
        document.body.style.background = colors[colorIndex].gradient;
        colorIndex++;
    }
    else {
        document.body.style.background = 'linear-gradient(to right, #f4f4f4, #e0e0e0)';
        colorIndex = 0;
    }

}, 300);

document.addEventListener('dblclick', handleDoubleClick);
