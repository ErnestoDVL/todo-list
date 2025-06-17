import DomHandler from "../../Classes/DomHandler";
import { formDataHandler } from "../../Utility/taskUtilities.js";
import { format, compareAsc } from 'date-fns'



let optionSelected = document.createElement('p');

function composeTaskAddUi() {
  const exitButton = DomHandler.createElement(
    {
      type: 'div',
      classes: 'taskadd-exit',
      text: 'X',
      event: {
        type: 'click',
        cb: function () {
          this.parentElement.remove()
          document.querySelector('.background-blur').remove()
        }
      }
    }
  )

  const hiddenInput = DomHandler.createElement({
    type: 'input',
    classes: 'hidden-input',
    attributes: [
      { key: 'required', value: '' },
      { key: 'type', value: 'text' },
      { key: 'name', value: 'taskPriority' }
    ]
  })


  const formWrapper = DomHandler.createElement(
    {
      type: 'form',
      classes: 'taskadd-form',
      event: {
        type: 'submit',
        cb: function (event) {
          event.preventDefault()

          const formData = new FormData(this);

          const task = {
            title: formData.get('taskTitle'),
            priority: formData.get('taskPriority'),
            dueDate: formData.get('taskDueDate')
          };

          formDataHandler(task);

          exitButton.click();
        }
      }
    }
  )

  const taskAddWrapper = DomHandler.createElement({
    type: 'div',
    classes: 'wrapper-taskadd'
  });

  const titleWrapper = DomHandler.createWrapper(
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
        type: 'input',
        classes: 'input-title',
        text: 'Task Priority',
        attributes: [
          { key: 'required', value: '' },
          { key: 'type', value: 'text' },
          { key: 'name', value: 'taskTitle' }

        ]
      }
    ]
  );

  const priorities = DomHandler.createWrapper(
    {
      type: 'div',
      classes: 'wrapper-priorities'
    },
    [
      {
        type: 'button',
        classes: 'priority-high task-priority',
        text: 'High',
        event: {
          type: 'click',
          cb: function () {
            optionSelected.style.outline = 'none';
            this.style.outline = 'white solid 1px';
            optionSelected = this

            hiddenInput.value = 'high'
          }
        },
        attributes: [
          { key: 'type', value: 'button' }
        ]
      },
      {
        type: 'button',
        classes: 'priority-medium task-priority',
        text: 'Medium',
        event: {
          type: 'click',
          cb: function () {
            optionSelected.style.outline = 'none';
            this.style.outline = 'white solid 1px';
            optionSelected = this

            hiddenInput.value = 'medium'
          }
        },
        attributes: [
          { key: 'type', value: 'button' }
        ]
      },
      {
        type: 'button',
        classes: 'priority-low task-priority',
        text: 'Low',
        event: {
          type: 'click',
          cb: function () {
            optionSelected.style.outline = 'none';
            this.style.outline = 'white solid 1px';
            optionSelected = this;

            hiddenInput.value = 'low';
          }
        },
        attributes: [
          { key: 'type', value: 'button' }
        ]
      },
      hiddenInput
    ]
  );

  const priorityWrapper = DomHandler.createWrapper(
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

  const dueDateWrapper = DomHandler.createWrapper(
    {
      type: 'div',
      classes: 'wrapper-input'
    },
    [
      {
        type: 'p',
        classes: 'input-header',
        text: 'Due Date'
      },
      {
        type: 'input',
        classes: 'input-date',
        attributes: [
          { key: 'type', value: 'date' },
          { key: 'required', value: '' },
          { key: 'min', value: `${format(new Date(Date.now() + 24 * 60 * 60 * 1000), 'yyyy-MM-dd')}` },
          { key: 'max', value: `${format(new Date(Date.now() + 50 * 365.25 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd')}` },
          { key: 'name', value: 'taskDueDate' }

        ]
      }
    ]
  )

  const sumbitButton = DomHandler.createElement(
    {
      type: 'button',
      classes: 'taskadd-submit',
      text: 'CONFIRM',
      event: {
        type: 'click',
        cb: function () {
          if (hiddenInput.value === '')
            hiddenInput.setCustomValidity('Select a priority')
          hiddenInput.reportValidity()
          hiddenInput.setCustomValidity('')
        }
      },
      attributes: [
        { key: 'type', value: 'submit' }
      ]
    }
  )
  formWrapper.append(titleWrapper, priorityWrapper, dueDateWrapper, sumbitButton)
  taskAddWrapper.append(exitButton, formWrapper);

  return taskAddWrapper
}

export default composeTaskAddUi;
