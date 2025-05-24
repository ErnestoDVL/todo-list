import DomHandler from "../../Classes/DomHandler";
let uiActive = false;

function displayTaskaddUI(container){

    DomHandler.parseInputType('lol input[hi]')

    // const taskAddWrapper = DomHandler.createElement('div', 'wrapper-taskadd')

    // const titleWrapper = DomHandler.wrapperCreate(
    //     {
    //         parent: ['div', 'wrapper-input'] ,

    //         children: [
    //             ['p', 'input-header', 'Task Title'],
    //             ['input[text]', 'input-title', 'Task Priority']
    //         ]
    //     }
    // )
    
    // const priorities = DomHandler.wrapperCreate(
    //     {
    //         parent: ['div', 'wrapper-priorities'],

    //         children: [
    //             ['button', 'priority-high priority', 'Task Priority'],
    //             ['button', 'priority-medium priority', 'Task Priority'],
    //             ['button', 'priority-low priority', 'Task Priority'],
    //         ]
    //     }
    // )

    // const priorityWrapper = DomHandler.wrapperCreate(
    //     {
    //         parent: ['div', 'wrapper-input'],

    //         children: [
    //             ['p', 'input-header', 'Task Priority'],
    //             priorities,
    //         ]
    //     }

    // )
    

    // taskAddWrapper.append(titleWrapper, priorityWrapper);
    // container.append(taskAddWrapper)
}


export default displayTaskaddUI;