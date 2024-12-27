const addNoteBtn = document.querySelector("#addNote");

addNoteBtn.addEventListener("click", () => {
    const noteTag = document.querySelector("#note");
    let note = noteTag.value;

    const color = document.querySelector("#color").value;

    // validate the data
    note = note.trim();
    if (note.length == 0) {
        alert("Note cannot be empty");
        return;
    }

    const noteContainer = document.querySelector('#your-notes');

    const noteElement = document.createElement("div");

    noteElement.classList.add('note-element');
    noteElement.style.backgroundColor = color;

    let description = document.createElement("p");
    let textArea = document.createElement("textarea");
    description.innerText = note;
    // description.setAttribute('disabled', true);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    deleteBtn.addEventListener("click", () => {
        noteContainer.removeChild(noteElement);
        if (noteContainer.childElementCount == 0) {
            noteContainer.innerHTML = "<h2>No Notes</h2>";
        }
    });

    editBtn.addEventListener('click', () => {
        if (editBtn.innerText == "Edit") {
            editBtn.innerText = "Save";
            textArea.value = description.innerText;
            noteElement.replaceChild(textArea, description);
            // new,old
        } else {
            editBtn.innerText = "Edit";
            description.innerText = textArea.value;
            noteElement.replaceChild(description, textArea);
        }
    });

    noteElement.appendChild(description);
    noteElement.appendChild(deleteBtn);
    noteElement.appendChild(editBtn);

    noteContainer.appendChild(noteElement);

    noteTag.value = "";
});
// add no notes message at the first loading of the page.
