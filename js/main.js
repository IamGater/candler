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

const acordeon = document.querySelector('.acordeon');

const acordeonTitles = acordeon.querySelectorAll('.acordeon__title');

acordeonTitles.forEach.call(acordeonTitles, function (acordeonTitle) {
  acordeonTitle.addEventListener('click', function () {

    const currentText = acordeonTitle.parentElement.querySelector('acordeon__text');

    acordeonTitle.classList.toggle('acordeon__title-active');

    acordeonText.classList.toggle('acordeon__text-active');

    if(currentText.classList.contains('acordeon__text-active')){
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentText.style.maxHeight = null;
      }
  })
});