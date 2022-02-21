// Selectors.
const searchBtn = document.querySelector('#city-search-btn')
const cityElem = document.querySelector('#city-name')
const iconElem = document.querySelector('#weather-icon')
const flagElem = document.querySelector('#country-flag')
const tempElem = document.querySelector('#temp')
const feelingElem = document.querySelector('#feeling')
const descElem = document.querySelector('#description')

document.querySelector('form').addEventListener('submit', (e) => {
    // Stop normal form submission.
    e.preventDefault()
    const formData = new FormData(e.target);
    const city = formData.get('city')
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&lang=fr&APPID=6aa4316de0a8d7ff347839e3927c6d94'

    fetch(url).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                const iconUrl = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'
                let flagUrl = 'https://flagcdn.com/32x24/' + data.sys.country + '.png'
                flagUrl = flagUrl.toLowerCase()


                iconElem.innerHTML = '<img src=' + iconUrl + ' />'
                cityElem.innerHTML = city
                flagElem.innerHTML = '<img src=' + flagUrl + ' />'

                tempElem.innerHTML = 'TEMPÉRATURE : ' + data.main.temp + '°C.'
                feelingElem.innerHTML = 'RESSENTI : ' + data.main.feels_like + '°C.'
                descElem.innerHTML = 'LA MÉTÉO EST : ' + data.weather[0].description + '.'
            })
        }
    })
});
