require('dotenv').config(); // ← Add this line at the top

const API_KEY = process.env.WEATHER_API_KEY;

const LAT = 40.7128;
const LON = -74.0060;

const url = `https://api.tomorrow.io/v4/weather/forecast?location=${LAT},${LON}&apikey=${API_KEY}`;


