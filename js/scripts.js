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