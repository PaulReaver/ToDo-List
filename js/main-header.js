const mainHeader = document.querySelector('.MAIN__Header');

export default function applyProjectHeader() {
    const activeProjectName =
        document.querySelector('.PROJECT--active').firstChild.textContent;
    mainHeader.textContent = activeProjectName;
}
