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

//Updated Full Year Events/Current Date
let currentYear = document.querySelector('#current-year');
let thisDay = new Date();

currentYear.innerText = thisDay.getFullYear();
console.log(currentYear.innerText);