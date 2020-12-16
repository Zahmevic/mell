const m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const dates = document.getElementById('dates');
const month = document.getElementById('month');
const year = document.getElementById('year');

const prev = document.getElementById('prev-month');
const next = document.getElementById('next-month');

month.textContent = m[monthNumber];
year.textContent = currentYear.toString();

prev.addEventListener('click', ()=>lastMonth());
next.addEventListener('click', ()=>nextMonth());

writeMonth(monthNumber);

function writeMonth(month) {
for(i = startDay(); i>0; i--) {
    dates.innerHTML +=` <div class="calendar-date calendar-item last-days">${getTotalDays(monthNumber-1)-(i-1)}</div>`;   
}
for(i = 1; i <= getTotalDays(month); i++) {
    if(i === currentDay) {
    dates.innerHTML +=` <div class="calendar-date calendar-item today">${i}</div>`;
} else {
    dates.innerHTML +=` <div class="calendar-date calendar-item">${i}</div>`;
}
}
}
function getTotalDays (month) {
if(month === -1) month = 11;
if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
    return 31;
} else if( month == 3 || month == 5 || month == 8 || month == 10) {
    return 30;
} else {
    return isLeap() ? 29:28;
}
}

function isLeap() {
return ((currentYear %100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

function startDay() {
let start = new Date(currentYear, monthNumber, 1);
return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

function lastMonth() {
if(monthNumber !== 0){
    monthNumber--;
} else {
    monthNumber = 11;
    currentYear--;
}
setNewDate();
}

function nextMonth() {
    if(monthNumber !== 11){
        monthNumber++;
    } else {
        monthNumber = 0;
        currentYear++;
    }
    setNewDate();
}

function setNewDate() {
currentDate.setFullYear(currentYear, monthNumber, currentDay);
month.textContent = m[monthNumber];
year.textContent = currentYear.toString();
dates.textContent = '';
writeMonth(monthNumber);
}
