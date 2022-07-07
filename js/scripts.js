let openCalcPopUpButton = document.querySelector('.goCalcButton');
if (openCalcPopUpButton) {
    openCalcPopUpButton.addEventListener('click', function () {
        document.querySelector('.popupCalculator').classList.add('popupShow');
    });
};


let closeCalcPopUpButton = document.querySelector('.popCalcCloseIcon');
if (closeCalcPopUpButton) {
    closeCalcPopUpButton.addEventListener('click', function () {
        document.querySelector('.popupCalculator').classList.remove('popupShow');
    });
};


let openQuestPopUpButton = document.querySelector('.calculateButton');
if (openQuestPopUpButton) {
    openQuestPopUpButton.addEventListener('click', function (){
        document.querySelector('.popupCalculator').classList.remove('popupShow');
        document.querySelector('.popupQuestion').classList.add('popupShow');
});
};


let closeQuestPopUpButton = document.querySelector('.popQuestCloseIcon');
if (closeQuestPopUpButton) {
    closeQuestPopUpButton.addEventListener('click', function () {
        document.querySelector('.popupQuestion').classList.remove('popupShow');
    });
};


let returnCalcPopUpButton = document.querySelector('.returnCalculatorButton');
if (returnCalcPopUpButton) {
    returnCalcPopUpButton.addEventListener('click', function () {
        document.querySelector('.popupQuestion').classList.remove('popupShow');
        document.querySelector('.popupCalculator').classList.add('popupShow');
    });
};


let questionForm = document.querySelector('.questionForm');
if (questionForm) {
    questionForm.addEventListener('submit', function (event) {
        event.preventDefault();
        document.querySelector('.popupQuestion').classList.remove('popupShow');
        document.querySelector('.feedback').classList.add('popupShow');
    });
};


let closeFeedbackFormIcon = document.querySelector('.popFeedbackCloseIcon');
if (closeFeedbackFormIcon) {
    closeFeedbackFormIcon.addEventListener('click', function () {
        document.querySelector('.feedback').classList.remove('popupShow');
    });
};


let closeFeedbackForm = document.querySelector('.feedbackButton');
if (closeFeedbackForm) {
    closeFeedbackForm.addEventListener('click', function () {
        document.querySelector('.feedback').classList.remove('popupShow');
    });
};


let openCallbackForm = document.querySelector('.callbackButton');
openCallbackForm.addEventListener('click', function () {
    document.querySelector('.callbackSection').classList.add('popupShow');
})

let closeCallbackFormIcon = document.querySelector ('.iconCloseDefault');
closeCallbackFormIcon.addEventListener('click', function () {
    document.querySelector('.callbackSection').classList.remove('popupShow');
})

document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper', {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 160,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },

    },
    )
});

  const swiperPrev = document.getElementById('swiperPrev')
  const swiperNext = document.getElementById('swiperNext')

  swiperPrev.addEventListener('click', () => {
    mySwiper.slidePrev();
  })
  swiperNext.addEventListener('click', () => {
    mySwiper.slideNext();
  })
