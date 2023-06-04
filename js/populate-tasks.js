import projectList from './project-list';

const notesTasks = document.querySelector('#notes-tasks');

export default function populateTasks() {
    const activeProject = document.querySelector(
        '.project--active > .project__name'
    ).textContent;

    notesTasks.replaceChildren();

    for (let i = 0; i < projectList.length; i += 1) {
        if (projectList[i].name === activeProject) {
            for (let j = 0; j < projectList[i].tasks.length; j += 1) {
                // create the form
                const note = document.createElement('form');
                note.classList.add('note');

                // create title
                const noteTitle = document.createElement('input');
                noteTitle.setAttribute('type', 'text');
                noteTitle.classList.add('note__title');
                noteTitle.value = projectList[i].tasks[j].title;

                // create description
                const noteDescription = document.createElement('textarea');
                noteDescription.classList.add('note__description');
                noteDescription.value = projectList[i].tasks[j].description;

                // create bottom section
                const bottomSection = document.createElement('div');
                bottomSection.classList.add('note__bottom-section');

                // create priority label
                const priorityLabel = document.createElement('label');
                priorityLabel.setAttribute('for', 'note__priority');
                priorityLabel.textContent = 'Priority';

                // create priority selection
                const notePriority = document.createElement('select');
                notePriority.classList.add('note__priority');
                notePriority.setAttribute('name', 'note__priority');
                notePriority.dataset.chosen = projectList[i].tasks[j].priority;
                notePriority.onchange = function change() {
                    this.dataset.chosen = this.value;
                };

                const option1 = document.createElement('option');
                const option2 = document.createElement('option');
                const option3 = document.createElement('option');
                option1.value = 'Low';
                option1.text = 'Low';
                option2.value = 'Medium';
                option2.text = 'Medium';
                option3.value = 'High';
                option3.text = 'High';

                notePriority.append(option1, option2, option3);
                if (projectList[i].tasks[j].priority === 'low') {
                    notePriority.selectedIndex = '0';
                } else if (projectList[i].tasks[j].priority === 'medium') {
                    notePriority.selectedIndex = '1';
                } else if (projectList[i].tasks[j].priority === 'high') {
                    notePriority.selectedIndex = '2';
                }

                priorityLabel.append(notePriority);
                bottomSection.append(priorityLabel);
                note.append(noteTitle, noteDescription, bottomSection);
                notesTasks.append(note);
            }

            return;
        }
    }
}
