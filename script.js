// accessing elements from index.html file
const h1 = document.querySelector('h1');
const body = document.querySelector('body');
const button = document.querySelector('#new-task button');
const data = document.querySelector('#new-task input');
let taskList = document.querySelector('#task-list');


// list of colors for app theme
const colors = [
    {
        gradient: 'linear-gradient(to right, #333333, #000000)', // black
        h1Color: '#FFFFFF',
        buttonColor: '#FFFFFF',
        buttonBgColor: '#007BFF',
    },
    {
        gradient: 'linear-gradient(to right, #0099FF, #66CCFF)', // blue
        h1Color: '#083D77',
        buttonColor: '#ffffff',
        buttonBgColor: '#335C81',
    },
    {
        gradient: 'linear-gradient(to right, #8CC84B, #5A8F28)', // light-green
        h1Color: '#2A3C24',
        buttonColor: '#ffffff',
        // buttonBgColor: '#335C81',
        buttonBgColor: '#243010',
    },
    {
        gradient: 'linear-gradient(to right, #FF8C5A, #FF6060)', // pink
        h1Color: '#FFFFFF',
        buttonColor: '#fff',
        buttonBgColor: '#A64253',

    },
    {
        gradient: 'linear-gradient(to right, #FFD89B, #19547B)', // grey-blue
        h1Color: '#FFFFFF',
        buttonColor: '#FFFFFF',
        buttonBgColor: '#292F36',

    },
    {
        gradient: 'linear-gradient(to right, #FF6B6B, #FF8E53)', // orange-pink
        h1Color: '#FFFFFF',
        buttonColor: '#FFFFFF',
        buttonBgColor: '#65334D',
    },
    {
        gradient: 'linear-gradient(to right, #0093E9, #80D0C7)', // skyblue
        h1Color: '#083D77',
        buttonColor: '#fff',
        buttonBgColor: '#083D77',
    }
];


// data simply represent new task
// event listener for enter click
data.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const inputValue = data.value;
        if (inputValue !== null && inputValue !== "") {
            addTask(inputValue);
        }
    }
})

// event listener for add button
button.addEventListener('click', () => {
    const inputValue = data.value;
    if (inputValue !== null && inputValue !== "") {
        addTask(inputValue);
    }
})


function addTask(inputValue) {
    const div = document.createElement('div'); // for new task
    const deleteIcon = div.querySelector('.fa-trash'); // for delete icon
    const statusIcon = div.querySelector('.status-icon'); // to check done/undone a task
    const taskString = div.querySelector('.task-string');


    // styling for the new task
    div.className = "task";
    div.innerHTML = `<i class="fas fa-check-circle status-icon" style="cursor: pointer;"></i>
    <p class="task-string">${inputValue}</p>
    <i class="fa-solid fa-trash" style="color: red; cursor: pointer; margin-left: auto; margin-right: 5px; opacity: 0.3;"></i>`;


    // add new task in the taskList on index.html
    taskList.appendChild(div);
    data.value = '';


    // event listener on delete icon for hover and click
    deleteIcon.addEventListener('mouseover', function () {
        deleteIcon.style.opacity = "1";
    });

    deleteIcon.addEventListener('mouseout', function () {
        deleteIcon.style.opacity = "0.3";
    });

    deleteIcon.addEventListener('click', function () {
        deleteTask(div);
    });


    // to check done or undone a task
    statusIcon.addEventListener('click', () => {
        changeStatus(statusIcon, taskString, inputValue);
    });

}

// to change the status of a task (complete/ incomplete)
function changeStatus(statusIcon, taskString, inputValue) {
    const currentColor = statusIcon.style.color;

    if (currentColor === "" || currentColor === "#333333" || currentColor === "rgb(51, 51, 51)") {
        statusIcon.style.color = "green";
        taskString.innerHTML = `<del><i style="color: grey;"> ${inputValue} </i></del>`;
    } 
    else if (currentColor === "green" || currentColor === "rgb(0, 128, 0)") {
        statusIcon.style.color = "#333333";
        taskString.innerHTML = `${inputValue}`;
    }
}


// Remove the task element from the task list
function deleteTask(taskElement) {
    taskElement.remove();
}


// for background color for the body

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

    if (colorIndex !== colors.length) {
        document.body.style.background = colors[colorIndex].gradient;
        h1.style.color = colors[colorIndex].h1Color;
        button.style.color = colors[colorIndex].buttonColor;
        button.style.backgroundColor = colors[colorIndex].buttonBgColor;

        colorIndex++;
    }
    else {
        document.body.style.background = 'linear-gradient(to right, #f4f4f4, #e0e0e0)';
        h1.style.color = '#007BFF';
        button.style.color = '#ffffff';
        button.style.backgroundColor = '#007BFF';

        colorIndex = 0;
    }

}, 300);


// double click on the screen (change theme)
document.addEventListener('dblclick', handleDoubleClick);
