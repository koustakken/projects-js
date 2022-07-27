const minElem = document.querySelector('.minute')
const secElem = document.querySelector('.second')
const msElem = document.querySelector('.millisecond')

const btnStart = document.querySelector('.start')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')

btnStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

btnPause.addEventListener('click', () =>{
    clearInterval(interval)
})

btnStop.addEventListener('click', () => {
    clearInterval(interval)
    clearTimer()
})

let minute = 00,
    second = 00, 
    millisecond = 00,
    interval

function startTimer() {
    millisecond++
    if(millisecond < 9)
        msElem.innerText = '0' + millisecond
    if(millisecond > 9)
        msElem.innerText = millisecond
    if(millisecond > 99){
        second ++
        secElem.innerText = '0' + second
        millisecond = 0
        msElem.innerText = '0' + millisecond
    }

    if(second < 9)
        secElem.innerText = '0' + second
    if(second > 9)
        secElem.innerText = second
    if(second > 59){
        minute++
        minElem.innerText = '0' + minute
        second = 0
        secElem.innerText = '0' + second
    }
}

function clearTimer(){
    minute = 00
    second = 00
    millisecond = 00
    minElem.textContent = '00'
    secElem.textContent = '00'
    msElem.textContent = '00'
}