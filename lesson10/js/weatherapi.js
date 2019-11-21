let weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=2530a9dd66685fdcc10fc4a2805bd81d&units=imperial';

fetch(weatherAPI)
    .then((response) => response.json())
    .then((jsonObj) => {
        // console.log('The result was: ' + jsonObj);

        let town = jsonObj['list'];
        for (let x = 0; x < town.length; x++) {
            console.log('The results [' + x + ']: DT=' + town[x].dt + ' and temp=' + town[x].main.temp);
            if (x == 0) {
                document.getElementById('current-temp').innerHTML = town[x].main.temp;
                let iconurl = 'https://openweathermap.org/img/w/' + town[x].weather[x].icon + '.png';
                let icondesc = town[x].weather[x].description;
                document.getElementById('imagesrc').textContent = iconurl;
                document.getElementById('icon').setAttribute('src', iconurl);
                document.getElementById('icon').setAttribute('alt', icondesc);
            }
        }
    });