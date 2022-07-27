// create new task
const lists = document.querySelectorAll('.list')

function addTask(){
    
    const btn = document.querySelector('.addTask')
    const addBtn = document.querySelector('.add')
    const cancelBtn = document.querySelector('.cancel')
    const form = document.querySelector('.form')
    const textarea = document.querySelector('.textarea')
    
    let value

    btn.addEventListener('click', () => {
        btn.style.display = 'none'
        form.style.display = 'block'
    })

    textarea.addEventListener('input', e => {
        value = e.target.value
        if (value && textarea.value) {
            addBtn.style.display = 'block'
        }  else {
            addBtn.style.display = 'none'
        }
    })

    cancelBtn.addEventListener('click', () => {
        textarea.value = ''
        value = ''
        form.style.display = 'none'
        btn.style.display = 'block'
    })

    addBtn.addEventListener('click', () => {
        
        if (value) {
            const newItem = document.createElement('div')

            newItem.classList.add('list__item')
            newItem.textContent = value
            lists[0].append(newItem)
        }

        textarea.value = ''
        value = ''
        form.style.display = 'none'
        btn.style.display = 'block'
    })
}

function changeTitle(){
    const titles = document.querySelectorAll('.title')

    titles.forEach(title => {
        title.addEventListener('click', e => e.target.textContent = '')
    })
}

function delTask(){
    
}

addTask()
delTask()
changeTitle()