const input = document.querySelector("input");
const table = document.querySelector("table");
const button = document.querySelector("button");

function addNote() {
    const file = document.createElement("tr");
    file.innerHTML = `
    <td><input type="checkbox" onClick="complete()" /></td>
    <td style="flex-grow: 2"> ${input.value} </td>
    <td> <span onClick="borrar()"> X </span> </td>
    `;
    table.appendChild(file);
}

button.addEventListener('click', function(e){
        addNote();
});

function borrar(event){
    this.event.target.parentElement.parentElement.remove();
}

function complete(event){
    if(this.event.target.checked){
        this.event.target.parentElement.parentElement.classList.add("complete");

    } else {
        this.event.target.parentElement.parentElement.classList.remove("complete");
    }
    }


