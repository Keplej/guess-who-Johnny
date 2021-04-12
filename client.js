console.log('Here are all the available people:', people);

$(document).ready(onReady);

let persons = '';

function onReady() {
    console.log('Testing');
    personPictures();
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function personPictures() {
    console.log('pictures of people');
    for (let add of people) {
        $('#pictureOutput').append(`
            <div class="picsOfPeople"></div>
                <img src="https://github.com/${add.githubUsername}.png?size=250" alt="Profile image of ${add.name}">
            </div>
        `)
    }    
}

function randomPerson() {
    console.log('random person testing');
    
    if () {
        
    } else {

    }
}