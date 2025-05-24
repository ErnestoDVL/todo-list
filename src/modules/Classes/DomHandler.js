class DomHandler{

    static parseInputType(inputString){
        let inputTypeIndexStart = inputString.indexOf('[');
        let inputTypeIndexEnd = inputString.indexOf(']') + 1;
        let inputType = inputString.slice(inputTypeIndexStart, inputTypeIndexEnd);
    
        return inputType;
    }
    
    static createElement(elementConfig){
        let elementTypeString = elementConfig.type;
        let isElementInput = false;

        if (elementTypeString.includes('input')){
            elementTypeString = 'input'
            isElementInput = true;
        }

        const newHtmlElement = document.createElement(elementTypeString);
        newHtmlElement.classList(...elementConfig.class.split(' '));
        newHtmlElement.textContent = text || ''
        
        if (isElementInput) 
            newHtmlElement.type = this.parseInputType(elementConfig.type);
        
    }
}

export default DomHandler;