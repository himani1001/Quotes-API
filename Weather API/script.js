const loaderContainer = document.querySelector('.loader-container');
const box = document.querySelector('#box');

window.addEventListener('load', () => {
    loaderContainer.classList.add('hidden')
    box.classList.add('visible')
})

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const tempMin = document.getElementById('tempLow');
const tempMax = document.getElementById('tempMax');
const description = document.getElementById('description');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day} ${year}`;

const app = document.getElementById('app');

const getWeather = async() => {
    try{

        const cityName = document.getElementById('searchBarInput').value;
        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7ff7f6edc82d5b42cb41100b21681f66&units=metric`, 
                {    headers: {
                        Accept: 'application/json'
                } 
        });

        const weatherData = await weatherDataFetch.json();
        console.log(weatherData);
        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].main}`;
        tempImg.innerHTML = `<img src = "https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" />`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;
        tempMax.innerHTML = `${weatherData.main.temp_max}°C`;
        tempLow.innerHTML = `${weatherData.main.temp_min}°C`;
    }
    catch(error){
        console.log(error);
    }
}
