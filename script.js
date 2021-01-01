//JavaScript Code for Smartin Company
const companyName = 'Smartin Company';
console.log (companyName);
//deleted alert on this line 4

//Active Navbar


//Burger Menu Toggle
const hamburger = document.querySelector('#hamburger');
const navbarList = document.querySelector('#navbar-list');

hamburger.addEventListener('click', toggleNavList);

function toggleNavList(){
    hamburger.classList.toggle('burger-menu--opened');
    navbarList.classList.toggle('navbar-closed');
}

//JS Home Page Clock
setInterval(currentTime, 1000)//represents milliseconds for each second

const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function currentTime() {
  const time = new Date()
  const seconds = time.getSeconds() / 60
  const minutes = (seconds + time.getMinutes()) / 60
  const hours = (minutes + time.getHours()) / 12
  setupRotation(secondHand, seconds);
  setupRotation(minuteHand, minutes);
  setupRotation(hourHand, hours);
}

function setupRotation(element, rotateRatio) {
  element.style.setProperty('--rotation', rotateRatio * 360);
}

currentTime();

//Updated Full Year Events/Current Date

let currentYear = document.querySelector('#current-year');

let thisDay = new Date();

currentYear.innerText = thisDay.getFullYear();
console.log(currentYear.innerText);