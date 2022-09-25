document.addEventListener('DOMContentLoaded', () => {

const imgArr = [ 
    { name: 'eiffelTower', img: 'frenchmemorygamepics/eiffeltower.png' }, 
    { name: 'eiffelTower', img: 'frenchmemorygamepics/eiffeltower.png' }, 
    { name: 'angelinas', img: 'frenchmemorygamepics/angelinas.png' },
    { name: 'angelinas', img: 'frenchmemorygamepics/angelinas.png' },
    { name: 'arcDeTriomphe', img: 'frenchmemorygamepics/arcdetriomphe.png' },
    { name: 'arcDeTriomphe', img: 'frenchmemorygamepics/arcdetriomphe.png' },
    { name: 'head', img: 'frenchmemorygamepics/head.png' },
    { name: 'head', img: 'frenchmemorygamepics/head.png' },
    { name: 'hotelDeVille', img: 'frenchmemorygamepics/hoteldeville.png' },
    { name: 'hotelDeVille', img: 'frenchmemorygamepics/hoteldeville.png' },
    { name: 'laduree', img: 'frenchmemorygamepics/laduree.png' },
    { name: 'laduree', img: 'frenchmemorygamepics/laduree.png' },
    { name: 'louvre', img: 'frenchmemorygamepics/louvre.png' },
    { name: 'louvre', img: 'frenchmemorygamepics/louvre.png' },
    { name: 'metroCite', img: 'frenchmemorygamepics/metrocite.png' },
    { name: 'metroCite', img: 'frenchmemorygamepics/metrocite.png' },
    { name: 'montMartre', img: 'frenchmemorygamepics/montmartre.png' },
    { name: 'montMartre', img: 'frenchmemorygamepics/montmartre.png' },
    { name: 'notreDame', img: 'frenchmemorygamepics/notredame.png' },
    { name: 'notreDame', img: 'frenchmemorygamepics/notredame.png' },
    { name: 'sacreCoeur', img: 'frenchmemorygamepics/sacrecoeur.png' },
    { name: 'sacreCoeur', img: 'frenchmemorygamepics/sacrecoeur.png' },
    { name: 'shakespeare', img: 'frenchmemorygamepics/shakespeare.png' },
    { name: 'shakespeare', img: 'frenchmemorygamepics/shakespeare.png' },
]

imgArr.sort(() => 0.5 - Math.random())

const gameboard = document.querySelector('.gameboard')
// const scoreDisplay = document.querySelector('#result')
const refaireButton = document.querySelector('.refaireButton')
let tilesChosen = []
let tilesChosenId = []
let tilesWon = []

// let isPlayerTurn1 = true

let gameTilesArray = []

// function to create the gameboard
function createGameBoard () {
    for(let i = 0; i < imgArr.length; i++) {
        let tile = document.createElement('img')
        tile.setAttribute('src', 'frenchmemorygamepics/poppyfield.png');
        tile.setAttribute('id', `tile-${i}`)
        tile.setAttribute('class', 'carreau')
        tile.addEventListener('click', flipTile)
        gameboard.appendChild(tile)
        gameTilesArray.push(tile)
    }
    // let player1Score = document.getElementById('player1Score')
    // let player2Score = document.getElementById('player2Score')
    // player1Score.innerText = ' 0'
    // player2Score.innerText = ' 0'
}

createGameBoard()


// function for flipping the tiles
function flipTile(event){
    let tileId = event.srcElement.id
    let tileIndex = parseInt(tileId.split('-')[1])
    console.log(event, event.srcElement.id, tileIndex)
    // let clickedTile = document.querySelector(`#${event.srcElement.id}`)
    tilesChosen.push(imgArr[tileIndex].name)
    tilesChosenId.push(tileId)
    this.setAttribute('src', imgArr[tileIndex].img)
    if (tilesChosen.length === 2) {
        checkForMatch()
        // setTimeout(checkForMatch, 1000)
    }
    // we can add a condition that checks if the clicked tile is in the tiles chosen array and if it's not we need to change the img to the poppyfield 
}


// function for checking a match
function checkForMatch(){
    // next steps! lets add a check of the current players turn (who's turn is it) on each successful match, get the appropriate players score fromt the DOM, and change it by incrementing (i++)
    // see MDN HTML element.innerText and getElementById
    console.log(tilesChosen, tilesChosenId)
    // let tiles = document.querySelectorAll('img')
    // console.log(tiles)
    // if(tilesChosenId.length !== 2){
    //     return
    // }
    const optionOneId = tilesChosenId[0]
    const optionTwoId = tilesChosenId[1]
    let pickedTile1 = document.querySelector(`#${optionOneId}`)
    let pickedTile2 = document.querySelector(`#${optionTwoId}`)
    if (tilesChosen[0] === tilesChosen[1]){
        // can I make a function within the alert that names the monument?
        // alert('Youpi! Tu as fait un match! Yay! You made a match!')
        // pickedTile1.setAttribute('src', 'frenchmemorygamespics/white.png')
        // pickedTile2.setAttribute('src', 'frenchmemorygamespics/white.png')
        tilesWon.push(tilesChosen)
        pickedTile1.classList.add('tiles-won')
        pickedTile2.classList.add('tiles-won')
    } else {
        gameTilesArray.forEach((tile)=> {
            tile.classList.add('unclickable')
        })
    // this is where I want to add the class to each tile (forEach.add...) (maybe to the whole gameboard??) that makes them unclickable 
        setTimeout(()=>{
            pickedTile1.setAttribute('src', 'frenchmemorygamepics/poppyfield.png')
            pickedTile2.setAttribute('src', 'frenchmemorygamepics/poppyfield.png')
            // this is where I want to take away the unclickable class so we can continue to play the game.
            gameTilesArray.forEach((tile)=> {
                tile.classList.remove('unclickable')
            })
        }, 1000)
        // can make it so that no other tiles can be clicked during that one second. They have to wait for the the timeout to end before you can click them again
        // alert('Tant pis! Pas de match! Too bad! No match!')
    }
    console.log('before erase', tilesChosen)
    tilesChosen = []
    tilesChosenId = []
    // scoreDisplay.textContent = tilesWon.length
    console.log('after erase', tilesChosen)
    if (tilesWon.length === imgArr.length/2) {
        // scoreDisplay.textContent = 'Félicitations! Vous avez gagné! Congratulations! You won!'
    }
    
}

// function to reset the gameboard with the Refaire button
const resetGameBoard = () => {
    let tiles = document.querySelectorAll('.carreau')
    console.log(tiles, 'in refaireButton')
    tiles.forEach((tile)=> {
        tile.remove()
    })
    setTimeout(createGameBoard, 500)
    tilesChosen = []
    tilesChosenId = []
    tilesWon = []
}


console.log(tilesChosen)
console.log(tilesChosenId)
console.log(tilesWon)

// tried to write a function to ruffle the tiles but it kept disabling the refaire button
// (function shuffle() {
//         tiles.forEach(gameTilesArray => {
//               let ramdomPos = Math.floor(Math.random() * 24);
//               tiles.style.order = ramdomPos;
//             });
//             return gameTilesArray;
// })();
        
        
refaireButton.addEventListener('click', resetGameBoard);
// another option
// (function shuffle() {
//     tiles.forEach(card => {
//       let ramdomPos = Math.floor(Math.random() * 24);
//       card.style.order = ramdomPos;
//     });
//   })();

// something else I found on this subject: 
// _.shuffle(gameTilesArray);

// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }

//     return array;
// }




// Would love for the tile imgs to shuffle

// tilesWon.style.pointerEvents = "none";


// trying to lock the board so other cards can't be clicked once a match is made. 
// can I call them cards here even though they were called tiles above?

// const cards = document.querySelectorAll('.memory-card');

//     let hasFlippedCard = false;
//     let lockBoard = false;
//     let firstCard, secondCard;

// function flipCard() {
//     if (lockBoard) return;
//     if (this === firstCard) return;
//     this.classList.add('flip');
//     if (!hasFlippedCard) {
//       hasFlippedCard = true;
//       firstCard = this;
//       return;
//     }
//     secondCard = this;

//     checkForMatch();
//   }
//   function checkForMatch() {
//     let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
//     isMatch ? disableCards() : unflipCards();
//   }
//   function disableCards() {
//     firstCard.removeEventListener('click', flipCard);
//     secondCard.removeEventListener('click', flipCard);
//     resetBoard();
//   }
//   function unflipCards() {
//      lockBoard = true;

//     setTimeout(() => {
//       firstCard.classList.remove('flip');
//       secondCard.classList.remove('flip');

//      resetBoard();
//     }, 1500);
//   }
// function resetBoard() {
//     [hasFlippedCard, lockBoard] = [false, false];
//     [firstCard, secondCard] = [null, null];
//   }
// (function shuffle() {
//     cards.forEach(card => {
//       let ramdomPos = Math.floor(Math.random() * 12);
//       card.style.order = ramdomPos;
//     });
//   })();
//   cards.forEach(card => card.addEventListener('click', flipCard));










//     gameBoard = [];
//     isGameActive = true;
//     announcer.classList.add('hide');
//     currentPlayer = 'x';
//     // if (currentPlayer === 'o') {
//     //     changePlayer();
//     // }

//     tiles.forEach(tile => {
//         tile.innerText = '';
//         tile.classList.remove('playerx');
//         tile.classList.remove('playero');
//         tile.classList.remove('highlight');
//     });
//     // tiles.forEach(function(tile){
//     //     tile.addEventListener('click', function(){
//     //         if(tile.innerText.trim() != "") return
//     //         tile.innerText = currentPlayer
//     //         checkForWinner()
//     //         currentPlayer = currentPlayer == "x" ? "o" : "x"
//     //     })
//     // })
// }



// Can I modify the below to work for this?
// const announce = (type) => {
//     switch(type){
//         case PLAYERO_WON:
//             announcer.innerHTML = 'Player <span class=playero">O</span> Won';
//             break;
//         case PLAYERX_WON:
//             announcer.innerHTML = 'Player <span class="playerx">X</span> Won';
//             break;
//         case TIE:
//             announcer.innerText = 'Tie';
//     }
//     announcer.classList.remove('hide');
// };
})