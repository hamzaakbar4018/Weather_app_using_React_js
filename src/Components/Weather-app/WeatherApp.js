"use client";
import React, { useState } from 'react';
import "./WeatherApp.css";

const WeatherApp = () => {
    const [cityInput, setCityInput] = useState(""); // State to manage the input value
    const api = "03bb136d6611f4196fd7a5392a12945e";

    const search = async () => {
        if (cityInput === "") {
            return;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${api}`;

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.querySelector(".humidity-percent");
        const wind = document.querySelector(".wind-rate");
        const temperature = document.querySelector(".weather-temp");
        const location = document.querySelector(".weather-location");
        humidity.innerHTML = data.main.humidity+"%";
        wind.innerHTML = data.wind.speed+"km/h";
        location.innerHTML = data.name;
        const newtemp = data.main.temp;
        const cel=newtemp-273.15;
        // const TOFIXED=cel.toFixed(2);
        const newcel=cel.toFixed(2);
        temperature.innerHTML=newcel+"°C";
    }

    return (
        <div className='container'>
            <div className='top-bar'>
                <input
                    type="text"
                    name=""
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)} // Update the input value in state
                    className='cityInput'
                    placeholder='Search'
                />
                <div className='search-icon'>
                    <img src="../assets/search.png" onClick={search} alt="Search_img" />
                </div>
            </div>
            <div className='weather-image'>
                <img src="../assets/cloud.png" alt="cloud" />
            </div>
            <div className='weather-temp'>
                24°C
            </div>
            <div className='weather-location'>
                Barmingum
            </div>
            <div className='data-container'>
                <div className='element'>
                    <img src="../assets/humidity.png" alt="humidity" className='icon' />
                    <div className='data'>
                        <div className='humidity-percent'>
                            64%
                        </div>
                        <div className='text'>
                            Humidity
                        </div>
                    </div>
                </div>
                <div className='element'>
                    <img src="../assets/wind.png" alt="wind" className='icon' />
                    <div className='data'>
                        <div className='wind-rate'>
                            18 km/h
                        </div>
                        <div className='text'>
                            Wind Speed
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;

