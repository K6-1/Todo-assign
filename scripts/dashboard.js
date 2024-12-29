const todoList = document.getElementById('todo-list');
const addTodoBtn = document.getElementById('add-todo-btn');
const logoutBtn = document.getElementById('logout');
const user = JSON.parse(localStorage.getItem('user'));

// Redirect to login if not logged in
if (!user) {
  window.location.href = 'index.html';
}

// Fetch todos
function fetchTodos() {
  fetch('https://example-backend.glitch.me/todos')
    .then(response => response.json())
    .then(todos => {
      todoList.innerHTML = '';
      todos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
          ${todo.title}
          <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        todoList.appendChild(todoItem);
      });
    });
}

// Add a new todo
addTodoBtn.addEventListener('click', () => {
  const todoInput = document.getElementById('todo-input').value;

  fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: todoInput, userId: user.id }),
  }).then(() => {
    document.getElementById('todo-input').value = '';
    fetchTodos();
  });
});

// Delete a todo
function deleteTodo(id) {
  fetch('https:example-backend.glitch.me/todos/${id}', {
    method: 'DELETE',
  }).then(() => fetchTodos());
}

// Logout function
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('user');
  window.location.href = 'index.html';
});

fetchTodos();