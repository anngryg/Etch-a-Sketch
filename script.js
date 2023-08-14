let board = document.querySelector('.board');

/*slider value*/
const slider = document.querySelector('#boardSize');
const value = document.querySelector('.value');
value.textContent = slider.value;
slider.oninput = function(){
    value.textContent = this.value;
}

document.addEventListener('DOMContentLoaded', function(){
    createDivBoard(16);
})


let boardSizeBtn = document.querySelector('#boardSizeBtn');
boardSizeBtn.addEventListener('click', function(){
    let inputSize;
    inputSize=value.textContent;
    console.log(inputSize);
    reset();
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
        board.insertAdjacentElement('beforeend', div)
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor = 'pink'
        }
        )
    }
}

function reset(){
    createDivBoard(1)
}