import TaskData from './TaskData.js';
import DomHandler from './DomHandler.js';

class TaskElement {
    #title = null;
    #status = null;
    #priority = null;
    #dueDate = null;W

    constructor(task){
        if(!task instanceof TaskData){
            throw new Error('Argument passed must be an instance of Task class')
        }
        
        this.title = task.title
        this.status = task.status
        this.priority = task.priority;
        this.dueDate = task.dueDate;
    }
    
    set title(title){

        this.#title = DomHandler.createElement({
            type: 'p',
            text: title,
            classes: 'task-title'
        })
    }

    get title(){
        return this.#title;
    }

    set status(status){
        this.#status = DomHandler.createElement({
            type: 'p',
            text: status,
            classes: 'task-status'
        })
    }

    get status(){
        return this.#status;
    }

    set priority(priority){
        this.#priority = DomHandler.createElement({
            type: 'p',
            text: `${priority.charAt(0).toUpperCase()}${priority.slice(1)}`,
            classes: `task-priority priority-${priority}`
        })
    }

    get priority(){
        return this.#priority;
    }

    set dueDate(dueDate){
        this.#dueDate = DomHandler.createElement({
            type: 'p',
            text: `DUE: ${dueDate}`,
            classes: 'task-duedate'
        })
    }

    get dueDate(){
        return this.#dueDate;
    }
    
}

export default TaskElement;