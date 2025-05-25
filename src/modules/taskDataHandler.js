import Task from "./Classes/Task";
import TaskElement from "./Classes/TaskElement";


function pushDataToArray(){

}

function taskDataHandler(taskData){
    const newTask = new Task(taskData.title, 'Not Started', taskData.priority, taskData.dueDate);
    const newTaskElement = new TaskElement(newTask);
    
    console.log(newTask)
    console.log(newTaskElement)
}

export default taskDataHandler;