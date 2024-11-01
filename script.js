const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Mudar para Modo Claro';
    } else {
        themeToggleButton.textContent = 'Mudar para Modo Escuro';
    }
});
