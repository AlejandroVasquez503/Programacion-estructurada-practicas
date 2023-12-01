const btnNew = document.getElementById("btn");
const appNote = document.getElementById("app");

//cargar las notas existentes al cargar la pagina
getNotes().forEach((note) => {
    const noteNew = createNote(note.id, note.content);
        appNote.insertBefore(noteNew, btnNew);
});
//crear un elemento de nota con eventos y funcionalidad 

function createNote(id, content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Crea una nota";
    element.value = content;

    element.addEventListener("dblclick", () =>{
        const warning = confirm("Quieres eliminar esta nota?");
        if (warning) {
            deleteNote(id, element);
        }
    });
    //evento d enetrada para actualizar el contenido de la nota
    element.addEventListener("input", () => {
    updateNote(id, element.value);
    });

    return element;
}

function deleteNote(id, element){
    const notes = getNotes().filter((note) => note.id !== id);
    saveNote(notes),
    element.remove(); //eliminar del DOM directamente
}

//Actualizar el contenid d euna nota por su ID
function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.find((note) => note.id == id);
    target.content = content;
    saveNote(notes);
}

// Agregar una nueva nota al hacer click en el boton
function addNote() {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    };
    const noteNew = createNote(noteObj.id, noteObj.content);
    appNote.insertBefore(noteNew, btnNew);
    notes.push(noteObj);
    saveNote(notes);
}

function saveNote(notes){
    localStorage.setItem("note-app" , JSON.stringify(notes));
}

//obtener las notas en el almacenamiento local
function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]" );
}

//Eventos de click en el boton para agregar una nueva nota
btnNew.addEventListener("click", addNote);