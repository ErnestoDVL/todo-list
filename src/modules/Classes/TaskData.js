import {format ,compareAsc} from 'date-fns'

class TaskData{
    #status = '';
    #priority = '';
    #dueDate = null;
    
    constructor(title, status, priority, dueDate){
        this.title = title
        this.status = status;
        this.priority = priority;
        this.dueDate = dueDate;
    }

    set status(status){
        const validStatuses = ['not started', 'in progress', 'complete'];

        if(validStatuses.includes(status.toLowerCase())){
            this.#status = status;
        }else{
           throw new Error(`${status} is not a valid status`);
        }
    }

    get status(){
        return this.#status;
    }

    set priority(priority){
        const validPriorities = ['high', 'medium', 'low'];

        if(validPriorities.includes(priority.toLowerCase())){
            this.#priority = priority
        }else{
          throw new Error(`${priority} is not a valid priority`);
        }

    }

    get priority(){
        return this.#priority;
    }

    set dueDate(dueDate){
        let formattedDate = format(dueDate, 'MM/dd/yyyy');
        const isOldDate = compareAsc(dueDate, new Date(Date.now())) !== 1 ? true : false;
        if(isOldDate){
            throw new Error(`Due date must be a future date. Passed Date: ${formattedDate}`)
        }
        this.#dueDate = formattedDate;
        
    }

    get dueDate(){
        return this.#dueDate;
    }
}


export default TaskData;