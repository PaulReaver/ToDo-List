// Import CSS files
import '../css/reset.css';
import '../css/style.css';

// Import modules
import populateProjectList from './populate-project-list';
import { addProject } from './project-list';

document.addEventListener('submit', (e) => {
    e.preventDefault();
    addProject();
});

populateProjectList();
