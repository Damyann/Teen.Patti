let tpWindow; // Променлива за съхраняване на референция към отворения раздел

function handleTpButton() {
    const url = 'tp.html'; // Пътят до новата страница

    // Проверяваме дали прозорецът вече е отворен и дали не е затворен от потребителя
    if (!tpWindow || tpWindow.closed) {
        tpWindow = window.open(url, '_blank'); // Отваря нов раздел, ако няма отворен такъв
    } else {
        tpWindow.focus(); // Ако вече е отворен, просто го фокусира
    }
}
