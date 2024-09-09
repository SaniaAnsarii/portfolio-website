const apiKey = 'bab281d79e5f1e9755a68d754cc313e7'; // Get your API key from OpenWeatherMap
const getWeatherBtn = document.getElementById('get-weather-btn');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeatherData(city);
  }
});

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    if (data.cod === 200) {
      cityName.textContent = `City: ${data.name}, ${data.sys.country}`;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      description.textContent = `Description: ${data.weather[0].description}`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
      weatherInfo.style.display = 'block';
    } else {
      cityName.textContent = 'City not found';
      weatherInfo.style.display = 'none';
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}