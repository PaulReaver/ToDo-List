const mainHeader = document.querySelector('.MAIN__Header-Title');

export default function applyProjectHeader() {
    const activeProjectName =
        document.querySelector('.PROJECT--active').firstChild.textContent;
    mainHeader.textContent = activeProjectName;
}
