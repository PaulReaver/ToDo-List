import projectList from './project-list.js';

const projectListUl = document.querySelector('.project-list-ul');

export default function populateProjectList() {
    projectListUl.replaceChildren();
    for (let i = 0; i < projectList.length; i += 1) {
        const li = document.createElement('li');
        li.classList.add('project-item');
        const projectName = document.createElement('h2');
        projectName.classList.add('project-name');
        projectName.textContent = `${projectList[i]}`;
        const projectDeleteButton = document.createElement('button');
        projectDeleteButton.classList.add('project-delete-button');
        projectDeleteButton.textContent = '🗑';
        li.append(projectName, projectDeleteButton);
        projectListUl.append(li);
        projectName.addEventListener('click', () => {
            if (projectName.classList !== 'active-project') {
                const previousActiveProject =
                    document.querySelector('.active-project');
                previousActiveProject.classList.remove('active-project');
                projectName.classList.add('active-project');
                const previousProjectDeleteButton = document.querySelector(
                    '.active-project-delete-button'
                );
                previousProjectDeleteButton.classList.remove(
                    'active-project-delete-button'
                );
                projectDeleteButton.classList.add(
                    'active-project-delete-button'
                );
            }
        });
        if (i === projectList.length - 1) {
            projectName.classList.add('active-project');
            projectDeleteButton.classList.add('active-project-delete-button');
        }
        if (projectName.textContent === 'General') {
            projectDeleteButton.style.visibility = 'hidden';
        }
    }
}
