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
    }
}
