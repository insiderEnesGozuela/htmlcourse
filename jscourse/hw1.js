var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

function start() {
  var name = document.getElementById("name-input").value;
  if (!name) return;

  document.getElementById("input-screen").style.display = "none";
  document.getElementById("greeting-screen").style.display = "block";
  document.getElementById("greeting").textContent = "Merhaba, " + name + "!";

  updateClock();
  setInterval(updateClock, 1000);
}

function updateClock() {
  var now = new Date();
  var hours = String(now.getHours()).padStart(2, "0");
  var minutes = String(now.getMinutes()).padStart(2, "0");
  var seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clock").textContent = hours + ":" + minutes + ":" + seconds;
  document.getElementById("day").textContent = days[now.getDay()];
}
