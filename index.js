document.addEventListener('DOMContentLoaded', () => {
    const gameboard = document.querySelector('.gameboard')
    const refaireButton = document.querySelector('.refaireButton')
    let tilesChosen = []
    let tilesChosenId = []
    let tilesWon = []
    let gameTilesArray = []

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
    }

    createGameBoard()

// ------------function for flipping the tiles-----------//
    function flipTile(event){
        let tileId = event.srcElement.id
        let tileIndex = parseInt(tileId.split('-')[1])
        console.log(event, event.srcElement.id, tileIndex)
        tilesChosen.push(imgArr[tileIndex].name)
        tilesChosenId.push(tileId)
        this.setAttribute('src', imgArr[tileIndex].img)
        if (tilesChosen.length === 2) {
            checkForMatch()
        }
    }

//------------------- function for checking a match--------------////
    function checkForMatch(){
        console.log(tilesChosen, tilesChosenId)
        const optionOneId = tilesChosenId[0]
        const optionTwoId = tilesChosenId[1]
        let pickedTile1 = document.querySelector(`#${optionOneId}`)
        let pickedTile2 = document.querySelector(`#${optionTwoId}`)
        if (tilesChosen[0] === tilesChosen[1]){
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
                gameTilesArray.forEach((tile)=> {
                    tile.classList.remove('unclickable')
                })
            }, 1000)
        }
        console.log('before erase', tilesChosen)
        tilesChosen = []
        tilesChosenId = []
        console.log('after erase', tilesChosen)
        if (tilesWon.length === imgArr.length/2) {
        } 
    }

// ------------function to reset the gameboard with the Refaire button---------//
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