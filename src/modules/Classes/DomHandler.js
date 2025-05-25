/**
 * Utility class for creating and configuring DOM elements
 * @example
 * const button = DomHandler.createElement({
 *   type: 'button',
 *   classes: 'btn primary',
 *   text: 'Click me',
 *   event: { type: 'click', cb: handleClick },
 *   attributes: [{key: 'type', value: 'submit'}]
 * });
*/

class DomHandler{
    //Utility functions (Private)

    static #configureElement(element, elementConfig){
        if (elementConfig.text)
            element.textContent = elementConfig.text;
        
        if(elementConfig.classes)
            element.classList.add(...elementConfig.classes.split(' '));
        
        if (elementConfig.event)
            element.addEventListener(elementConfig.event.type, elementConfig.event.cb);
        
        if (elementConfig.attributes)
            elementConfig.attributes.forEach(attribute =>{
                element.setAttribute(attribute.key, attribute.value);
        })
        return element;
    }
  
    //PUBLIC API

    /**
     * Main factory method for creating DOM elements
     * @param {Object} elementConfig - Element configuration
     * @param {string} elementConfig.type - Element type (e.g., 'div', 'input[text]')
     * @param {string} elementConfig.classes - Space-separated CSS classes
     * @param {string} elementConfig.text - Text content
     * @param {{type: string, cb: Function}} [elementConfig.event] - Event configuration
     * @param {Array<{key: string, value: string}>} [elementConfig.attributes] - Array of attribute objects
     * @returns {HTMLElement} Configured DOM element
     */
    static createElement(elementConfig){
        if (elementConfig instanceof HTMLElement) return elementConfig;
        
        let element = document.createElement(elementConfig.type);
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