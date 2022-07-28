const cardArray = [
    {
        name: 'blank',
        img: 'images/blank.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'white',
        img: 'images/white.png'
    },
    {
        name: 'blank',
        img: 'images/blank.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'white',
        img: 'images/white.png'
    }
]
const cardsChosenIds = []
const cardsChosenName = []

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
const liveDisplay = document.getElementById('live')

let count = 0

scoreDisplay.innerText = count

function createBoard(){
    cardArray.forEach((el,i) => {
        const card = document.createElement('img')
        card.setAttribute('src', `images/blank.png`)
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    })
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img') 
    if(cardsChosenName[0] === cardsChosenName[1]){
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsChosenIds.length = 0
        cardsChosenName.length = 0
        count++
        scoreDisplay.innerText = count
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
        cardsChosenIds.length = 0
        cardsChosenName.length = 0
        count++
        scoreDisplay.innerText = count
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosenIds.push(cardId)
    cardsChosenName.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosenIds.length === 2) {
        setTimeout(checkMatch, 500)
    }
}



