// require("dotenv").config({ path: "../../keychain/keychain.env" });

// console.log(process.env.WEATHER_KEY);

const WEATHER_KEY = "a07ecaba27d5b0a33308e8ee9992d95e";

const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=25.8784&lon=-80.1256&appid=${WEATHER_KEY}&units=imperial`;
const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=25.8784&lon=-80.1256&appid=${WEATHER_KEY}&units=imperial`;

async function fetchWeather() {
  try {
    const response = await fetch(weatherApiUrl);
    const data = await response.json();
    displayCurrentWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(forecastApiUrl);
    const data = await response.json();
    displayForecast(data);
    // console.log(data);
  } catch (error) {
    console.error("Error fetching forecast data:", error);
  }
}

function convertToEST(timestamp, isSunrise) {
  let epochTime;
  let rise;
  if (isSunrise) {
    epochTime = timestamp.sys.sunrise;
    rise = "sunrise";
  } else {
    epochTime = timestamp.sys.sunset;
    rise = "sunset";
  }

  let localTime = epochTime;
  const localDate = new Date(localTime * 1000);

  return localDate;
}

const weatherSection = document.querySelector("#weather-info");
const forecastSection = document.querySelector("#forecast-info");

const displayCurrentWeather = (weatherData) => {
  const weatherIconURL = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  const weatherIcon = document.createElement("img");
  weatherIcon.setAttribute("src", weatherIconURL);
  weatherIcon.setAttribute("alt", weatherData.weather[0].description);
  weatherIcon.setAttribute("loading", "lazy");
  weatherIcon.setAttribute("width", "50");
  weatherIcon.setAttribute("height", "50");
  weatherIcon.classList.add("weather-icon");

  const weatherText = document.createElement("div");
  weatherText.classList.add("weather-text");
  const temperature = document.createElement("p");
  temperature.innerHTML = `<strong>${Math.round(weatherData.main.temp)}&deg;</strong>F`;
  const description = document.createElement("p");
  description.textContent = weatherData.weather[0].description;
  description.style.textTransform = "capitalize";
  const highTemp = document.createElement("p");
  highTemp.innerHTML = `High: ${Math.round(weatherData.main.temp_max)}&deg;F`;
  const lowTemp = document.createElement("p");
  lowTemp.innerHTML = `Low: ${Math.round(weatherData.main.temp_min)}&deg;F`;
  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;

  const sunrise = document.createElement("p");
  const sunriseTime = convertToEST(weatherData, true);
  sunrise.textContent = `Sunrise: ${sunriseTime.toLocaleTimeString()}`;

  const sunset = document.createElement("p");
  const sunsetTime = convertToEST(weatherData, false);
  sunset.textContent = `Sunset: ${sunsetTime.toLocaleTimeString()}`;

  const todayForecast = document.createElement("p");
  todayForecast.innerHTML = `Today: <strong>${Math.round(weatherData.main.temp)}&deg;</strong>F`;
  forecastSection.appendChild(todayForecast);
  weatherSection.appendChild(weatherIcon);
  weatherText.appendChild(temperature);
  weatherText.appendChild(description);
  weatherText.appendChild(highTemp);
  weatherText.appendChild(lowTemp);
  weatherText.appendChild(humidity);
  weatherText.appendChild(sunrise);
  weatherText.appendChild(sunset);
  weatherSection.appendChild(weatherText);
};

const displayForecast = (forecastData) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const todayDate = today.getDate();
  const dayOfWeekNumber = today.getDay();
  const tomorrowDate = todayDate + 1;
  const tomorrowDayOfWeekName = days[(dayOfWeekNumber + 1) % 7];
  const dayAfterTomorrowDate = todayDate + 2;
  const dayAfterTomorrowDayOfWeekName = days[(dayOfWeekNumber + 2) % 7];

  const forecastList = forecastData.list;
  forecastList.forEach((forecast) => {
    const forecastDate = new Date(forecast.dt_txt);
    const forecastDay = forecastDate.getDate();
    // console.log(forecastDate.getHours());

    if (forecastDay === tomorrowDate && forecastDate.getHours() === 12) {
      const forecastTemp = document.createElement("p");
      forecastTemp.innerHTML = `${tomorrowDayOfWeekName}: <strong>${Math.round(forecast.main.temp)}&deg;</strong>F`;
      forecastSection.appendChild(forecastTemp);
      //   console.log(`Tomorrow: ${forecastMain.temp}`);
    } else if (forecastDay === dayAfterTomorrowDate && forecastDate.getHours() === 12) {
      const forecastTemp = document.createElement("p");
      forecastTemp.innerHTML = `${dayAfterTomorrowDayOfWeekName}: <strong>${Math.round(
        forecast.main.temp
      )}&deg;</strong>F`;
      forecastSection.appendChild(forecastTemp);
      //   console.log(`Day after tomorrow: ${forecastMain.temp}`);
    }
  });
};

// displayCurrentWeather;
fetchWeather();
fetchForecast();
