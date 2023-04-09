const notesCategory = document.querySelector(
    '[data-attribute="notes-category"]'
);

export default function applyNotesCategory() {
    const activeProjectName =
        document.querySelector('.PROJECT--active').firstChild.textContent;
    notesCategory.textContent = activeProjectName;
}
