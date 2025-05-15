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
            let el = this.createElement(element[0], element[1], element[2] || '');
            elementBatch.push(el);
        });

        return elementBatch;
    }
}

export default DomHandler;