// card.js

function addImagesToCardSlots() {
    const topImageUrl = './Card/Cards.png'; // Път към изображението за горните слотове
    const singleImageUrl = './Card/Cards.png'; // Път към изображението за единичния слот долу

    // За горните слотове
    const topSlots = document.querySelectorAll('.top-slot');
    topSlots.forEach(slot => {
        const img = document.createElement('img');
        img.src = topImageUrl;
        img.alt = 'Top Card Image';
        img.classList.add('card-image');

        // Премахва предишното съдържание на слота
        while (slot.firstChild) {
            slot.removeChild(slot.firstChild);
        }

        slot.appendChild(img);
    });

    // За единичния слот долу
    const singleSlot = document.querySelector('.single-slot');
    if (singleSlot) {
        const img = document.createElement('img');
        img.src = singleImageUrl;
        img.alt = 'Single Card Image';
        img.classList.add('card-image');

        // Премахва предишното съдържание на слота
        while (singleSlot.firstChild) {
            singleSlot.removeChild(singleSlot.firstChild);
        }

        singleSlot.appendChild(img);
    }
}

// Зарежда изображенията при стартиране на страницата
document.addEventListener('DOMContentLoaded', addImagesToCardSlots);
