# The Weather Vibe | Weather-Based Music Player

A web application that detects your local weather conditions and curates a matching Spotify playlist to fit the mood.

## Live Demo
[![Watch the video](https://img.youtube.com/vi/Lh8JW-mPna0/0.jpg)](https://www.youtube.com/watch?v=Lh8JW-mPna0)

## How it Works
1. **Geolocation:** The app requests the user's browser location.
2. **Weather Data:** It sends coordinates to the [OpenWeatherMap API](https://openweathermap.org/api) to fetch current conditions (Temperature, Sky status).
3. **Logic:** A Javascript switch evaluates the weather (e.g., Rain, Clear, Snow) and maps it to a specific mood.
4. **Music Embed:** The app dynamically updates a Spotify iFrame to play the selected playlist.

## Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **APIs:** OpenWeatherMap API, Spotify Embeds
* **Tools:** VS Code

## Local Development Setup
Want to run this on your own machine? Follow these steps:

### 1. Clone the Repo
Open your terminal and run:
```bash
git clone https://github.com/lfern101/weather-vibe-player
cd weather-vibe-player
```
### 2. Get an API Key
```
This project uses the OpenWeatherMap API.
- Sign up for a free account at OpenWeatherMap.
- Go to "My API Keys" and copy your key. (Note: You must confirm your email to activate the key.)
- open app.js in your code editor.
- Find the line const apiKey = 'INSERT_YOUR_KEY_HERE'; and paste your key inside the quotes.
```

### 3. Run the Project
Double click on the index.html file and it will load the webpage into your browser locally.

## Project Structure
```text
/weather-vibe
├── index.html      # Main structure
├── style.css       # Styling and gradients
├── app.js          # API logic and DOM manipulation
└── README.md       # Documentation
