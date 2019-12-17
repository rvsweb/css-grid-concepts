/* 
 Created on : 25-oct-2019, 19:43:41
 Author     : Raul Vela
 Ref        : https://stackoverflow.com/questions/3674539/incrementing-a-date-in-javascript
            : https://www.w3schools.com/js/js_random.asp
 */


var tomorrow = new Date();

for (var i = 0; i < 4; i++) {
  tomorrow.setDate(tomorrow.getDate() + (i * Math.random() * 10));
  if (i == 0) {
    tomorrow.setHours(Math.random() * 10);
    document.getElementById('establish-time-now').innerHTML = tomorrow;
  }
  if (i == 1) {
    tomorrow.setHours(Math.random() * 10);
    document.getElementById('establish-time-now-1').innerHTML = tomorrow;
  }
  if (i == 2) {
    tomorrow.setHours(Math.random() * 10);
    document.getElementById('establish-time-now-2').innerHTML = tomorrow;
  }
  if (i == 3) {
    tomorrow.setHours(Math.random() * 10);
    document.getElementById('establish-time-now-3').innerHTML = tomorrow;
  }
}

