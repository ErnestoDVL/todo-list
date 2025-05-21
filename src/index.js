// Main Styles
import './style/default.css'
import './style/sidebar.css'
import './style/mainContent.css'

//Task Styles
import './style/task.css'
import './modules/UI/taskAdd/taskAdd.css'
// Classes
import Task from'./modules/Classes/Task.js';
import TaskElement from './modules/Classes/TaskElement.js';
import displayAddTaskUI from './modules/UI/taskAdd/newTask.js';

const taskAdder = document.querySelector('#task-add');
const appContainer = document.querySelector('.todo-container');
const currentTasks = []
console.log(appContainer)


console.log(taskAdder)
taskAdder.addEventListener('click', () => {
    displayAddTaskUI(appContainer)

})