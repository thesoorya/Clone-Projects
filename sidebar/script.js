const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const sidebarEle = document.querySelector('.sidebar')

openBtn.addEventListener('click', () => {
    sidebarEle.classList.toggle('toggle')
})
closeBtn.addEventListener('click', () => {
    sidebarEle.classList.toggle('toggle')

})