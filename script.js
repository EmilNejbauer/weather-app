const city = document.getElementById("weather-city");
const description = document.getElementById("weather-description");
const image = document.getElementById("weather-image");
let weather = {
    city: '',
    country: '',
    description: '',
    temp: 0
}

function getWeather() {
    let city = document.getElementById("city").value;
    console.log(city);
    fetchWeather(city);
}

function fetchWeather(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        weather.city = data.name;
        weather.country = data.sys.country;
        weather.description = data.weather[0].main;
        weather.temp = data.main.temp;
        console.log(weather);
        city.innerHTML = `${weather.city}, ${weather.country}`;
        description.innerHTML = `${weather.description} ${weather.temp.toFixed(0)}&#8451;`;
    });
}

fetchWeather('warsaw');