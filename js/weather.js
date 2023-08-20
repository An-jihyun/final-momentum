const weather = document.querySelector(".weather");
const city = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const iconImg = document.querySelector(".weatherIcon");
const API_KEY = "530ec2af3ce5dd5a947e5f9240e6b1ce";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
      const weatherImg = data.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/wn/${weatherImg}@2x.png`;
      iconImg.setAttribute("src", iconURL);
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
