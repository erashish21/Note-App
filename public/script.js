const apiUrl = 'http://localhost:3000/api/notes';

async function saveNote() {
    const noteInput = document.getElementById('noteInput');
    const content = noteInput.value.trim();
    if (!content) return alert('Note cannot be empty');

    try {
        await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });
        noteInput.value = '';
        listNotes();
    } catch (error) {
        alert('Failed to save note');
    }
}

async function listNotes() {
    try {
        const response = await fetch(apiUrl);
        const notes = await response.json();
        const noteList = document.getElementById('noteList');
        noteList.innerHTML = '';
        notes.forEach(note => {
            const li = document.createElement('li');
            li.textContent = note.content;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            deleteButton.onclick = () => deleteNote(note.id);
            li.appendChild(deleteButton);
            noteList.appendChild(li);
        });
    } catch (error) {
        alert('Failed to list notes');
    }
}

async function deleteNote(id) {
    try {
        await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
        listNotes();
    } catch (error) {
        alert('Failed to delete note');
    }
}
