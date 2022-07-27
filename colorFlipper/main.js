const btn = document.getElementById('btn')
const color = document.querySelector('.color')

const colors = ['red', 'green', 'blue', 'black']

btn.addEventListener('click', ()=>{
    const randomColor = getRandom()
    document.body.style.backgroundColor = colors[randomColor]
    color.textContent = colors[randomColor]
})

function getRandom(){
    return Math.floor(Math.random() * colors.length)
}