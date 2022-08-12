var today = new Date();

var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

var time = today.getHours() + ":" + today.getMinutes();

var dateTime = date + ' - ' + time;

document.getElementById('date-hour').innerHTML = dateTime;

console.log(dateTime);