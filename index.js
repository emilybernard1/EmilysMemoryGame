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

//--------------------- function to create the gameboard---------------//
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


// ------------function for flipping the tiles-----------//
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


//------------------- function for checking a match--------------////
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
        setTimeout(()=>{
            pickedTile1.setAttribute('src', 'frenchmemorygamepics/poppyfield.png')
            pickedTile2.setAttribute('src', 'frenchmemorygamepics/poppyfield.png')
            // this is where I want to take away the unclickable class so we can continue to play the game.
            gameTilesArray.forEach((tile)=> {
                tile.classList.remove('unclickable')
            })
        }, 1000)
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


        
refaireButton.addEventListener('click', resetGameBoard);
})