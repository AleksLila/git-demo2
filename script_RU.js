function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clockElement.textContent = 'Current time: ' + timeString;
}

function updateCalendar() {
    const calendarElement = document.getElementById('calendar');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    /*const dateString = now.toLocaleDateString(undefined, options);*/
    const dateString = now.toLocaleDateString('en-US', options);
    calendarElement.textContent = 'Today: ' + dateString;
    
}

// Оновлюємо годинник і календар автоматично кожну секунду
setInterval(updateClock, 1000);
updateClock(); // Викликаємо функцію одразу, щоб відобразити час на старті

updateCalendar(); // Викликаємо функцію одразу, щоб відобразити дату на старті
