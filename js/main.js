const burger = document.querySelector('.burger')
const headerList = document.querySelector('.header__list')

burger.addEventListener('click', () => {
  headerList.classList.toggle('burger__active')
})


const swiperOne = new Swiper('.feedback__slider', {
  loop: true,

  // pagination: {
  //   el: '.swiper-pagination',
  // },
});
const swiperTwo = new Swiper('.certificate__slider', {
  loop: true,
  slidesPrewView: 2,
  spaceBetween: 20,
  
  pagination: {
    el: '.swiper-pagination',
  },
});