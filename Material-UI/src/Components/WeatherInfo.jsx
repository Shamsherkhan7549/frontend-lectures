import React, { useState } from 'react'
import Weather from './Weather';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const WeatherIfo = () => {
  const [weather, setWeather] = useState({
    city:"",
    temp:null,
    maxTemp:null,
    minTemp:null,
    humidity:null,
    feelslike:null
  });

  const addNewData = (data) => {
    setWeather(data)
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  return (
    <div>

    <Weather addNewData={addNewData}/> <br /><br />
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title= "Weather Info"
       
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        width="294"
        image="https://images.pexels.com/photos/3309437/pexels-photo-3309437.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Paella dish"
      />
      <CardContent>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <div style={{fontSize:'2rem'}}>
            {weather.city.toUpperCase()}  
          </div>
          <div>
            Temp:  {weather.temp}&deg;C
          </div>
          <div style={{display:"flex", justifyContent:"space-around", gap:"20px"}}>
            <div> <p> Max Temp: {weather.maxTemp}&deg;C</p> <p> Min Temp: {weather.minTemp}&deg;C</p> </div>
            <div> <p> Humidity: {weather.humidity}&deg;C</p> <p>Feel Like: {weather.feelslike}&deg;C</p></div>
          </div>

          <div>
            The Weather Can be described as <i>{weather.temp}&deg;C</i> and feels like {weather.feelslike}&deg;C
          </div>
        </Typography>
      </CardContent>
      
    
      
    </Card>


    </div>
  )
}

export default WeatherIfo