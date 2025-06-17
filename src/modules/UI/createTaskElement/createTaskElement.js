import DomHandler from "../../Classes/DomHandler";
import TaskElement from "../../Classes/TaskElement";

const todoContainer = document.body.querySelector('.todo-container');

function createTaskElement(taskElement){
    if (!taskElement instanceof TaskElement)
        throw new Error('Passed argument must be instance of Class TaskElement');
    
    const taskContainer = DomHandler.createElement({
        type: 'div',
        classes: 'task-container'
    })

    const taskActions = DomHandler.createWrapper({
        type: 'div',
        classes: 'actions-wrapper'
    },[
        {
            type: 'button',
            text: 'Remove',
            classes: 'task-action',
            event: {
                type: 'click',
                cb: function(){

                }
            },
            attributes: [
                {key:'type', value: 'button'}
            ]
        },
        {
            type: 'button',
            text: 'Edit',
            classes: 'task-action',
            event: {
                type: 'click',
                cb: function(){

                }
            },
            attributes: [
                {key:'type', value:'button'}
            ]
        }
    ])

    const titleDateWrapper = DomHandler.createWrapper({
        type: 'div',
        classes: 'titledate-wrapper'
    }, [
        taskElement.title,
        {type: 'div', classes: 'divider'},
        taskElement.dueDate
    ])

    const taskAttributes = DomHandler.createWrapper({
        type: 'div',
        classes: 'attributes-wrapper'
    },[
        taskElement.priority,
        taskElement.status
    ])

    console.log(taskElement)

    taskContainer.append(taskActions,titleDateWrapper, taskAttributes);
    todoContainer.append(taskContainer);
}

export default createTaskElement;