// Import CSS files
import '../css/reset.css';
import '../css/style.css';

// Import modules
import populateProjectList from './populate-project-list';
import { addProject } from './project-list';
import autoResizeDescription from './auto-resize-description';

const addProjectForm = document.querySelector('.add-project');
const addNoteDescription = document.querySelector('#add-note__description');

addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addProject();
    populateProjectList();
    addProjectForm.reset();
});

addNoteDescription.addEventListener('input', autoResizeDescription);

populateProjectList();
