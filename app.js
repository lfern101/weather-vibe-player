// setup API Key and Base URL
const apiKey = 'INSERT_YOUR_KEY_HERE'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// playlists (You can change these URLs!)
const playlists = {
    sunny: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb?utm_source=generator", // Happy Hits
    rain: "https://open.spotify.com/embed/playlist/37i9dQZF1DX889U0CL85jj?utm_source=generator", // Chill Vibes
    cloudy: "https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator", // Lo-Fi Beats
    snow: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0Yxoavh5qJV?utm_source=generator", // Christmas/Cozy
    default: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" // Top Hits
};

// main Function
function init() {
    // ask browser for location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// fetch Weather Data
async function getWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    // fetch data from OpenWeatherMap
    const url = `${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`; // change 'imperial' to 'metric' for Celsius
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        displayData(data);
    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("Could not get weather data.");
    }
}

// update the UI
function displayData(data) {
    // get elements
    const tempElement = document.getElementById('temp');
    const descElement = document.getElementById('condition');
    const playerContainer = document.getElementById('player-container');
    const spotifyPlayer = document.getElementById('spotify-player');

    // update Text
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].main; // e.g., "Rain", "Clear", "Clouds"
    
    tempElement.innerText = `${temp}°F`; // change to °C if you used imperial
    descElement.innerText = description;

    // pick the playlist based on description
    let vibeUri = playlists.default;

    if (description === 'Clear') vibeUri = playlists.sunny;
    else if (description === 'Rain' || description === 'Drizzle' || description === 'Thunderstorm') vibeUri = playlists.rain;
    else if (description === 'Clouds') vibeUri = playlists.cloudy;
    else if (description === 'Snow') vibeUri = playlists.snow;

    // update player and Show it
    spotifyPlayer.src = vibeUri;
    playerContainer.style.display = 'block';
}

function showError(error) {
    alert("Please allow location access to use this app!");
}

// start the app
init();