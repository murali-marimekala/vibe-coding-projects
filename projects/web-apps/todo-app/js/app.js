/**
 * Simple Todo App - Built with GitHub Copilot
 * Main application logic
 */

// State
let todos = [];
let currentFilter = 'all';

// DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompleted');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
    renderTodos();
    updateCount();
    setupEventListeners();
});

/**
 * Setup event listeners
 * Copilot prompt: "Add event listeners for todo app interactions"
 */
function setupEventListeners() {
    // Add todo on button click
    addBtn.addEventListener('click', addTodo);
    
    // Add todo on Enter key
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            renderTodos();
        });
    });
    
    // Clear completed button
    clearCompletedBtn.addEventListener('click', clearCompleted);
}

/**
 * Add a new todo
 * Copilot prompt: "Create function to add todo with validation"
 */
function addTodo() {
    const text = todoInput.value.trim();
    
    if (!text) {
        todoInput.focus();
        return;
    }
    
    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    todos.push(todo);
    todoInput.value = '';
    todoInput.focus();
    
    saveTodos();
    renderTodos();
    updateCount();
}

/**
 * Toggle todo completion status
 * Copilot prompt: "Create function to toggle todo completed state"
 */
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
        updateCount();
    }
}

/**
 * Delete a todo
 * Copilot prompt: "Create function to delete todo by id"
 */
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
    updateCount();
}

/**
 * Clear all completed todos
 * Copilot prompt: "Create function to remove all completed todos"
 */
function clearCompleted() {
    todos = todos.filter(t => !t.completed);
    saveTodos();
    renderTodos();
    updateCount();
}

/**
 * Get filtered todos based on current filter
 * Copilot prompt: "Create function to filter todos by status (all, active, completed)"
 */
function getFilteredTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
}

/**
 * Render todos to the DOM
 * Copilot prompt: "Create function to render todo list with checkboxes and delete buttons"
 */
function renderTodos() {
    const filteredTodos = getFilteredTodos();
    
    if (filteredTodos.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state">
                <p>✨ No todos to show</p>
                <p style="font-size: 0.9rem;">Add a task to get started!</p>
            </div>
        `;
        return;
    }
    
    todoList.innerHTML = filteredTodos.map(todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
            <input 
                type="checkbox" 
                class="todo-checkbox" 
                ${todo.completed ? 'checked' : ''}
                onchange="toggleTodo(${todo.id})"
                aria-label="Mark todo as ${todo.completed ? 'incomplete' : 'complete'}"
            >
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <button 
                class="delete-btn" 
                onclick="deleteTodo(${todo.id})"
                aria-label="Delete todo"
            >×</button>
        </li>
    `).join('');
}

/**
 * Update the todo count
 * Copilot prompt: "Create function to update active todo count display"
 */
function updateCount() {
    const activeCount = todos.filter(t => !t.completed).length;
    todoCount.textContent = `${activeCount} ${activeCount === 1 ? 'item' : 'items'} left`;
    
    // Update clear completed button state
    const completedCount = todos.filter(t => t.completed).length;
    clearCompletedBtn.disabled = completedCount === 0;
}

/**
 * Save todos to localStorage
 * Copilot prompt: "Create function to save todos array to localStorage with error handling"
 */
function saveTodos() {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
        console.error('Error saving todos:', error);
        // Could show user notification here
    }
}

/**
 * Load todos from localStorage
 * Copilot prompt: "Create function to load todos from localStorage with error handling"
 */
function loadTodos() {
    try {
        const stored = localStorage.getItem('todos');
        if (stored) {
            todos = JSON.parse(stored);
        }
    } catch (error) {
        console.error('Error loading todos:', error);
        todos = [];
    }
}

/**
 * Escape HTML to prevent XSS
 * Copilot prompt: "Create function to escape HTML special characters to prevent XSS"
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addTodo,
        toggleTodo,
        deleteTodo,
        clearCompleted,
        getFilteredTodos
    };
}
