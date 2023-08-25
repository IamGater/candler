const burger = document.querySelector('.burger')
const headerList = document.querySelector('.header__list')

burger.addEventListener('click', () => {
  headerList.classList.toggle('burger__active')
})


const swiperOne = new Swiper('.feedback__slider', {
   autoplay: {
   delay: 3000,
  },
   spaceBetween: 20,
  loop: true,

  // pagination: {
  //   el: '.swiper-pagination',
  // },
});
const swiperTwo = new Swiper('.certificates-container', {
  loop: true,
  autoplay: {
   delay: 3000,
  },
  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints: {
    
    1400: {
      slidesPerView: 3,
      
    },
    
    500: {
      slidesPerView: 2,
      
    },

    450: {
      slidesPerView: 1,
      
    },


    
    
  }
});

const acordeon = document.querySelector('.acordeon');

const acordeonTitles = acordeon.querySelectorAll('.acordeon__title');

console.log(acordeonTitles)
acordeonTitles.forEach.call(acordeonTitles, function (acordeonTitle) {
  acordeonTitle.addEventListener('click', function () {

    const currentText = acordeonTitle.parentElement.querySelector('.acordeon__text');

    acordeonTitle.classList.toggle('acordeon__title-active');

    currentText.classList.toggle('acordeon__text-visible');

    if(currentText.classList.contains('acordeon__text-visible')){
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentText.style.maxHeight = null;
      }
  })
});