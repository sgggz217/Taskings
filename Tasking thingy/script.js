const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const addBtn = document.getElementById('add-task-btn');
const taskContainer = document.getElementById('task-container');

addBtn.addEventListener('click', function() {
  const text = taskInput.value.trim();
  if (text === '') {
    alert('Write something, dawg.');
    return;
  }

  const priority = prioritySelect.value;
  const taskDiv = document.createElement('div');
  taskDiv.style.display = 'flex';
  taskDiv.style.alignItems = 'center';
  taskDiv.style.gap = '0.5rem';
  taskDiv.style.padding = '0.5rem';
  taskDiv.style.borderBottom = '1px solid #333';

  const label = document.createElement('span');
  label.textContent = text;
  label.style.flex = '1';

  const priorityBadge = document.createElement('span');
  priorityBadge.textContent = priority;
  priorityBadge.style.padding = '0.2rem 0.6rem';
  priorityBadge.style.borderRadius = '0px';
  priorityBadge.style.fontSize = '0.7rem';
  priorityBadge.style.fontWeight = 'bold';

  if (priority === 'high') {
  priorityBadge.style.background = '#dc2626';
  priorityBadge.style.color = '#ffffff';
  } else if (priority === 'medium') {
  priorityBadge.style.background = '#ea580c';
  priorityBadge.style.color = '#000';
  } else {
  priorityBadge.style.background = '#facc15';
  priorityBadge.style.color = '#000';
  }

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'x';
  deleteBtn.style.background = 'transparent';
  deleteBtn.style.border = 'none';
  deleteBtn.style.color = '#888';
  deleteBtn.style.cursor = 'pointer';

  deleteBtn.addEventListener('click', function() {
    taskDiv.remove();
  });

  taskDiv.appendChild(priorityBadge);
  taskDiv.appendChild(label);
  taskDiv.appendChild(deleteBtn);
  taskContainer.appendChild(taskDiv);

  taskInput.value = '';
  taskInput.focus();
});


