const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //Using object destructuring to get the data

    const {
        cityDets,
        weather
    } = data;

    //Update details template
    details.innerHTML = `
    <h5 class = "my-3" > ${cityDets.EnglishName} </h5>
    <div class = "my-3" > ${weather.WeatherText} </div>
    <div class = "display-4 my-4" > <span > ${weather.Temperature.Metric.Value}&deg;C </span> 
    </div>
    `;

    //Remove the d-none class if present

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    //update night and day icon and images

    let timeSrc = '';
    
        if (weather.IsDayTime) {
            timeSrc = 'icons/day.svg'
        }
    else {
        timeSrc = 'icons/night.svg'
    }
    time.setAttribute('src', timeSrc);

    //update icons
    const iconSrc = `icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src',iconSrc);
}


const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    return {
        cityDets: cityDets,
        weather: weather
    }
}

cityForm.addEventListener('submit', e => {

    //prevent default
    e.preventDefault();

    //Get the value of city
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //Update UI with city name
    updateCity(city)
        .then(data => {
            updateUI(data);
        }).catch(err => {
            console.log(err);
        });
})