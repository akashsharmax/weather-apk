 const apikey = "8c00057bbb20953b3e778beac9b535cf";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?";
    
    const searchbox = document.querySelector(".search input");
    const searchbtn = document.querySelector(".search button");
    const weathericon = document.querySelector(".weather-icon");

    async function checkweather(city) {
        const response = await fetch(apiurl + `q=${city}&appid=${apikey}&units=metric`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "weather-app-img/images/cloud.png";
        } else if (data.weather[0].main == "Rain") {
            weathericon.src = "weather-app-img/images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "weather-app-img/images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weathericon.src = "weather-app-img/images/mist.png";
        } else {
            weathericon.src = "weather-app-img/images/clear.png"; 
        }
    }

    searchbtn.addEventListener("click", () => {
        checkweather(searchbox.value);
    });

   
    checkweather("London");