document.addEventListener('DOMContentLoaded', function () {
    var popupTrigger = document.querySelector('.popup-trigger');
    var popup = document.querySelector('.popup');
    var closePopup = document.querySelector('.close-popup');

    popupTrigger.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});
