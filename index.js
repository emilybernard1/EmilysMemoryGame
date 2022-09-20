// To do:
    // 1. Finish checkForMatch function
    // 2. 

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

const gameboard = document.querySelector('.gameboard')
let tilesChosen = []
let tilesChosenId = []

function createGameBoard () {
    for(let i = 0; i < imgArr.length; i++) {
        let tile = document.createElement('img')
        tile.setAttribute('src', 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxLY-62UPoF1es3R8Ki6V5gYBLpnnJ1laig&usqp=CAU")');
        tile.setAttribute('data-id', i)
        // tile.addEventListener('click', flipcard)
        gameboard.appendChild(tile)
    }
}


// need to make a function to check for a match





// need make a function to flip the tiles
const flipTile() => {
    let tileId = this.getAttribute('data-id')
    tilesChosen.push(imgArr[tileId].name)
    tilesChosenId.push(tileId)
    this.setAttribute('src', imgArr[tileId].img)
    if (tilesChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createGameBoard()










})