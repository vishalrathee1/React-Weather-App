import React from 'react';
// import ReactDOM from 'react-dom/client';
import SearchCity from './SearchCity';
import DisplayWeather from './DisplayWeather';
import { useState } from 'react';

const App =() => {

  const [weatherData, setweatherData] = useState({})
  
  const pull_data = (data) =>{
    console.log(data)
    setweatherData(data);
  }

  return (
    <div
    style = {{
      "display" : "flex"
    }}>
      <SearchCity func = {pull_data}/>
      <DisplayWeather weatherData = {weatherData}/>
    </div>
  )
}

export default App