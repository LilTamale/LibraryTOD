// Display the form when the add a book button is clicked

const displayButton = document.getElementById('add-a-book');

displayButton.addEventListener('click', () => {
    const addForm = document.getElementById('form-submission')

    addForm.style.display = 'block';

});