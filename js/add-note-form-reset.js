const addNotePriority = document.querySelector('select');
const addNoteDescription = document.querySelector('#add-note__description');

export function priorityReset() {
    addNotePriority.setAttribute('data-chosen', 'Low');
}

export function descriptionHeightReset() {
    addNoteDescription.style.height = '58px';
}
