import populateTasks from './populate-tasks';
import projectList from './project-list';

class Note {
    constructor(title, description, priority, date) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }
}

export default function addNote() {
    const activeProject = document.querySelector(
        '.project--active > .project__name'
    ).textContent;

    const title = document.getElementById('add-note__title').value.trim();
    const description = document
        .getElementById('add-note__description')
        .value.trim();
    const priority = document.getElementById('add-note__priority').value;
    const date = document.getElementById('add-note__date').value;

    const note = new Note(title, description, priority, date);
    for (let i = 0; i < projectList.length; i += 1) {
        if (activeProject === projectList[i].name) {
            projectList[i].tasks.push(note);
            populateTasks();
            return;
        }
    }
}
