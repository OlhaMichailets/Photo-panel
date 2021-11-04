let OpenCalcPopUpButton = document.querySelector('.goCalcButtonLink');

OpenCalcPopUpButton.addEventListener('click', function() {
    document.querySelector('.popupCalculator').classList.add('popupShow');
});



let CloseCalcPopUpButton = document.querySelectorAll('.popCalcCloseIcon');

CloseCalcPopUpButton.addEventListener('click', function() {
    document.querySelector('.popupCalculator').classList.remove('popupCalculator-show');
});