// Main Styles
import './style/default.css'
import './style/sidebar.css'
import './style/mainContent.css'

//Task Styles
import './modules/UI/taskAdd/taskAdd.css'
import './modules/UI/createTaskElement/task.css'
// Classes
import TaskData from'./modules/Classes/TaskData.js';
import TaskElement from './modules/Classes/TaskElement.js';
import DomHandler from './modules/Classes/DomHandler.js'

//UI Handlers
import composeTaskAddUi from './modules/UI/taskAdd/newTask.js';
const taskAdder = document.querySelector('#task-add');

    
const appContainer = document.querySelector('.todo-container');


taskAdder.addEventListener('click', () => {
    let taskAddUi = composeTaskAddUi();
    const backgroundBlur = DomHandler.createElement(
    {
        type: 'div',
        classes: 'background-blur'
    })
    
    document.body.append(taskAddUi);
    document.body.append(backgroundBlur)

})