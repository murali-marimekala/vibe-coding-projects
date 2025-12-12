# Simple Todo App

A minimal todo list application built with vanilla JavaScript and GitHub Copilot assistance.

## 🚀 Features

- Add new tasks
- Mark tasks as complete
- Delete tasks
- Filter tasks (All, Active, Completed)
- Persist data in localStorage
- Clean, responsive UI

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- localStorage for data persistence

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

## 🏃 Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser
3. Start managing your tasks!

### Using a Local Server (Optional)

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open http://localhost:8000 in your browser.

## 📖 Usage

1. **Add a Task**: Type in the input field and press Enter or click the "Add" button
2. **Complete a Task**: Click the checkbox next to a task to mark it as complete
3. **Delete a Task**: Click the "×" button to remove a task
4. **Filter Tasks**: Use the filter buttons at the bottom to view All, Active, or Completed tasks
5. **Clear Completed**: Click "Clear Completed" to remove all completed tasks

## 🤖 GitHub Copilot Notes

This project was developed with GitHub Copilot assistance. Here are some effective prompts used:

### Example Prompts

```javascript
// Create a function to add a new todo item with validation
// [Copilot suggested the addTodo function]

// Create a function to filter todos based on status (all, active, completed)
// [Copilot suggested the filtering logic]

// Implement localStorage persistence for todos
// [Copilot suggested save and load functions]
```

### What Worked Well

- **Describing functionality in comments** before writing code helped Copilot understand context
- **Breaking down features** into small functions made suggestions more accurate
- **Specifying edge cases** in comments improved error handling

### Lessons Learned

- Always validate user input, even with Copilot suggestions
- Review localStorage operations for proper error handling
- Test accessibility features manually

## 📁 Project Structure

```
todo-app/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Styles for the app
├── js/
│   └── app.js         # Application logic
├── COPILOT_NOTES.md   # Detailed Copilot usage notes
└── README.md          # This file
```

## 🎨 Features Breakdown

### Core Functionality
- ✅ Add tasks
- ✅ Toggle task completion
- ✅ Delete tasks
- ✅ Filter by status
- ✅ Clear completed tasks

### Data Persistence
- ✅ Save to localStorage
- ✅ Load on page refresh
- ✅ Handle localStorage errors

### UI/UX
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Clear visual feedback
- ✅ Keyboard shortcuts (Enter to add)

## 🚀 Future Enhancements

Potential features to add:
- Edit existing tasks
- Drag and drop to reorder
- Task categories/tags
- Due dates
- Task priority levels
- Dark mode toggle
- Export/import tasks

## 🤝 Contributing

Feel free to fork this project and add your own enhancements! Some ideas:
- Add the future enhancements listed above
- Improve accessibility
- Add unit tests
- Enhance the UI design

## 📝 License

This project is open source and available for learning purposes.

## 👤 Author

Developed as an example project for the vibe-coding-projects repository.

---

**Built with GitHub Copilot** 🤖✨
