let openCalcPopUpButton = document.querySelector('.goCalcButton');
openCalcPopUpButton.addEventListener('click', function () {
    document.querySelector('.popupCalculator').classList.add('popupShow');
});


let closeCalcPopUpButton = document.querySelector('.popCalcCloseIcon');
closeCalcPopUpButton.addEventListener('click', function () {
    document.querySelector('.popupCalculator').classList.remove('popupShow');
});


let openQuestPopUpButton = document.querySelector('.calculateButton');
openQuestPopUpButton.addEventListener('click', function (){
    document.querySelector('.popupCalculator').classList.remove('popupShow');
    document.querySelector('.popupQuestion').classList.add('popupShow');
})


let closeQuestPopUpButton = document.querySelector('.popQuestCloseIcon');
closeQuestPopUpButton.addEventListener('click', function () {
    document.querySelector('.popupQuestion').classList.remove('popupShow');
})


let returnCalcPopUpButton = document.querySelector('.returnCalculatorButton');
returnCalcPopUpButton.addEventListener('click', function () {
    document.querySelector('.popupQuestion').classList.remove('popupShow');
    document.querySelector('.popupCalculator').classList.add('popupShow');
})


let questionForm = document.querySelector('.questionForm');
questionForm.addEventListener('submit', function (event) {
    event.preventDefault();
    document.querySelector('.popupQuestion').classList.remove('popupShow');
    document.querySelector('.feedback').classList.add('popupShow');
})


let closeFeedbackFormIcon = document.querySelector('.popFeedbackCloseIcon');
closeFeedbackFormIcon.addEventListener('click', function () {
    document.querySelector('.feedback').classList.remove('popupShow');
})


let closeFeedbackForm = document.querySelector('.feedbackButton');
closeFeedbackForm.addEventListener('click', function () {
    document.querySelector('.feedback').classList.remove('popupShow');
})


let openCallbackForm = document.querySelector('.callbackButton');
openCallbackForm.addEventListener('click', function () {
    document.querySelector('.callbackSection').classList.add('popupShow');
})

let closeCallbackFormIcon = document.querySelector ('.iconCloseDefault');
closeCallbackFormIcon.addEventListener('click', function () {
    document.querySelector('.callbackSection').classList.remove('popupShow');
})