import Task from './Task.js';
import DomHandler from './DomHandler.js';

class TaskElement{

    constructor(task){
        console.log(typeof task, typeof Task)
        if (task instanceof Task){
            this.taskEl = this.#composer(task);
        }else{
            throw new Error(`${task} must be an instance of Task`);
        }

    }

    //private functions
    #composer(task){
        const wrapper = DomHandler.createElement('div', 'task');

        wrapper.appendChild(this.#composeActions());
        wrapper.appendChild(this.#composeAttributes(task));
        wrapper.appendChild(this.#composeText(task));

        return wrapper
    }

    #composeAttributes({status, priority}){
        const attributesWrapper = DomHandler.createElement('div', 'attributes-wrapper');
        const attributes = DomHandler.batchCreate([
            ['p', 'task-status', status],
            ['p', 'task-priority', priority]
        ]);



        attributesWrapper.append(...attributes);
        return attributesWrapper;
    }

    #composeText({title, dueDate}){
        const textWrapper = DomHandler.createElement('div', 'text-wrapper');
        const textElements = DomHandler.batchCreate([
            ['div', 'middleline'],
            ['p', 'task-title', title],
            ['p', 'task-duedate', dueDate]
        ]);

        textWrapper.append(...textElements);

        return textWrapper;
    }

    #composeActions(){
        const actionsWrapper = DomHandler.createElement('div', 'actions-wrapper');
        const actionElements = DomHandler.batchCreate([
            ['button', 'task-edit'],
            ['button', 'task-remove']
        ]);

        actionsWrapper.append(...actionElements);

        return actionsWrapper
    }



}


export default TaskElement;