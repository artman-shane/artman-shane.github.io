let dataSourceURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(dataSourceURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObj) {
        let towns = jsonObj['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (['Fish Haven', 'Soda Springs', 'Preston'].indexOf(towns[i].name) > -1) {
                let town = document.createElement('section');
                let townLink = document.createElement('a');
                let info = document.createElement('div');
                let name = document.createElement('h2');
                let motto = document.createElement('div');
                let founded = document.createElement('div');
                let population = document.createElement('div');
                let rainfall = document.createElement('div');
                let image = document.createElement('img');
                let townname = towns[i].name.replace(/\s+/g, "");

                image.setAttribute('src', 'images/towns/' + townname.toLowerCase() + '/' + towns[i].photo);
                image.setAttribute('alt', 'Image of ' + towns[i].name);
                image.setAttribute('title', towns[i].name);
                image.classList.add('image');
                name.textContent = towns[i].name;
                name.classList.add('town');
                motto.textContent = towns[i].motto;
                motto.classList.add('motto');
                founded.textContent = 'Founded in: ' + towns[i].yearFounded;
                founded.classList.add('founded');
                population.textContent = 'Population: ' + towns[i].currentPopulation;
                population.classList.add('population');
                rainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
                rainfall.classList.add('rainfall');
                info.classList.add('info');

                townname = townname.replace(/.*/, function (x) {
                    return x.toLowerCase();
                });
                townLink.setAttribute('href', townname + '.html');
                townLink.classList.add(townname);
                town.classList.add(townname);

                info.appendChild(name);
                info.appendChild(motto);
                info.appendChild(founded);
                info.appendChild(population);
                info.appendChild(rainfall);
                townLink.appendChild(info);
                townLink.appendChild(image);
                town.appendChild(townLink);

                document.querySelector('div.cards').appendChild(town);
            }
        }
    });