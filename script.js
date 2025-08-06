const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const status = document.getElementById('status');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '✔️';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateCounter();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    updateCounter();
  });

  actions.append(completeBtn, deleteBtn);
  li.append(span, actions);
  taskList.appendChild(li);
  taskInput.value = '';

  updateCounter();
}

function updateCounter() {
  const total = document.querySelectorAll('#taskList li').length;
  const completed = document.querySelectorAll('#taskList li.completed').length;

  let message = 'Let’s get started!';
  if (completed > 0 && completed < total) message = 'Keep it up! 💪';
  else if (completed === total && total !== 0) message = 'All done! 🎉';
  else if (completed === 0 && total > 0) message = 'Time to get moving! ⏳';

  status.textContent = `✅ To-Do Done: ${completed}/${total} — ${message}`;
}
