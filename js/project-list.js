const projectList = ['General'];

export function addProject() {
    const newProject = document.getElementById('ADD-PROJECT__Input').value;
    projectList.push(newProject);
}

export default projectList;
