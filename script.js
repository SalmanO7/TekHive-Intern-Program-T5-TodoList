const input = document.querySelector("#input");
const todos = document.querySelector(".todos");

input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    addTodos(e.target.value);
    e.target.value = "";
  }
});

const addTodos = () => {
  const li = document.createElement("li");
  li.innerHTML = `    
    <span class="todo-text">${input.value}</span>
    <i class="fas fa-edit edit-btn"></i>
    <i class="fas fa-times delete-btn"></i>
    `;

  li.querySelector(".todo-text").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".edit-btn").addEventListener("click", () => {
    const todoText = li.querySelector(".todo-text");
    const newText = prompt("Edit your todo:", todoText.innerHTML);
    if (newText !== null && newText.trim() !== "") {
      todoText.innerHTML = newText.trim();
    }
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  todos.appendChild(li);
};
