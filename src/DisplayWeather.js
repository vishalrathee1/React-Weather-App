import React from 'react';
// import ReactDOM from 'react-dom/client';

const DisplayWeather = (weatherData) =>{

  console.log(weatherData)
  weatherData = JSON.stringify(weatherData)

  return(
    <div
    style={{
      "width": "50%",
      "height": "100vh"
    }}>
    <h1>City Name</h1>
    <div
    style={{
      "width": "600px",
      "height": "200px",
      "border": "1px solid black",
      "borderRadius": "5px",
      "display": "grid",
      "gridTemplateRows": "1fr 1fr 1fr 1fr",
      "gridTemplateCols" : "1fr 1fr 1fr",
    }}>
      <div
      style={{
        "display": "flex",
        "gridRowStart": "1",
        "gridColumnStart": "1"
      }}
      >Country Symbol</div>
      <div
      style={{
        "gridRowStart": "1",
        "gridColumnStart": "2",
      }}
      >
        Temperature
      </div>
      <div
      style={{
        "display": "flex",
        "gridRowStart": "2",
        "gridColumnStart": "1",
        "gridColumnEnd":"3",
        "justifyContent": "center",
        "paddingLeft":"20%"
      }}
      >
        condition
      </div>
      <div
      style={{
        "gridRowStart":"3",
        "gridColumnStart": "1"
      }}
      >
        Visibility
      </div>
      <div
      style={{
        "gridRowStart":"3",
        "gridColumnStart": "2"
      }}
      >
        Wind
      </div>
      <div
      style={{
        "gridRowStart":"3",
        "gridColumnStart": "3"
      }}
      >
        Sunrise
      </div>
      <div
      style={{
        "gridRowStart":"4",
        "gridColumnStart": "1"
      }}>
        Humidity
      </div>
      <div
      style={{
        "gridRowStart":"4",
        "gridColumnStart": "2"
      }}>
        Cloudiness
      </div>
      <div
      style={{
        "gridRowStart":"4",
        "gridColumnStart": "3"
      }}>
        Sunset
      </div>

    </div>
    </div>
  )
}

export default DisplayWeather;