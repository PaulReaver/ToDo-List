const projectList = ['General'];

export function addProject() {
    const newProject = document.getElementById('add-project-input').value;
    projectList.push(newProject);
}

export default projectList;
