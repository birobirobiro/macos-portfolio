var today = new Date();

var date = today.getDate() + '/' + (today.getMonth() + 1).toString().padStart(2, '0') + '/' + today.getFullYear();

var time = today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes() + ":" + today.getSeconds().toString().padStart(2, '0');

var dateTime = date + ' - ' + time;

document.getElementById('date-hour').innerHTML = dateTime;