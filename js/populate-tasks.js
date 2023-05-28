import projectList from './project-list';

const notesTasks = document.querySelector('#notes-tasks');

export default function populateTasks() {
    const activeProject = document.querySelector(
        '.project--active > .project__name'
    ).textContent;

    notesTasks.replaceChildren();

    for (let i = 0; i < projectList.length; i += 1) {
        if (projectList[i].name === activeProject) {
            // eslint-disable-next-line no-console
            console.log(`The notes of ${projectList[i].name} are:`);
            // eslint-disable-next-line no-console
            console.log(projectList[i].tasks);
            return;
        }
    }
}
