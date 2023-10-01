// Import CSS files
import '../css/reset.css';
import '../css/style.css';

// Import modules
import populateProjectList from './populate-project-list';
import { addProject } from './project-list';
import autoResizeDescription from './auto-resize-description';
import { priorityReset, descriptionHeightReset } from './add-note-form-reset';
import addNote from './add-note';

const addProjectForm = document.querySelector('.add-project');
const addNoteDescription = document.querySelector('#add-note__description');
const addNoteForm = document.querySelector('.add-note');

addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addProject();
    populateProjectList();
    addProjectForm.reset();
});

addNoteDescription.addEventListener('input', autoResizeDescription);

addNoteForm.addEventListener('reset', () => {
    priorityReset();
    descriptionHeightReset();
});

addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNote();
    addNoteForm.reset();
    document.activeElement.blur();
});

populateProjectList();
