const API_KEY = "8c0fb31e57cd37c10ed7123a6803658e";

function onGoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.body.querySelector("#weather span:first-child");
      const city = document.body.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = `${data.name}(${data.sys["country"]})`;
    });
}
function onGoError(position) {
  alert("Can't find you. No wheather for you. 🥲");
}

navigator.geolocation.getCurrentPosition(onGoOk, onGoError);
