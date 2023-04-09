const notesCategory = document.querySelector('h2.notes-category');

export default function applyNotesCategory() {
    const activeProjectName =
        document.querySelector('.project--active').firstChild.textContent;
    notesCategory.textContent = activeProjectName;
}
