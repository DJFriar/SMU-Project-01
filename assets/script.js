let appid = "e58051a918e0974cb45c497fb1efbc63"
let units = "imperial";
var temp = "";
var humidity = "";
var windSpeed = "";
var lat = "";
var long = "";



function searchWeather(searterm){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e58051a918e0974cb45c497fb1efbc63`)
    .then(result =>{
        return result.json();
    }).then(result =>{


function init(resultFromserver){
console.log(resultFromserver);
}


window.addEventListener(`load`,() => {
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
    
        var weatherIcon = "";
        var temp = "";
        var lat = "";
        var long = "";

}
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            
        
        });
    };
        lat= position.coords.laitude;
        long= position.coords.longitude;

        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e58051a918e0974cb45c497fb1efbc63`
        fetch(api)
        .then((response) => {
            return newFunction(response);
        })
        .then(data => {
          const { temp,summary, weatherIcon } = data.curretly
          temperatureDegree.textContent = temp;
          temperatureDescrition.textContent = summary;
        locationTimezone.textContent = data.locationTimezone;

        });
            
    });
