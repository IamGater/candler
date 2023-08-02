const burger = document.querySelector('.burger')
const headerList = document.querySelector('.header__list')

burger.addEventListener('click', () => {
  headerList.classList.toggle('burger__active')
})
