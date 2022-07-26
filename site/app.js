// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();


// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//weather.changeLocation('Piçarras','br')

//Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  
  // Change Location
  weather.changeLocation(city, country);

  // Set location in Local Storage
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal with jquery
  $('#locModal').modal('hide');  
});


const ui = new UI;


function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}



