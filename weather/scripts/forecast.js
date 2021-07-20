const key = "hXZ6Giu4x6VtUPADXxcXLsvvMCD7J5j2";

//Get city code
const getCity = async (city) => {

    const cityURL = city.replace(" ", "%20");
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${cityURL}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

//Get weather

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

// getCity("Bacchus Marsh")
//     .then(data => {
//         return getWeather(data.Key);
//     }).then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//     });