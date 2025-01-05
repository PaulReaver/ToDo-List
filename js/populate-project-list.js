import projectList from './project-list.js';
import applyNotesCategory from './notes-category.js';
import populateTasks from './populate-tasks.js';

const projectListUl = document.querySelector('#project-list');

export default function populateProjectList() {
    projectListUl.replaceChildren();
    const projectListLength = projectList.length;
    for (let i = 0; i < projectListLength; i += 1) {
        const projectItem = document.createElement('li');
        projectItem.classList.add('project');
        const projectName = document.createElement('h2');
        projectName.classList.add('project__name');
        projectName.textContent = `${projectList[i].name}`;
        const projectDeleteButton = document.createElement('button');
        projectDeleteButton.classList.add('project__delete');
        projectDeleteButton.textContent = '🗑';
        projectItem.append(projectName, projectDeleteButton);
        projectListUl.append(projectItem);
        projectName.addEventListener('click', () => {
            if (!projectItem.classList.contains('project--active')) {
                const previousActiveProject =
                    document.querySelector('.project--active');
                previousActiveProject.classList.remove('project--active');
                projectItem.classList.add('project--active');
                applyNotesCategory();
                populateTasks();
            }
        });
        projectDeleteButton.addEventListener('click', () => {
            projectList.splice(i, 1);
            populateProjectList();
        });
        if (i === projectList.length - 1) {
            projectItem.classList.add('project--active');
            populateTasks();
        }
        if (projectName.textContent === 'General') {
            projectDeleteButton.style.visibility = 'hidden';
        }
    }
    applyNotesCategory();
}
