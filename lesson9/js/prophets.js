const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObj) {
        console.table(jsonObj);
        const prophets = jsonObj['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthdate = document.createElement('div');
            let birthplace = document.createElement('div');
            let image = document.createElement('img');
            let fullname = prophets[i].name + ' ' + prophets[i].lastname;
            let alttext = fullname + ' - ' + (i + 1);

            h2.textContent = fullname;
            birthdate.textContent = 'Date of birth: ' + prophets[i].birthdate;
            birthplace.textContent = 'Please of birth: ' + prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);

            image.setAttribute('alt', alttext);
            image.setAttribute('title', alttext);

            card.appendChild(h2);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });

