//lo que quiero hacer es una app que sea diario personal, que la persona pueda escribir sus sentimientos, y guardarlos en esta "libreta" virtual, y que pueda regresar a una fecha en específico para poder recordar algún momento, o eliminarlo.
//para poder function addNote() {
 //       var updateElement = document.getElementsByClassName("btn");
        //toggle adds a class if it's not there or removes it if it is.
   //       document.getElementById("button").classList.toggle("added");
    //}

//function getDate() {
//var newDate = document.querySelector('added').value;

//}

let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = month[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;

document.getElementById("date").textContent = fulldate;

//para llenar el select
function addSelect() {
    const note = document.getElementById('input-title').value;
const select = document.getElementById('notes');
for (i = 0; i < note; i++) { 
select.options[i] = new Option(note);
}
};
        
