let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function deleteCompleted() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        if (task.completed) {
            taskItem.classList.add('completed');
        }
        taskItem.innerHTML = `
            <input type="checkbox" onchange="toggleTask(${task.id})" ${task.completed ? 'checked' : ''}>
            <span>${task.text}</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}
