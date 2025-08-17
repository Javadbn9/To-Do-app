const taskInput = document.getElementById('task_input');
const btn = document.getElementById('add_task');
const taskList = document.getElementById('task_list');

function addItem() {
    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerText = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}

btn.addEventListener('click', addItem);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItem();
    }
});