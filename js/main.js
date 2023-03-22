// Import CSS files
import '../css/reset.css';
import '../css/style.css';

// Import modules
import populateProjectList from './populate-project-list';

const submitProjectInput = document.querySelector('#submit-project-input');
submitProjectInput.addEventListener('submit', (e) => {
    e.preventDefault();
});

populateProjectList();
