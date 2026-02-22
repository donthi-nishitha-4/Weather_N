Weather_N 

A simple weather application that shows real-time weather data using city search.

Frontend is hosted on GitHub Pages and backend is deployed on Render.

Features:

	Search weather by city name

	Displays temperature, description, and icon

	Real-time data from OpenWeather API

	Secure API key using environment variables

	Responsive UI

Tech Stack:

	 Frontend
- HTML
- CSS
- JavaScript

	Backend
- Node.js
- Express.js
- OpenWeather API

	Hosting
- GitHub Pages (Frontend)
- Render (Backend)

Project structure:

main

├── index.html

├── backend/

│ ├── server.js

│ ├── package.json

│ └── package-lock.json

└── .gitignore


Setup Instructions (Local):

1. Clone Repository

git clone https://github.com/donthi-nishitha-4/Weather_N.git

2. Backend Setup

cd backend

npm install

Create .env file:

API_KEY=your_openweather_api_key

Run server:

node server.js

3. Frontend Setup

Open index.html in browser.

Environment Variables:

The following environment variable is required:

API_KEY = OpenWeather API Key

Configured on Render for production.

API Used:

Weather data is provided by:

OpenWeather API

Author:

Name: Donthi Nishitha

GitHub: https://github.com/donthi-nishitha-4

Live Link:

https://donthi-nishitha-4.github.io/Weather_N

License:

This project is for educational purposes.
