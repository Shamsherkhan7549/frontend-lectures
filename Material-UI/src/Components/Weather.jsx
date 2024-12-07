import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Weather = ({addNewData}) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=`;
    let apiKey = '8912139b05204e0b46c2c6ec1c098704';

    const [city, setCity] = useState("");
    const [err,setErr] = useState(false);

    const [weatherData, setWeatherData] = useState({});

    const handligInputChange = (event) => {
        setCity(event.target.value);
    };

    const getWeatherInfo = async() => {
        let response = await fetch(`${url}${city}&appid=${apiKey}&units=metric`);
        let jsonRes = await response.json();
        let result = {
            city:city,
            temp:jsonRes.main.temp,
            maxTemp:jsonRes.main.temp_max,
            minTemp:jsonRes.main.temp_min,
            humidity:jsonRes.main.humidity,
            feelslike:jsonRes.main.feels_like
        };

        addNewData(result);
    }

    const handlingSubmit = (event) => {
        event.preventDefault();
        !city ? setErr(true) : setErr(false)
        setCity("");
        getWeatherInfo()
    }
  return (
    <div>
        <h2>Weather</h2>
        <form action="" onSubmit={handlingSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handligInputChange} /> <br />
            { err && <p style={{color:"red", fontWeight:'600'}}>Please enter city name!</p>} <br />
            <Button variant="contained" type='submit'>submit</Button>
        </form>
    </div>
  )
}

export default Weather