import projectList from './project-list.js';

const projectListUl = document.querySelector('.project-list-ul');

export default function populateProjectList() {
    projectListUl.replaceChildren();
    for (let i = 0; i < projectList.length; i += 1) {
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-item');
        const projectName = document.createElement('h2');
        projectName.classList.add('project-name');
        projectName.textContent = `${projectList[i]}`;
        const projectDeleteButton = document.createElement('button');
        projectDeleteButton.classList.add('project-delete-button');
        projectDeleteButton.textContent = '🗑';
        projectItem.append(projectName, projectDeleteButton);
        projectListUl.append(projectItem);
        projectName.addEventListener('click', () => {
            if (projectItem.classList !== 'active-project-item') {
                const previousActiveProject = document.querySelector(
                    '.active-project-item'
                );
                previousActiveProject.classList.remove('active-project-item');
                projectItem.classList.add('active-project-item');
            }
        });
        if (i === projectList.length - 1) {
            projectItem.classList.add('active-project-item');
        }
        if (projectName.textContent === 'General') {
            projectDeleteButton.style.visibility = 'hidden';
        }
    }
}
