//Deal with the user interface
class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.tempMin = document.getElementById('w-tempMin');
    this.tempMax = document.getElementById('w-tempMax');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = (weather.main.temp-273.15).toFixed(1) + '°C';
    this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${(weather.main.feels_like-273.15).toFixed(1)}°C`;
    this.tempMin.textContent = `Temp Min: ${(weather.main.temp_min-273.15).toFixed(1)}°C`;
    this.tempMax.textContent = `Temp Max: ${(weather.main.temp_max-273.15).toFixed(1)}°C`;
    this.wind.textContent = `Wind Speed: ${((weather.wind.speed)*(1,6)).toFixed(1)} Km/h`;
    //To see the options uncomment console.log
    //console.log(weather);    
  }

}