const board = document.querySelector('.board');
let color = '#ffc0cb';
const pen = document.querySelector('input#pen');

/*slider value*/
const slider = document.querySelector('input#boardSize');
const sliderValue = document.querySelector('div.value');
sliderValue.textContent = slider.value;
slider.oninput = function(){
    sliderValue.textContent = slider.value;
}

/*pen color picker*/




document.addEventListener('DOMContentLoaded', function(){
    createDivBoard(16);
})


let boardSizeBtn = document.querySelector('#boardSizeBtn');
boardSizeBtn.addEventListener('click', function(){
    let inputSize;
    inputSize=sliderValue.textContent;
    createDivBoard(inputSize);
})

function createDivBoard(size){
    let divs = board.querySelectorAll('div')
    divs.forEach((div) => div.remove()); /*removing all previously made divs, clearing the board*/ 
    
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let divNum = size*size;
    for(let i=0; i<divNum; i++){
        let div = document.createElement('div');
        div.classList.add('cells');
        board.insertAdjacentElement('beforeend', div);
        div.addEventListener('mouseover', colorDiv);
    }
}

function colorDiv() {
    if(color == 'random'){
        this.style.backgroundColor= randomColor();
    }else if (color=='reset'){
        this.style.backgroundColor = '#ffc0cb';
    }else if (color=='myColor'){
        this.style.backgroundColor = penInput();
    }else if (color=='eraser'){
        this.style.backgroundColor = '#353535';
    }else{
        this.style.backgroundColor = '#ffc0cb';
    }
}

function chooseColor(colorChoice){
    color= colorChoice;
}

function penInput(){
    return pen.value;
}


function randomColor(){

    let min = 0;
    let max = 255;
     a = Math.floor(min + Math.random() * (max - min + 1));
     b = Math.floor(min + Math.random() * (max - min + 1));
     c = Math.floor(min + Math.random() * (max - min + 1));

     let randomColor = `rgb(${a}, ${b}, ${c})`;
     return randomColor;
   
     
}
