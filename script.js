const menu = document.querySelector('img#menu')
const close = document.querySelector('.btn-close')

menu.addEventListener('click', () => {
    document.querySelector('.side-bar').style.display = 'flex'
    document.querySelector('.overlay').style.filter = 'brightness(50%)'
})

close.addEventListener('click', () => {
    document.querySelector('.side-bar').style.display = 'none'
    document.querySelector('.overlay').style.filter = 'brightness(100%)'
})