import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.WEATHER_API_KEY;

// test data
const LAT = 40.7128;
const LON = -74.0060;
const daynum = 1;


const url = `https://api.tomorrow.io/v4/weather/forecast?location=${LAT},${LON}&apikey=${API_KEY}`;

const req = await fetch(url);
if (!req.ok) throw new Error('Network response was not ok');
const data = await req.json();

const day = data.timelines.daily[daynum-1].values;
console.log(day);

