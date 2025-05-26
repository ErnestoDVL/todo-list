import TaskData from './TaskData.js';
import DomHandler from './DomHandler.js';

class TaskElement {
    #titleElement = null;
    #statusElement = null;
    #priorityElement = null;
    #dueDateElement = null;

    constructor(task){
        if(!task instanceof TaskData){
            throw new Error('Argument passed must be an instance of Task class')
        }
        
        this.titleElement = task.title
        this.statusElement = task.status
        this.priorityElement = task.priority;
        this.dueDateElement = task.dueDate;
    }
    
    set titleElement(title){

        this.#titleElement = DomHandler.createElement({
            type: 'p',
            text: title,
            classes: 'task-title'
        })
    }

    get titleElement(){
        return this.#titleElement;
    }

    set statusElement(status){
        this.#statusElement = DomHandler.createElement({
            type: 'p',
            text: status,
            classes: 'task-status'
        })
    }

    get statusElement(){
        return this.#statusElement;
    }

    set priorityElement(priority){
        this.#priorityElement = DomHandler.createElement({
            type: 'p',
            text: priority,
            classes: 'task-priority'
        })
    }

    get priorityElement(){
        return this.#priorityElement;
    }

    set dueDateElement(dueDate){
        this.#dueDateElement = DomHandler.createElement({
            type: 'p',
            text: dueDate,
            classes: 'task-duedate'
        })
    }

    get dueDateElement(){
        return this.#dueDateElement;
    }
    
}

export default TaskElement;