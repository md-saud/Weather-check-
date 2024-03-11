function fetchWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    const weatherDataContainer = document.getElementById('weatherData');
    weatherDataContainer.innerHTML = '<div class="loading"></div>';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherData = `
                <h2>Current Weather in ${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            weatherDataContainer.innerHTML = weatherData;
            weatherDataContainer.classList.add('weather-card');
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherDataContainer.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        });
}
