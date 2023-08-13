let board = document.querySelector('.board');

document.addEventListener('DOMContentLoaded', function(){
    createDivBoard(16);
})

function createDivBoard(size){
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let divNum = size*size;
    for(let i=0; i<divNum; i++){
        let div = document.createElement('div');
        board.insertAdjacentElement('beforeend', div)
    }
}