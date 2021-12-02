// need an id countdown in HTML

var dday = new Date("October 14, 2019 08:00:00").getTime();
var d = document.getElementById("days");
var h = document.getElementById("hours");
var m = document.getElementById("mins");
var s = document.getElementById("sec");
var cd = document.getElementById("countdown-text");
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = dday - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  d.innerHTML = days + " days ";
  h.innerHTML = hours + " hours ";
  m.innerHTML = minutes + " mins ";
  s.innerHTML = seconds + " sec";

  if (distance <= 0) {
    clearInterval(x);
    cd.innerHTML = "It's here.";
  }
}, 1000);
