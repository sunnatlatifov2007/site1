

document.querySelectorAll('.chosen').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('added')) {
            button.classList.remove('added');
            button.textContent = 'В избранное';
        } else {
            button.classList.add('added');
            button.textContent = 'Добавлено';
        }
    });
});








