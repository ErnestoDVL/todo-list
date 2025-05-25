import Task from './Task.js';
import DomHandler from './DomHandler.js';

class TaskElement {
    constructor(task) {
        console.log(typeof task, typeof Task)
        if (task instanceof Task) {
            this.taskEl = this.#composer(task);
        } else {
            throw new Error(`${task} must be an instance of Task`);
        }
    }

    // private functions
    #composer(task) {
        const wrapper = DomHandler.createElement({
            type: 'div',
            classes: 'task'
        });

        wrapper.appendChild(this.#composeActions());
        wrapper.appendChild(this.#composeAttributes(task));
        wrapper.appendChild(this.#composeText(task));
        return wrapper;
    }

    #composeAttributes({status, priority}) {
        const attributesWrapper = DomHandler.wrapperCreate(
            {
                type: 'div',
                classes: 'attributes-wrapper'
            },
            [
                {
                    type: 'p',
                    classes: 'task-status',
                    text: status
                },
                {
                    type: 'p',
                    classes: 'task-priority',
                    text: priority
                }
            ]
        );
        return attributesWrapper;
    }

    #composeText({title, dueDate}) {
        const textWrapper = DomHandler.wrapperCreate(
            {
                type: 'div',
                classes: 'text-wrapper'
            },
            [
                {
                    type: 'div',
                    classes: 'middleline'
                },
                {
                    type: 'p',
                    classes: 'task-title',
                    text: title
                },
                {
                    type: 'p',
                    classes: 'task-duedate',
                    text: dueDate
                }
            ]
        );
        return textWrapper;
    }

    #composeActions() {
        const actionsWrapper = DomHandler.wrapperCreate(
            {
                type: 'div',
                classes: 'actions-wrapper'
            },
            [
                {
                    type: 'button',
                    classes: 'task-edit'
                },
                {
                    type: 'button',
                    classes: 'task-remove'
                }
            ]
        );
        return actionsWrapper;
    }
}

export default TaskElement;