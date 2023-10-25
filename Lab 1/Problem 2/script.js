let noteCounter = 0;


function addNote() {
    // Get the text from the input field
    const noteText = document.getElementById('note-text').value;

    // Get the selected colour from the colour picker
    const selectedcolour = document.getElementById('colour-picker').value;

    // Check if the input is not empty
    if (noteText.trim() !== '') {
        // Get the container for the notes
        const noteList = document.getElementById('note-list');

        // Create a new note
        const note = document.createElement('div');
        note.classList.add('note');

        // Set the background colour
        note.style.backgroundColor = selectedcolour;

        // Fill the note element with text
        note.innerHTML = `
            <p>${noteText}</p>
            <button class="edit-button" data-id="${noteCounter}">Edit</button>
            <button class="delete-button" data-id="${noteCounter}">Delete</button>
        `;

        // Append the note element to the container
        noteList.appendChild(note);

        // Add event listeners for edit and delete
        const editButton = note.querySelector('.edit-button');
        const deleteButton = note.querySelector('.delete-button');

        editButton.addEventListener('click', editNote);
        deleteButton.addEventListener('click', deleteNote);

        // Clear the input
        document.getElementById('note-text').value = '';

        // Increment note ID counter
        noteCounter++;
    }
}


function editNote() {
    // Get the parent note
    const note = this.parentElement;

    // Get the current text of the note
    const noteText = note.querySelector('p').textContent;

    // Prompt the user to edit the note
    const updatedNoteText = prompt('Edit the note:', noteText);

    // Update the note text
    if (updatedNoteText !== null) {
        note.querySelector('p').textContent = updatedNoteText;
    }
}


function deleteNote() {
    // Get the parent note element
    const note = this.parentElement;

    // Remove the note element
    note.remove();
}

// Add event listener for add
document.getElementById('add-button').addEventListener('click', addNote);
