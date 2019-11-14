const dataSourceURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(dataSourceURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObj) {
        const towns = jsonObj['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (['Fish Haven', 'Soda Springs', 'Preston'].indexOf(towns[i].name) > -1) {
                let town = document.createElement('section');
                let name = document.createElement('h2');
                let founded = document.createElement('div');
                let population = document.createElement('div');
                let rainfall = document.createElement('div');
                let image = document.createElement('img');

                image.setAttribute('src', 'images/' + towns[i].photo);
                image.setAttribute('alt', 'Image of ' + towns[i].name);
                image.setAttribute('title', towns[i].name);
                name.textContent = towns[i].name;
                founded.textContent = 'Founded in: ' + towns[i].yearFounded;
                population.textContent = 'Population: ' + towns[i].currentPopulation;
                rainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;

                town.appendChild(name);
                town.appendChild(founded);
                town.appendChild(population);
                town.appendChild(rainfall);
                town.appendChild(image);

                document.querySelector('div.cards').appendChild(town);
            }
        }
    });