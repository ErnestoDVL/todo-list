import TaskData from "../Classes/TaskData";
import TaskElement from "../Classes/TaskElement";
import createTaskElement from "../UI/createTaskElement/createTaskElement";
const currentTasksArr = []

function pushDataToArray(arr, data) {
  arr.push(data);
  console.log(currentTasksArr);
}

function formDataHandler(formData) {
  let date = formData.dueDate.split('-');
  let parsedDate = new Date(Number(date[0]), Number(date[1] - 1), Number(date[2]))


  const newTaskData = new TaskData(formData.title, 'Not Started', formData.priority, parsedDate);
  const newTaskElement = new TaskElement(newTaskData);

  const newTask = {
    taskData: newTaskData,
    taskElement: newTaskElement
  }


  pushDataToArray(currentTasksArr, newTask);
  createTaskElement(newTask.taskElement);
}


function updateTask(task) {
  if (!task.taskData instanceof TaskData)
    throw new Error('First argument passed is not of type Class Task')

  if (!task.taskElement instanceof TaskElement)
    throw new Error('Second argument passed is not of type Class TaskElement')


}

export { pushDataToArray, formDataHandler, updateTask }
