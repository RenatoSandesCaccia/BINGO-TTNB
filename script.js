let markedNumbers = new Set();
let currentCard = [];

// Genera todos los números del 1 al 90 organizados por filas
function generateBingoNumbers() {
    const numbers = [];
    for (let i = 1; i <= 90; i++) {
        numbers.push(i);
    }
    return numbers;
}

// Crea la cuadrícula del bingo organizada por columnas (1-10 vertical)
function createBingoGrid() {
    const grid = document.getElementById('bingoGrid');
    grid.innerHTML = '';

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 9; col++) {
            const number = col * 10 + row + 1; // Calcula el número correcto para cada columna
            const gridIndex = row * 9 + col;

            const cell = document.createElement('div');
            cell.className = 'bingo-number';
            cell.textContent = number;
            cell.setAttribute('data-number', number);
            cell.addEventListener('click', () => toggleNumber(number, gridIndex));
            grid.appendChild(cell);
        }
    }

}

// Marca o desmarca un número
function toggleNumber(number, gridIndex) {
    const cells = document.querySelectorAll('.bingo-number');
    const cell = cells[gridIndex];

    if (markedNumbers.has(number)) {
        markedNumbers.delete(number);
        cell.classList.remove('marked');
    } else {
        markedNumbers.add(number);
        cell.classList.add('marked');
    }
}

// Reinicia el bingo (limpia todas las marcas)
function resetBingo() {
    markedNumbers.clear();
    const cells = document.querySelectorAll('.bingo-number');
    cells.forEach(cell => {
        cell.classList.remove('marked');
    });
}

// Inicializa el juego
function init() {
    currentCard = generateBingoNumbers();
    createBingoGrid();
}

// Inicia el juego cuando se carga la página
init();

// Reiniciar bingo solo con la tecla 'r'
document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'r') {
        resetBingo();
    }
    if (e.key.toLowerCase() === 'b') {
        const bingoMsg = document.getElementById('bingo-message');
        const logoRain = document.querySelector('.logo-rain');
        const bingoText = document.querySelector('.bingo-text');
        if (bingoMsg.style.display !== 'flex') {
            bingoMsg.style.display = 'flex';
            bingoText.textContent = 'BINGO';
            bingoText.removeAttribute('data-dado'); // Quita el atributo especial
            logoRain.innerHTML = '';
            for (let i = 0; i < 40; i++) {
                const drop = document.createElement('img');
                drop.src = '/img/Logo_General.png';
                drop.className = 'logo-drop';
                drop.style.left = Math.random() * 100 + 'vw';
                drop.style.top = -80 + 'px';
                drop.style.width = (40 + Math.random() * 40) + 'px';
                drop.style.height = drop.style.width;
                drop.style.opacity = 0.7 + Math.random() * 0.3;
                drop.style.animationDelay = (Math.random() * 2) + 's';
                drop.style.animationDuration = (2 + Math.random() * 2) + 's';
                logoRain.appendChild(drop);
            }
        } else {
            bingoMsg.style.display = 'none';
            logoRain.innerHTML = '';
        }
    }
    if (e.key.toLowerCase() === 'd') {
        const bingoMsg = document.getElementById('bingo-message');
        const logoRain = document.querySelector('.logo-rain');
        const bingoText = document.querySelector('.bingo-text');
        if (bingoMsg.style.display !== 'flex') {
            bingoMsg.style.display = 'flex';
            bingoText.innerHTML = 'TRAVESTI<br>DADO';
            bingoText.setAttribute('data-dado', 'true'); // Aplica el atributo especial
            logoRain.innerHTML = '';
            for (let i = 0; i < 30; i++) {
                const drop = document.createElement('img');
                drop.src = '/img/Logo_General.png';
                drop.className = 'logo-drop reverse-drop';
                drop.style.left = Math.random() * 100 + 'vw';
                drop.style.bottom = -70 + 'px';
                drop.style.width = (20 + Math.random() * 20) + 'px';
                drop.style.height = drop.style.width;
                drop.style.opacity = 0.5 + Math.random() * 0.1;
                drop.style.animationDelay = (Math.random() * 2) + 's';
                drop.style.animationDuration = (2 + Math.random() * 2) + 's';
                logoRain.appendChild(drop);
            }
        } else {
            bingoMsg.style.display = 'none';
            logoRain.innerHTML = '';
        }
    }
});
