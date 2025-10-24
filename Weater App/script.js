// ====== Weather Detection App ======

// Replace this with your own OpenWeather API key:
const API_KEY = "064e46a69e6d235f811c06774d497e86" // 🔑 Get yours at: https://openweathermap.org/api

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const dateElement = document.getElementById("date");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherIcon = document.getElementById("weatherIcon");
const forecastContainer = document.getElementById("forecastContainer");

// Event listener for search button
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    getWeatherData(city);
  } else {
    alert("Please enter a city name!");
  }
});

// Fetch weather data (current + 3-day forecast)
async function getWeatherData(city) {
  try {
    // Current weather API
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const currentData = await currentResponse.json();

    if (currentData.cod === "404") {
      alert("City not found. Please enter a valid city.");
      return;
    }

    // Update current weather section
    cityName.textContent = `${currentData.name}, ${currentData.sys.country}`;
    const today = new Date();
    dateElement.textContent = today.toDateString();
    temperature.textContent = `${Math.round(currentData.main.temp)}°C`;
    condition.textContent = currentData.weather[0].description
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    humidity.textContent = `${currentData.main.humidity}%`;
    windSpeed.textContent = `${currentData.wind.speed} km/h`;

    const iconCode = currentData.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Forecast API (5-day / 3-hour interval)
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    const forecastData = await forecastResponse.json();

    displayForecast(forecastData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Something went wrong while fetching weather data.");
  }
}

// Display 3-day forecast
function displayForecast(forecastData) {
  forecastContainer.innerHTML = "";

  // Extract forecast for next 3 days at 12:00 PM
  const forecastList = forecastData.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  for (let i = 0; i < 3; i++) {
    const day = forecastList[i];
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const icon = day.weather[0].icon;
    const temp = Math.round(day.main.temp);
    const desc = day.weather[0].description;

    const forecastEl = document.createElement("div");
    forecastEl.classList.add("forecast-day");
    forecastEl.innerHTML = `
      <h3>${dayName}</h3>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon" />
      <p>${temp}°C</p>
      <p>${desc}</p>
    `;
    forecastContainer.appendChild(forecastEl);
  }
}
