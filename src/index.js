// Styles
import './style/default.css'
import './style/sidebar.css'
import './style/mainContent.css'

// Classes
import Task from'./modules/Classes/Task.js';
import TaskElement from './modules/Classes/TaskElement.js';

const currentTasks = []


const newTask = new Task('Title','not started','low',new Date(2025, 4, 16)); 

const newTaskElement = new TaskElement(newTask);

console.log(newTaskElement)