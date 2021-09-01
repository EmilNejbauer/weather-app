const icons = {
  THUNDERSTORM:
    "https://img.icons8.com/fluency-systems-regular/256/000000/storm.png",
  DRIZZLE:
    "https://img.icons8.com/fluency-systems-regular/256/000000/light-rain.png",
  RAIN: "https://img.icons8.com/fluency-systems-regular/256/000000/rain--v1.png",
  SNOW: "https://img.icons8.com/fluency-systems-regular/256/000000/snow.png",
  CLEAR: "https://img.icons8.com/fluency-systems-regular/256/000000/summer.png",
  CLOUDS:
    "https://img.icons8.com/fluency-systems-regular/256/000000/clouds.png",
  OTHER:
    "https://img.icons8.com/fluency-systems-regular/256/000000/foggy-night-1.png",
};

const city = document.getElementById("weather-city");
const description = document.getElementById("weather-description");
const image = document.getElementById("weather-image");
const alertPlaceholder = document.getElementById("alert-placeholder");

function getWeather() {
  const city = document.getElementById("city").value;
  if (city) {
    fetchWeather(city);
  }
}

function fetchWeather(location) {
  fetch(`http://localhost:3000/?city=${location}`)
    .then((response) => response.json())
    .then((data) => {
      city.innerHTML = `${data.name}, ${data.sys.country}`;
      description.innerHTML = `${data.weather[0].main} ${data.main.temp.toFixed(
        0
      )}&#8451;`;
      setImage(data.weather[0].main);
      alertPlaceholder.innerHTML = "";
    })
    .catch(function () {
      alertPlaceholder.innerHTML = `<div class="alert alert-danger" role="alert">
      Sorry, could not find that city
    </div>`;
    });
}

function setImage(weather) {
  switch (weather) {
    case "Thunderstorm":
      image.src = icons.THUNDERSTORM;
      break;
    case "Drizzle":
      image.src = icons.DRIZZLE;
      break;
    case "Rain":
      image.src = icons.RAIN;
      break;
    case "Snow":
      image.src = icons.SNOW;
      break;
    case "Clear":
      image.src = icons.CLEAR;
      break;
    case "Clouds":
      image.src = icons.CLOUDS;
      break;
    default:
      image.src = icons.OTHER;
      break;
  }
}

fetchWeather("warsaw");
