class DomHandler{

    static createElement(elementType, tag, text = ''){
        let element = document.createElement(elementType);
        element.classList.add(tag);
        element.textContent = text;

        return element;
    }

    static batchCreate(elementArr){
        let elementBatch = [];

        elementArr.forEach((element) => {
            let el;
            if (element instanceof HTMLElement){
                el = element;
                
            }else if(element[0].includes('input')){
                let startIndex = element[0].indexOf('[');
                let type = element[0].slice(startIndex);
                let elm = element[0].slice(0,startIndex);
                console.log(elm)
                el = this.createElement(elm, element[1], element[2] || '');
            }
            console.log(el)
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
            console.log(childElements)
            elementParent.append(...childElements);
        }
        
        console.log(childElements instanceof HTMLElement)
        return elementParent;
    }
}

export default DomHandler;