let wxStorySection = document.createElement('section');
let wxStoryTitle = document.createElement('h3');
let wxStoryContent = document.createElement('div');
let wxStoryImageLink = document.createElement('a');
let wxStoryImage = document.createElement('img');

wxStorySection.classList.add('wx-story-section');
wxStoryTitle.classList.add('wx-story-title');
wxStoryTitle.textContent = "The Story of the Edmund Fitzgerald";
wxStoryContent.classList.add('wx-story-content');
wxStoryContent.innerHTML = '<p>The sinking of the Edmund Fitzgerald and the loss of her 29-member crew during a violent ' +
    'fall storm on November 10, 1975, just northwest of Whitefish Point in southeast Lake Superior was at the time the ' +
    'worst maritime disaster on the Great Lakes in nine years.Of the more than 1000 ships that have found their graves ' +
    'under the icy waters of the Great Lakes, the Fitzgerald is still the largest ever to go down.Just like the Titanic, ' +
    'the demise of this seemingly invincible vessel has attracted widespread attention and inspired songwriters and ' +
    'authors to tell her story</p><p><a href="https://www.mprnews.org/story/2018/10/10/photos-big-waves-lake-superior">' +
    'Sourced from MPR News, please click here for more images and information:</a></p > ';
wxStoryImage.classList.add('image');
wxStoryImage.setAttribute('src', 'images/wx-story-image.png');
wxStoryImage.setAttribute('alt', 'Lake Superior November Storm');
wxStoryImage.setAttribute('title', 'November Storm by Derek Montegomery');
wxStoryImageLink.classList.add('wx-story-image-link');
wxStoryImageLink.setAttribute('href', 'https://www.mprnews.org/story/2018/10/10/photos-big-waves-lake-superior');

wxStoryImageLink.appendChild(wxStoryImage);
wxStorySection.appendChild(wxStoryTitle);
wxStorySection.appendChild(wxStoryContent);
wxStorySection.appendChild(wxStoryImageLink);

document.querySelector('div.wx-story').appendChild(wxStorySection);
