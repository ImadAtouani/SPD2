const addForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const searchInput = document.querySelector('.search input');

// Fonction pour ajouter une nouvelle tâche
const addTodo = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    todoList.innerHTML += html;
};

// Gestion de l'ajout de tâche
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        addTodo(todo);
        addForm.reset();
    }
});

// Gestion de la suppression
todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

 // Filtrer les tâches
 function updateSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const todoItems = document.querySelectorAll(".list-group.todos li");

    todoItems.forEach(item => {
        const todoText = item.querySelector('span').textContent.toLowerCase();
        if (todoText.startsWith(searchTerm)) {
            item.style.visibility = "visible";
            item.style.height = "auto";
            item.style.position = "relative";
        } else {
            item.style.visibility = "hidden";
            item.style.height = "0";
            item.style.position = "absolute";
        }
    });
};
searchInput.addEventListener("input",updateSearch);