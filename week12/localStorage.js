//lo que quiero hacer es una app que sea diario personal, que la persona pueda escribir sus sentimientos, y guardarlos en esta "libreta" virtual, y que pueda regresar a una fecha en específico para poder recordar algún momento, o eliminarlo.
//para poder function addNote() {
 //       var updateElement = document.getElementsByClassName("btn");
        //toggle adds a class if it's not there or removes it if it is.
   //       document.getElementById("button").classList.toggle("added");
    //}

//function getDate() {
//var newDate = document.querySelector('added').value;

//}


function addSelect() {
    const note = document.getElementById('new').value;
const select = document.getElementById('notes');
const date = document.getElementById('date').value;

for (i = 0; i < note.length; i++) {
select.options[i] = new Option(date + ': ' + note);
}
};
        
