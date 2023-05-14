const projectList = [];

class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
}

const general = new Project('General');
projectList.push(general);

export function addProject() {
    const newProjectName = document.getElementById('add-project__input').value;
    const newProject = new Project(newProjectName);

    projectList.push(newProject);
}

export default projectList;
