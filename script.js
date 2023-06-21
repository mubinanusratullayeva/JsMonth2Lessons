const shapeValidation = document.querySelector('.shape-validation')
const shapeValidationInput = document.querySelector('.shape-validation--input')
const shapesBox = document.querySelector('.shapes-box')

class Shape {
    constructor(options) {
        this.element = document.createElement(options.elementType);
        this.element.style.backgroundColor = options.backgroundColor;

        this.shapesBox = document.querySelector(`.${options.holder}`)
        this.shapesBox.append(this.element)
    }
}

class Square extends Shape {
    constructor(options) {
        super(options);

        this.element.style.height = options.size + 'px'
        this.element.style.width = options.size + 'px'
    }

    hide() {
        this.element.style.display = 'none';
    }
}

shapeValidation.addEventListener('submit', (e) => {
    e.preventDefault();

    let square = new Square({
        elementType: 'div',
        backgroundColor: 'red',
        holder: 'shapes-box',
        size: shapeValidationInput.value
    })

    square.element.addEventListener('click', () => {
        square.hide();
    })

    shapeValidation.reset();

})