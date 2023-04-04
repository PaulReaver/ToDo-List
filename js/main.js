// Import CSS files
import '../css/reset.css';
import '../css/style.css';

// Import modules
import populateProjectList from './populate-project-list';
import { addProject } from './project-list';

const addProjectForm = document.querySelector('.ADD-PROJECT');

addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addProject();
    populateProjectList();
    addProjectForm.reset();
});

populateProjectList();
