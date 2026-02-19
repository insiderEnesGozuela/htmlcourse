var todos = JSON.parse(localStorage.getItem("todos")) || [];

function render() {
  var list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach(function(todo, index) {
    var li = document.createElement("li");
    li.className = "list-group-item";

    var span = document.createElement("span");
    span.textContent = todo.text;
    if (todo.done) span.className = "done";
    span.style.cursor = "pointer";
    span.onclick = function() { toggleDone(index); };

    var div = document.createElement("div");

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sil";
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.onclick = function() { deleteTodo(index); };

    div.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(div);
    list.appendChild(li);
  });
}

function addTodo() {
  var input = document.getElementById("todo-input");
  var text = input.value.trim();

  if (!text) {
    showToast("Hata", "Bos gorev eklenemez!", "danger");
    return;
  }

  todos.push({ text: text, done: false });
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
  render();
  showToast("Basarili", "Gorev eklendi.", "success");
}

function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  render();
}

function toggleDone(index) {
  todos[index].done = !todos[index].done;
  localStorage.setItem("todos", JSON.stringify(todos));
  render();
}

function showToast(title, message, type) {
  var toastEl = document.getElementById("toast");
  document.getElementById("toast-title").textContent = title;
  document.getElementById("toast-body").textContent = message;
  toastEl.className = "toast text-bg-" + type;
  var toast = new bootstrap.Toast(toastEl);
  toast.show();
}

render();
