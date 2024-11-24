const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task', 'personal'); 

  const taskName = document.createElement('span');
  taskName.textContent = taskText;

  const taskTime = document.createElement('span');
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  taskTime.textContent = currentTime;

  taskDiv.appendChild(taskName);
  taskDiv.appendChild(taskTime);

  taskList.appendChild(taskDiv);

  taskInput.value = '';
}

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
