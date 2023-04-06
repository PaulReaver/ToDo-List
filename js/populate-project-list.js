import projectList from './project-list.js';
import applyProjectHeader from './main-header.js';

const projectListUl = document.querySelector('.PROJECT-LIST');

export default function populateProjectList() {
    projectListUl.replaceChildren();
    for (let i = 0; i < projectList.length; i += 1) {
        const projectItem = document.createElement('li');
        projectItem.classList.add('PROJECT');
        const projectName = document.createElement('h2');
        projectName.classList.add('PROJECT__Name');
        projectName.textContent = `${projectList[i]}`;
        const projectDeleteButton = document.createElement('button');
        projectDeleteButton.classList.add('PROJECT__Delete');
        projectDeleteButton.textContent = '🗑';
        projectItem.append(projectName, projectDeleteButton);
        projectListUl.append(projectItem);
        projectName.addEventListener('click', () => {
            if (!projectItem.classList.contains('PROJECT--active')) {
                const previousActiveProject =
                    document.querySelector('.PROJECT--active');
                previousActiveProject.classList.remove('PROJECT--active');
                projectItem.classList.add('PROJECT--active');
                applyProjectHeader();
            }
        });
        projectDeleteButton.addEventListener('click', () => {
            projectList.splice(i, 1);
            populateProjectList();
        });
        if (i === projectList.length - 1) {
            projectItem.classList.add('PROJECT--active');
        }
        if (projectName.textContent === 'General') {
            projectDeleteButton.style.visibility = 'hidden';
        }
    }
    applyProjectHeader();
}
