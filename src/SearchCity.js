import React from 'react';
// import ReactDOM from 'react-dom/client';

const SearchCity = (props) => {

  let form = document.querySelector("form");
  form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let formvalue = event.target.elements
    let city = formvalue.cityName.value
    getWeather(city)

    //fetch weather from api 
    async function getWeather(city){
      let weather = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=289105b0fa2989730b3159bc0bf443ee`)).json()
      // console.log(weather.main)
      props.func(weather)
    }
  })

  return (
    <div
    style={{"width": "50%",
    "height": "100vh",
    "background" : "skyblue",
    "display": "flex",
    "flexDirection": "column",
    "alignContent":"center",
    "justifyContent":"flex-start",
    "alignItems":"center",
    "gap":"15px",
    "paddingTop":"150px",
    }}>
      <h1>
        Check Weather
      </h1>
      <form>
      <input type={"search"} placeholder="Enter a city name" name='cityName'></input>
      <button type='submit'>Search</button>
      </form>
      <label className='switch'>
      <input type={"checkbox"}></input>
      <span className='slider round'>
        <div className='tempUnits'>
          <span>C</span>
          <span>F</span>
        </div>
      </span>
      </label>      
    </div>
  )
}

export default SearchCity;