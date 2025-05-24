import DomHandler from "../../Classes/DomHandler";

let uiActive = false;

function displayTaskaddUI(container) {
    
    const taskAddWrapper = DomHandler.createElement({
        type: 'div',
        classes: 'wrapper-taskadd'
    });
    
    const titleWrapper = DomHandler.wrapperCreate(
        {
            type: 'div',
            classes: 'wrapper-input'
        },
        [
            {
                type: 'p',
                classes: 'input-header',
                text: 'Task Title'
            },
            {
                type: 'input[text]',
                classes: 'input-title',
                text: 'Task Priority'
            }
        ]
    );
    
    const priorities = DomHandler.wrapperCreate(
        {
            type: 'div',
            classes: 'wrapper-priorities'
        },
        [
            {
                type: 'button',
                classes: 'priority-high priority',
                text: 'Task Priority'
            },
            {
                type: 'button',
                classes: 'priority-medium priority',
                text: 'Medium',
                event: {
                    type: 'click',
                    cb: () => {
                        console.log('medium coke porfavor')
                    }
                }
            },
            {
                type: 'button',
                classes: 'priority-low priority',
                text: 'Task Priority'
            }
        ]
    );
    
    const priorityWrapper = DomHandler.wrapperCreate(
        {
            type: 'div',
            classes: 'wrapper-input'
        },
        [
            {
                type: 'p',
                classes: 'input-header',
                text: 'Task Priority'
            },
            priorities
        ]
    );
    
    taskAddWrapper.append(titleWrapper, priorityWrapper);
    container.append(taskAddWrapper);
}

export default displayTaskaddUI;