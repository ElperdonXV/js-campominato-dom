//L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


    

//seleziono il livello di difficoltà
const play = document.getElementById('play');
const containerGrid = document.getElementById('container');
play.addEventListener('click', function () {
    container.innerHTML = '';

    const value = document.getElementById('difficulty').value;
    
    let col=0;
    let row=0;

    if (value == 'easy') {
        row = 10;
        col = 10; 
    }
    else if (value == 'normal') {
        row = 9;
        col = 9;
    }
    else if (value == 'hard') {
        row = 7;
        col = 7;
    }

    let numberSquare = row * col;
    for (let i = 0; i < numberSquare; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        square.append(i + 1);
        containerGrid.append(square);
        square.addEventListener('click', function () {
            this.classList.add('clicked');
        })
    }
})



