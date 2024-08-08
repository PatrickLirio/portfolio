var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
    
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {

    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-100vh"
}

// const titles = [
//     "Software Engineer",
//     "Web Developer",
//     "Mobile Developer",
//     "Data Analyst"
// ];

// let currentIndex = 0;

// function changeTitle() {
//     currentIndex = (currentIndex + 1) % titles.length;
//     document.getElementById('dynamic-text').textContent = titles[currentIndex];
// }

// setInterval(changeTitle, 5000); // Change every 10 seconds

const titles = [
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "Data Analyst"
];

let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing in milliseconds
const pauseBetweenTitles = 2000; // Pause between titles in milliseconds

function typeTitle() {
    const dynamicTextElement = document.getElementById('dynamic-text');
    dynamicTextElement.textContent = titles[currentIndex].substring(0, charIndex);
    charIndex++;

    if (charIndex > titles[currentIndex].length) {
        setTimeout(() => {
            deleteTitle();
        }, pauseBetweenTitles);
    } else {
        setTimeout(typeTitle, typingSpeed);
    }
}

function deleteTitle() {
    const dynamicTextElement = document.getElementById('dynamic-text');
    dynamicTextElement.textContent = titles[currentIndex].substring(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
        currentIndex = (currentIndex + 1) % titles.length;
        setTimeout(typeTitle, typingSpeed);
    } else {
        setTimeout(deleteTitle, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeTitle();
});