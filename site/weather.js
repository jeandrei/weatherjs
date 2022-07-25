//Makes request to the API

class Weather {
  
  /*country
  us - Estados unidos
  uk - Inglaterra
  br - Brasil 
  */

  constructor(city, country){
    this.apiId = '145d345dba1e3b5ff452483d85a87709';
    this.city = city;
    this.country = country;
  }


  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiId}`); 
  
    const responseData = await response.json() ;   
  
    return responseData;
  }

  // Change weather location
  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }


}