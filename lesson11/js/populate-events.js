function getEvents(cityName, eventCreditURL) {
    const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    let townCounter = 0;
    let toProperCaseRegex = /(\b[ar-z](?!\s))/g;
    cityName = cityName.replace(toProperCaseRegex, function (x) {
        return x.toUpperCase();
    });
    fetch(townURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObj) {
            let towns = jsonObj['towns'];
            let eventsSection = document.createElement('div');
            eventsSection.classList.add('events-section');
            let titleSection = document.createElement('div');
            titleSection.classList.add('event-title-section');
            let title = document.createElement('h3');
            title.classList.add('event-title');
            title.textContent = 'Upcoming Events';
            let titleSeperator = document.createElement('div');
            titleSeperator.classList.add('event-title-seperator');
            titleSeperator.innerHTML = "<hr>";
            let townSection = document.createElement('div');
            townSection.classList.add('town-section');

            for (let i = 0; i < towns.length; i++) {
                let cityNameTest = cityName.toLowerCase();
                if ([cityNameTest].indexOf(towns[i].name.toLowerCase()) > -1) {
                    let townname = towns[i].name.replace(/\s+/g, "");
                    let townEventImage = 'images/towns/' + townname + '/eventimage.png';
                    let townEventImageCredit = eventCreditURL;
                    let townsDiv = document.createElement('div');
                    townsDiv.classList.add('towns');
                    let townEventsSection = document.createElement('div');
                    townEventsSection.classList.add('town-events-section');
                    let events = towns[i]['events'];
                    for (let x = 0; x < events.length; x++) {
                        townEvents = document.createElement('div');
                        townEvents.classList.add('town-events');
                        townEvents.textContent = towns[i].events[x];
                        townEventsSection.appendChild(townEvents);
                    }
                    townCounter++;
                    let townImageLink = document.createElement('a');
                    townImageLink.setAttribute('href', townEventImageCredit)
                    let townImage = document.createElement('img');
                    townImage.classList.add('image');
                    townImage.setAttribute('src', townEventImage);
                    townImage.setAttribute('alt', 'Image representing ' + towns[i].events[events.length - 1]);
                    townImage.setAttribute('title', towns[i].name);
                    townImageLink.appendChild(townImage);
                    townsDiv.appendChild(townEventsSection);
                    townsDiv.appendChild(townImageLink);
                    townSection.appendChild(townsDiv);
                }
            }
            titleSection.appendChild(title);
            titleSection.appendChild(titleSeperator);
            eventsSection.appendChild(titleSection);
            eventsSection.appendChild(townSection);

            document.querySelector('section.upcoming-events').appendChild(eventsSection);

        });
}