let timeDay = new Date();
let timeDatBtn = document.getElementById('DayNight');

timeDatBtn.innerHTML = timeDay;

//Depending on the time of the day, we will change the color page to a darker one or a lighter one
if(timeDay < 6  || timeDay > 18){
    document.body.style.backgroundColor ='#DDDDDD' ;
}
else{
    document.body.style.backgroundColor = '#AAAAAA';
}
//When was your last visit?
let numOfVisits = document.querySelector('.daysOfVisit');

let numOfVisits1 = Number(window.localStorage.getItem('visits'));
let lastVisits= Number(window.localStorage.getItem('lastVisits'));

const NUMS = 1000 * 60 * 60 * 24;

let daysAmong = Date.now() - lastVisits;

let numOfDays = Math.ceil(daysAmong / NUMS);

localStorage.setItem('lastVisits', Date.now());

if (numOfVisits1 != 0) {

    numOfVisits.textContent = 'You\'ve been here ' + numOfDays + ' day(s) ago'
} else {
    numOfVisits.textContent = 'This is your first page visit.'
}

numOfVisits1++;
localStorage.setItem("visits", numOfVisits1);

document.getElementById("modify").innerHTML = document.lastModified
document.getElementById("year").innerHTML = new Date().getFullYear()