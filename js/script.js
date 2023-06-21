function getWeatherData() {
    const apiKey = "74d5e614d2d445de9c301141232006";
    const locationInput = document.getElementById("locationInp").value;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInput}&aqi=yes`;
  

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {

        // console.log(data)
        const current_country = document.querySelector(".current_country");
        current_country.innerHTML = data.location.country;

        const current_country_name = document.querySelector(".current_country_name");
        current_country_name.innerHTML = 'city Name: ' + data.location.name;

        const current_temperature = document.querySelector(".current_temperature");
        current_temperature.innerHTML= data.current.temp_c +'&deg;C';

        const weather_description = document.querySelector(".weather_description");
        weather_description.innerHTML = 'desctiption: ' + data.current.condition.text;

        const weather_humidity = document.querySelector(".weather_humidity");
        weather_humidity.innerHTML = 'humidity: '+ data.current.humidity+ '%';

      })
      .catch((error) => {
        // const errr = document.querySelector(".errr");
        // errr.innerHTML = '<span class="Error_prompt">Error</span> '+ data.error.message + error;
        alert( 'You are worng => ' + error)
      });
  }
  

  
