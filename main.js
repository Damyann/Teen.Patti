// main.js

// Зареждаме и свързваме събития за бутоните
document.addEventListener('DOMContentLoaded', () => {
    const adminButton = document.getElementById('button1');
    const tpButton = document.getElementById('button2');

    if (adminButton) {
        adminButton.addEventListener('click', handleAdminButton);
    }

    if (tpButton) {
        tpButton.addEventListener('click', handleTpButton);
    }
});
