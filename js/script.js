
// // let weather_btn = document.querySelector('.weather_btn')
// let current_temperature = document.querySelector('.current_temperature')
// let weather_description = document.querySelector('.weather_description')
// let current_country = document.querySelector('.current_country')
// let weather_humidity = document.querySelector('.weather_humidity')




// function getWeatherData(city){
//     // let locationInp = document.querySelector('#locationInp').value;
//     // const inpVal = result.add(locationInp);
//     // weather_humidity = inpVal;
//     const apiKey = "74d5e614d2d445de9c301141232006";
//     const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
    
//     fetch(url)
//         .then (response => response.json())
//         .then (result => console.log(result))
//         .catch(error => console.log(error))
// }


/////////////////=======================///////////////////



// // async function postData(url="") {
// //     const response = await fetch(url, {
// //       method: "GET",
// //       mode: "cors", // no-cors, *cors, same-origin
// //       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
// //       credentials: "same-origin", // include, *same-origin, omit
// //       headers: {
// //         "Content-Type": "application/json",
// //         // 'Content-Type': 'application/x-www-form-urlencoded',
// //       },
// //       redirect: "follow", // manual, *follow, error
// //       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
// //     //   body: JSON.stringify(data), // body data type must match "Content-Type" header
// //     });
// //     return response.json(); // parses JSON response into native JavaScript objects
// //   }
  
// //   postData("http://api.weatherapi.com/v1/current.json?key=74d5e614d2d445de9c301141232006&q=Bangladesh&aqi=yes" ).then((data) => {
// //     console.log(data); // JSON data parsed by `data.json()` call
// //   });
  

////////////////////======================//////////////




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
  

  