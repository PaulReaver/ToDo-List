import projectList from './project-list.js';
import applyNotesCategory from './notes-category.js';
import populateTasks from './populate-tasks.js';
import { saveToLocalStorage } from './local-storage.js';

const projectListUl = document.querySelector('#project-list');

export default function populateProjectList() {
    // Avoid re-rendering if there are no changes
    if (projectListUl.children.length === projectList.length) return;

    projectListUl.replaceChildren(); // Clear the existing list

    const projectListLength = projectList.length;

    // Create the list items for the projects
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

        // Mark the first item as active
        if (i === 0) {
            projectItem.classList.add('project--active');
            populateTasks();
        }

        // Hide delete button for the 'General' project
        if (projectName.textContent === 'General') {
            projectDeleteButton.style.visibility = 'hidden';
        }
    }

    applyNotesCategory();

    // Event delegation for click events on project name and delete button
    projectListUl.addEventListener('click', (event) => {
        const projectItem = event.target.closest('.project');

        // Ensure we're dealing with a valid project item
        if (!projectItem) return;

        const projectName = projectItem.querySelector('.project__name');
        const projectDeleteButton =
            projectItem.querySelector('.project__delete');

        // Handling click on project name
        if (event.target === projectName) {
            // Avoid toggling if already active
            if (!projectItem.classList.contains('project--active')) {
                const previousActiveProject =
                    document.querySelector('.project--active');
                if (previousActiveProject) {
                    previousActiveProject.classList.remove('project--active');
                }
                projectItem.classList.add('project--active');
                applyNotesCategory();
                populateTasks();
            }
        }

        // Handling click on delete button
        if (event.target === projectDeleteButton) {
            const projectIndex = Array.from(projectListUl.children).indexOf(
                projectItem
            );

            // Check if the project exists in the list before deleting it
            if (projectIndex >= 0 && projectIndex < projectList.length) {
                projectList.splice(projectIndex, 1);
                saveToLocalStorage('projects', projectList);
                populateProjectList(); // Re-render the project list
            }
        }
    });
}
