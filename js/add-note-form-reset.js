const addNotePriority = document.querySelector('select');
const addNoteDescription = document.querySelector('#add-note__description');

// Resets the priority to the default "Low".
export function resetPriorityToDefault() {
    addNotePriority.setAttribute('data-chosen', 'Low');
}

// Resets the height of the description textarea to its default height (58px).
export function descriptionHeightReset() {
    addNoteDescription.style.height = '58px';
}
