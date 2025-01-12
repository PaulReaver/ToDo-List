import { saveToLocalStorage, loadFromLocalStorage } from './local-storage.js';

const projectList = loadFromLocalStorage('projects') || [];

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
}

if (projectList.length === 0) {
    const general = new Project('General');
    projectList.push(general);
}

export function addProject() {
    const newProjectName = document.getElementById('add-project__input').value;
    const newProject = new Project(newProjectName);

    projectList.push(newProject);
    saveToLocalStorage('projects', projectList);
}

export default projectList;
