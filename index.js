const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', async() => {

    const APIKey = '728b0ee6df5687559812bd3169ad77b7';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

        const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ea7f865aa1d63d118942e1db48658289`);

   let fdata=await data.json();
   console.log(fdata);

   const{main:WeatherCondition}=fdata.weather[0];
    

            if (fdata.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            const pressure = document.querySelector(
                ".weather-details .pressure-details span"
            );
            const visiblity = document.querySelector(
                ".weather-details .visiblity-details span"
            );

           

            temperature.innerHTML = `${parseInt(fdata.main.temp)}<span>°C</span>`;
            description.innerHTML = `${fdata.weather[0].description}`;
            humidity.innerHTML = `${fdata.main.humidity}%`;
            wind.innerHTML = `${parseInt(fdata.wind.speed)}Km/h`;
            pressure.innerHTML = `${fdata.main.pressure}
            mb`;
            visiblity.innerHTML = `${fdata.visibility / 
            1000}km`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';

});