document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
const title = document.getElementById('title').value;
const description = document.getElementById('description').value;
const date = document.getElementById('date').value;
console.log(date);
const note = {
    date,
    title,
    description
};

if (localStorage.getItem('notes') == null) {
let notes = [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
} else {
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}
getNotes();
document.getElementById('formTask').reset();
e.preventDefault();
}

function getNotes() {
    let notes = JSON.parse(localStorage.getItem('notes'));
    let notesView = document.getElementById('notes');
    notesView.innerHTML = '';

    for(i = 0; i < notes.length; i++) {
let title = notes[i].title;
let description = notes[i].description;
        notesView.innerHTML += `<div class="cards">
<div class="card-body">
<p class="first">${title}</p><hr>
<p class="second">${description}</p>
<button type="button" class="btn btn-danger" onclick="deleteNote('${title}')"> Delete </button>
</div>
</div>`
}
}

function deleteNote(title) {
let notes = JSON.parse(localStorage.getItem('notes'));
for (i = 0; i < notes.length; i++) {
if (notes[i].title == title) {
notes.splice(i, 1);
}
}
localStorage.setItem('notes', JSON.stringify(notes));
getNotes();
}
getNotes();
