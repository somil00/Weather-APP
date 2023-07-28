const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '89383d00ccmsh96435daa455bacfp1b36a9jsn894511829e76',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
    fetch(url+city, options)
        .then(response => response.json())
        .then(response => {
            cityName.innerHTML = city
            console.log(response)
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity + '%'
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp + '°C'
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.log(err))
}
submit.addEventListener("click" , (e) => {
    e.preventDefault()
    getWeather(city.value)
})

// getWeather("Delhi")