class DomHandler{

    //PRIVATE UTILITY

    static #elementTypeHandler(element){
        let el;
        if (element instanceof HTMLElement){
            el = element;
                
        }else if(element[0].includes('input')){
            let startIndex = element[0].indexOf('[');
            let type = element[0].slice(startIndex);
            let elm = element[0].slice(0,startIndex);
            el = this.createElement(elm, element[1], element[2] || '');

        }else{
            el = this.createElement(element[0], element[1], element[2] || '');
        }

        return el;
    }
     

    static #elementClassHandler(elArr, element){
        let classes = elArr.split(' ');
        classes.forEach(classString => {
            element.classList.add(classString);
        })
    }

    //PUBLIC API
     
    static createElement(elementType, tag, text = ''){
        let element = document.createElement(elementType);
        this.#elementClassHandler(tag, element);
        element.textContent = text;

        return element;
    }

    static batchCreate(elementArr){
        let elementBatch = [];

        elementArr.forEach((element) => {
            let el = this.#elementTypeHandler(element);

            elementBatch.push(el);

        });

        return elementBatch;
    }

    static wrapperCreate(wrapperObj){
        const elementParent = this.createElement(wrapperObj.parent[0], wrapperObj.parent[1], wrapperObj.parent[2] || '')
        let childElements;
        if(wrapperObj.children instanceof HTMLElement){
            childElements = wrapperObj.children;
            elementParent.append(childElements);
        }else{
            childElements = this.batchCreate(wrapperObj.children);
            elementParent.append(...childElements);
        }
        
        return elementParent;
    }
}

export default DomHandler;