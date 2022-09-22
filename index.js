document.addEventListener('DOMContentLoaded', () => {

const imgArr = [ 
    {
        name: 'eiffelTower',
        img: '/frenchmemorygamepics/eiffeltower.png',
    }, 
    {
        name: 'eiffelTower',
        img: '/frenchmemorygamepics/eiffeltower.png',
    }, 
    {
        name: 'angelinas',
        img: '/frenchmemorygamepics/angelinas.png',
    },
    {
        name: 'angelinas',
        img: '/frenchmemorygamepics/angelinas.png',
    },
    {
        name: 'arcDeTriomphe',
        img: '/frenchmemorygamepics/arcdetriomphe.png',
    },
    {
        name: 'arcDeTriomphe',
        img: '/frenchmemorygamepics/arcdetriomphe.png',
    },
    {
        name: 'head',
        img: '/frenchmemorygamepics/head.png'
    },
    {
        name: 'head',
        img: '/frenchmemorygamepics/head.png'
    },
    {
        name: 'hotelDeVille',
        img: '/frenchmemorygamepics/hoteldeville.png',
    },
    {
        name: 'hotelDeVille',
        img: '/frenchmemorygamepics/hoteldeville.png',
    },
    {
        name: 'laduree',
        img: '/frenchmemorygamepics/laduree.png'
    },
    {
        name: 'laduree',
        img: '/frenchmemorygamepics/laduree.png'
    },
    {
        name: 'louvre',
        img: '/frenchmemorygamepics/louvre.png',
    },
    {
        name: 'louvre',
        img: '/frenchmemorygamepics/louvre.png',
    },
    {
        name: 'metroCite',
        img: '/frenchmemorygamepics/metrocite.png',
    },
    {
        name: 'metroCite',
        img: '/frenchmemorygamepics/metrocite.png',
    },
    {
        name: 'montMartre',
        img: '/frenchmemorygamepics/montmartre.png',
    },
    {
        name: 'montMartre',
        img: '/frenchmemorygamepics/montmartre.png',
    },
    {
        name: 'notreDame',
        img: '/frenchmemorygamepics/notredame.png',
    },
    {
        name: 'notreDame',
        img: '/frenchmemorygamepics/notredame.png',
    },
    {
        name: 'sacreCoeur',
        img: '/frenchmemorygamepics/sacrecoeur.png',
    },
    {
        name: 'sacreCoeur',
        img: '/frenchmemorygamepics/sacrecoeur.png',
    },
    {
        name: 'shakespeare',
        img: '/frenchmemorygamepics/shakespeare.png',
    },
    {
        name: 'shakespeare',
        img: '/frenchmemorygamepics/shakespeare.png',
    },
]

imgArr.sort(() => 0.5 - Math.random())

const gameboard = document.querySelector('.gameboard')
const scoreDisplay = document.querySelector('.result')
let tileChosen = []
let tileChosenId = []
const tileWon = []

function createGameBoard () {
    for(let i = 0; i < imgArr.length; i++) {
        let tile = document.createElement('img')
        tile.setAttribute('src', 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxLY-62UPoF1es3R8Ki6V5gYBLpnnJ1laig&usqp=CAU")');
        tile.setAttribute('data-id', i)
        tile.addEventListener('click', flipTile)
        gameboard.appendChild(tile)
    }
}
createGameBoard()

// need to make a function to check for a match
function checkForMatch(){
    let tile = document.querySelectorAll('img')
    const optionOneId = tileChosenId[0]
    const optionTwoId = tileChosenId[1]
    if (tileChosen[0] === tileChosen[1]){
        alert('Youpi! Tu as fait un match! Yay! You made a match!')
        tile[optionOneId].setAttribute('src', 'imgArr')
        // may need to change the image source
        tile[optionTwoId].setAttribute('src', 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxLY-62UPoF1es3R8Ki6V5gYBLpnnJ1laig&usqp=CAU")')
        tileWon.push(tileChosen)
    } else {
        tile[optionOneId].setAttribute('src', 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxLY-62UPoF1es3R8Ki6V5gYBLpnnJ1laig&usqp=CAU")')
        tile.optionTwoId.setAttribute('src', 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxLY-62UPoF1es3R8Ki6V5gYBLpnnJ1laig&usqp=CAU")')
        alert('Tant pis! Pas de match! Too bad! No match!')
    }
    tileChosen = []
    tileChosenId = []
    scoreDisplay.textContent = tileWon.length
    if (tileWon.length === imgArr.length/2) {
        scoreDisplay.textContent = 'Félicitations! Vous avez gagné! Congratulations! You won!'
    }
}
checkForMatch()

function flipTile(){
    let tileId = this.getAttribute('data-id')
    tileChosen.push(imgArr[tileId].name)
    tileChosenId.push(tileId)
    this.setAttribute('src', imgArr[tileId].img)
    if (tileChosen.length === 2) {
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
})