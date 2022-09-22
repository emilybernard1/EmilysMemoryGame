// To Do:
// 1. get gameboard to show up and work!
// 2. Get reset button to work (need to modify tic tac toe code for this)
// 3. Check notes at bottom to make sure I've done everything I wanted to.

document.addEventListener('DOMContentLoaded', () => {

const imgArr = [ 
    {
        name: 'eiffelTower',
        img: 'frenchmemorygamepics/eiffeltower.png'
    }, 
    {
        name: 'eiffelTower',
        img: 'frenchmemorygamepics/eiffeltower.png'
    }, 
    {
        name: 'angelinas',
        img: 'frenchmemorygamepics/angelinas.png'
    },
    {
        name: 'angelinas',
        img: 'frenchmemorygamepics/angelinas.png'
    },
    {
        name: 'arcDeTriomphe',
        img: 'frenchmemorygamepics/arcdetriomphe.png'
    },
    {
        name: 'arcDeTriomphe',
        img: 'frenchmemorygamepics/arcdetriomphe.png'
    },
    {
        name: 'head',
        img: 'frenchmemorygamepics/head.png'
    },
    {
        name: 'head',
        img: 'frenchmemorygamepics/head.png'
    },
    {
        name: 'hotelDeVille',
        img: 'frenchmemorygamepics/hoteldeville.png'
    },
    {
        name: 'hotelDeVille',
        img: 'frenchmemorygamepics/hoteldeville.png'
    },
    {
        name: 'laduree',
        img: 'frenchmemorygamepics/laduree.png'
    },
    {
        name: 'laduree',
        img: 'frenchmemorygamepics/laduree.png'
    },
    {
        name: 'louvre',
        img: 'frenchmemorygamepics/louvre.png'
    },
    {
        name: 'louvre',
        img: 'frenchmemorygamepics/louvre.png'
    },
    {
        name: 'metroCite',
        img: 'frenchmemorygamepics/metrocite.png'
    },
    {
        name: 'metroCite',
        img: 'frenchmemorygamepics/metrocite.png'
    },
    {
        name: 'montMartre',
        img: 'frenchmemorygamepics/montmartre.png'
    },
    {
        name: 'montMartre',
        img: 'frenchmemorygamepics/montmartre.png'
    },
    {
        name: 'notreDame',
        img: '/renchmemorygamepics/notredame.png'
    }
    {
        name: 'notreDame',
        img: 'frenchmemorygamepics/notredame.png'
    },
    {
        name: 'sacreCoeur',
        img: 'frenchmemorygamepics/sacrecoeur.png'
    },
    {
        name: 'sacreCoeur',
        img: 'frenchmemorygamepics/sacrecoeur.png'
    },
    {
        name: 'shakespeare',
        img: 'frenchmemorygamepics/shakespeare.png'
    },
    {
        name: 'shakespeare',
        img: 'frenchmemorygamepics/shakespeare.png'
    },
]

imgArr.sort(() => 0.5 - Math.random())

const gameboard = document.querySelector('.gameboard')
const scoreDisplay = document.querySelector('#result')
let tilesChosen = []
let tilesChosenId = []
const tilesWon = []

// need function to create the gameboard
function createGameBoard () {
    for(let i = 0; i < imgArr.length; i++) {
        let tile = document.createElement('img')
        tile.setAttribute('src', 'frenchmemorygamepics/poppy.png');
        tile.setAttribute('data-id', i)
        tile.addEventListener('click', flipTile)
        gameboard.appendChild(tile)
    }
}

createGameBoard()

// need to make a function to check for a match
function checkForMatch(){
    let tiles = document.querySelectorAll('img')
    const optionOneId = tilesChosenId[0]
    const optionTwoId = tilesChosenId[1]
    if (tilesChosen[0] === tilesChosen[1]){
        alert('Youpi! Tu as fait un match! Yay! You made a match!')
        tiles[optionOneId].setAttribute('src', 'frenchmemorygamespics/white.png')
        tiles[optionTwoId].setAttribute('src', 'frenchmemorygamespics/white.png')
        tilesWon.push(tilesChosen)
    } else {
        tiles[optionOneId].setAttribute('src', 'frenchmemorygamepics/poppy.png')
        tiles.optionTwoId.setAttribute('src', 'frenchmemorygamepics/poppy.png')
        alert('Tant pis! Pas de match! Too bad! No match!')
    }
    tilesChosen = []
    tilesChosenId = []
    scoreDisplay.textContent = tilesWon.length
    if (tilesWon.length === imgArr.length/2) {
        scoreDisplay.textContent = 'Félicitations! Vous avez gagné! Congratulations! You won!'
    }
}

checkForMatch()

function flipTile(){
    let tileId = this.getAttribute('data-id')
    tilesChosen.push(imgArr[tileId].name)
    tilesChosenId.push(tileId)
    this.setAttribute('src', imgArr[tileId].img)
    if (tilesChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

flipTile()

// Can I change the flipTile function to loook this it does below?
// const flipTile () => {
//     let tileId = this.getAttribute('data-id')
//     tilesChosen.push(imgArr[tileId].name)
//     tilesChosenId.push(tileId)
//     this.setAttribute('src', imgArr[tileId].img)
//     if (tilesChosen.length === 2) {
//         setTimeout(checkForMatch, 500)
//     }
// }


// I need to modify the below (from Tic Tac Toe) to get it to work with this memory game.
// const resetGameBoard = () => {
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

// resetButton.addEventListener('click', resetGameBoard);


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