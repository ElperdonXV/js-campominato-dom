//L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


    

//seleziono il livello di difficoltà
const play = document.getElementById('play');
const containerGrid = document.getElementById('container');
let spanPoints = document.getElementById('points');
const numBomb = 16;
let arrayBomb = [];
play.addEventListener('click', function () {
    container.innerHTML = '';

    const value = document.getElementById('difficulty').value;
    
    let col=0;
    let row=0;

    if (value == 'easy') {
        arrayBomb = [];
        row = 10;
        col = 10; 
    }
    else if (value == 'normal') {
        arrayBomb = [];
        row = 9;
        col = 9;
    }
    else if (value == 'hard') {
        arrayBomb = [];
        row = 7;
        col = 7;
    }

    let numberSquare = row * col;

    for(let x=0; x<numBomb; x++){
        let numberRand = Math.floor(Math.random() * (numberSquare - 1 + 1) + 1);

        //controllo se il numero generato è dentro arrayBomb
        //se non lo è allora lo inserisco nell'array delle bombe
        //altrimenti ne genero uno nuovo

        while (arrayBomb.includes(numberRand)) { //controllo se e incluso in array, e ne genero uno nuovo finche e presente
        numberRand = Math.floor(Math.random() * (numberSquare - 1 + 1) + 1);
      }

      //qui ci arrivo solo se ho generato un numero nuovo
        arrayBomb.push(numberRand); //lo pusho nell'array
    }
    console.log(arrayBomb); //checkarray
    let points = parseInt(0); //inizializzo il contatore del punteggio 
    for (let i = 0; i < numberSquare; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        square.append(i + 1);
        containerGrid.append(square);
        if (arrayBomb.includes(parseInt(square.innerText))) {
            square.classList.add('hidebomb');
        }
        square.addEventListener('click', function () {
            if(square.classList.contains('hidebomb')) {
                square.classList.add('bomb');
                let allBombs = document.querySelectorAll('.hidebomb');
                for (let z=0; z< allBombs.length; z++){
                    allBombs[z].classList.add('bomb');
                }
                }
                else
                {
                square.classList.add('clicked');
                points = points + 1;
                spanPoints.append(points);
                }
        })
    }
})


   





