import projectList from './project-list';
import autoResizeDescription from './auto-resize-description';

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
                noteTitle.setAttribute('name', `note-title${j}`);
                noteTitle.value = projectList[i].tasks[j].title;
                noteTitle.onblur = () => {
                    if (projectList[i].tasks[j].title !== noteTitle.value) {
                        projectList[i].tasks[j].title = noteTitle.value;
                    }
                };

                // create description
                const noteDescription = document.createElement('textarea');
                noteDescription.classList.add('note__description');
                noteDescription.setAttribute('name', `note-description${j}`);
                noteDescription.value = projectList[i].tasks[j].description;
                noteDescription.addEventListener(
                    'input',
                    autoResizeDescription
                );
                noteDescription.onblur = () => {
                    if (
                        projectList[i].tasks[j].description !==
                        noteDescription.value
                    ) {
                        projectList[i].tasks[j].description =
                            noteDescription.value;
                    }
                };

                // create bottom section
                const bottomSection = document.createElement('div');
                bottomSection.classList.add('note__bottom-section');

                // create priority label
                const priorityLabel = document.createElement('label');
                priorityLabel.setAttribute('for', `note__priority${j}`);
                priorityLabel.textContent = 'Priority: ';

                // create priority selection
                const notePriority = document.createElement('select');
                notePriority.setAttribute('id', `note__priority${j}`);
                notePriority.setAttribute('name', `note__priority${j}`);
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
                if (projectList[i].tasks[j].priority === 'Low') {
                    notePriority.selectedIndex = '0';
                } else if (projectList[i].tasks[j].priority === 'Medium') {
                    notePriority.selectedIndex = '1';
                } else if (projectList[i].tasks[j].priority === 'High') {
                    notePriority.selectedIndex = '2';
                }

                notePriority.onblur = () => {
                    if (
                        projectList[i].tasks[j].priority !== notePriority.value
                    ) {
                        projectList[i].tasks[j].priority = notePriority.value;
                    }
                };

                // create date label
                const dateLabel = document.createElement('label');
                dateLabel.setAttribute('for', `note__date${j}`);
                dateLabel.textContent = 'Due Date: ';

                // create date selection
                const noteDate = document.createElement('input');
                noteDate.setAttribute('type', 'date');
                noteDate.setAttribute('name', `note__date${j}`);
                noteDate.setAttribute('id', `note__date${j}`);
                noteDate.value = projectList[i].tasks[j].date;

                noteDate.onblur = () => {
                    if (projectList[i].tasks[j].date !== noteDate.value) {
                        projectList[i].tasks[j].date = noteDate.value;
                    }
                };

                // create handles section
                const handles = document.createElement('div');
                handles.classList.add('note__handles');

                // create delete note button
                const noteDeleteButton = document.createElement('button');
                noteDeleteButton.classList.add('note__delete');
                noteDeleteButton.textContent = '🗑';
                noteDeleteButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    projectList[i].tasks.splice(j, 1);
                    populateTasks();
                });

                priorityLabel.append(notePriority);
                dateLabel.append(noteDate);
                bottomSection.append(priorityLabel, dateLabel);
                handles.append(noteDeleteButton);
                note.append(noteTitle, noteDescription, bottomSection, handles);
                notesTasks.append(note);
            }

            return;
        }
    }
}
