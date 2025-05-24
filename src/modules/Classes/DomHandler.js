/**
 * Utility class for creating and configuring DOM elements
 * @example
 * const button = DomHandler.createElement({
 *   type: 'button',
 *   classes: 'btn primary',
 *   text: 'Click me',
 *   event: { type: 'click', cb: handleClick }
 * });
*/

class DomHandler{
    //Utility functions (Private)

    static #configureElement(element, elementConfig){
        element.classList.add(...elementConfig.classes.split(' '));
        element.textContent = elementConfig.text || '';
        if (elementConfig.event)
            element.addEventListener(elementConfig.event.type, elementConfig.event.cb);
        return element;
    }


 
    static #parseInputType(inputString){
        let inputTypeIndexStart = inputString.indexOf('[') + 1;
        let inputTypeIndexEnd = inputString.indexOf(']');
        let inputType = inputString.slice(inputTypeIndexStart, inputTypeIndexEnd);
    
        return inputType;
    }


    static #handleInputElements(elementConfig){
        let element = document.createElement('input');
        element.type = this.#parseInputType(elementConfig.type);
        return this.#configureElement(element, elementConfig);
    }

    //PUBLIC API

    /**
     * Main factory method for creating DOM elements
     * @param {Object} elementConfig - Element configuration
     * @param {string} elementConfig.type - Element type (e.g., 'div', 'input[text]')
     * @param {string} elementConfig.classes - Space-separated CSS classes
     * @param {string} elementConfig.text - Text content
     * @param {Object} [elementConfig.event] - Event configuration
     * @returns {HTMLElement} Configured DOM element
     */
    static createElement(elementConfig){
        if (elementConfig instanceof HTMLElement) return elementConfig;
        
        if (elementConfig.type.includes('input')) 
            return this.#handleInputElements(elementConfig);

        
        let element = document.createElement(elementConfig.type);
        console.log(elementConfig.type)
        return this.#configureElement(element, elementConfig);
    }

    static batchCreate(elementConfigArray){
        let newHTMLElementsArray = []
        elementConfigArray.forEach( elementConfig => { 
            newHTMLElementsArray.push(this.createElement(elementConfig));
        })

        return newHTMLElementsArray;
    }

    static wrapperCreate(elementConfigParent, elementConfigChildren){
        let newHTMLParent = this.createElement(elementConfigParent);
        let newHTMLChildren = this.batchCreate(elementConfigChildren);

        newHTMLParent.append(...newHTMLChildren)

        return newHTMLParent;
    }

}

export default DomHandler;