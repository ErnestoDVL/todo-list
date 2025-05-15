import Task from './Classes/Task.js';

class TaskElement{

    constructor(task){
        if (task !== typeof Task){

            this.taskEl = this.#composer(title, desc, status, priority, dueDate);
        }
    }

    //private functions
    #composer(title, desc, status, priority, dueDate){
        return `${title}, ${desc}, ${status}, ${priority}, ${dueDate}`;
    }


}



const taskEl = new TaskElement('s');

console.log(taskEl)

export default TaskElement;