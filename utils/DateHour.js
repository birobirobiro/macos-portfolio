var today = new Date();

var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

var time = today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes();

var dateTime = date + ' - ' + time;

document.getElementById('date-hour').innerHTML = dateTime;