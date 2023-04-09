const projectList = ['General'];

export function addProject() {
    const newProject = document.getElementById('add-project__input').value;
    projectList.push(newProject);
}

export default projectList;
