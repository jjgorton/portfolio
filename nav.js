// Sets position of the of the navigation menu's
// current selection indicator based on scroll position.

// this is to check if the indicator needs to translate Y or X
let dir = window.matchMedia('(min-width: 700px)');
// putting the nav back at the bottom for all screen sizes !('Y' : 'X')
const check = media => (media.matches ? 'X' : 'X');
dir.addListener(check);

const scroll = document.querySelector('.scroll-position');

const navItems = document.querySelectorAll('.nav-item');

const about = document.getElementById('about');
const aboutT = about.getBoundingClientRect().top;
const aboutB = about.getBoundingClientRect().bottom;

const skills = document.getElementById('skills');
const skillsT = skills.getBoundingClientRect().top;
const skillsB = skills.getBoundingClientRect().bottom;

const projects = document.getElementById('projects');
const projectsT = projects.getBoundingClientRect().top;
const projectsB = projects.getBoundingClientRect().bottom;

const contact = document.getElementById('contact');
const contactT = contact.getBoundingClientRect().top;
const contactB = contact.getBoundingClientRect().bottom;

navItems[3].style.color = 'blue';

window.onscroll = e => {
    console.log(check(dir));
    console.log('outer', navItems[3].style.color, navItems[3]);
    let position = window.scrollY;
    // console.log('pos', position);
    // let height =
    //     document.scrollingElement.scrollHeight -
    //     document.scrollingElement.clientHeight;

    let width = document.scrollingElement.clientWidth;
    // let percent = (position / height) * 300;

    // check(dir) returns 'X' or 'Y' depending on screen size
    // adding or subtracting integers for minor adjustment of scroll positions
    // console.log('about', aboutT, aboutB);
    if (position > aboutT && position < aboutB - 50) {
        // console.log('about if');
        scroll.style.transform = `translate${check(dir)}(${0}%)`;
        navItems[0].style.color = '#1f2833';
    }
    // console.log('skills', skillsT, skillsB);
    if (position > skillsT - 50 && position < skillsB - 50) {
        // console.log('skills if');
        scroll.style.transform = `translate${check(dir)}(${100}%)`;
        navItems[1].style.color = '#1f2833';
    }
    // console.log('project', projectsT, projectsB);
    if (position > projectsT - 50 && position < projectsB + 200) {
        // console.log('proj if');
        scroll.style.transform = `translate${check(dir)}(${200}%)`;
        navItems[2].style.color = '#1f2833';
    }
    // console.log('contact', contactT, contactB);
    if (position > contactT + 200 && position < contactB) {
        // console.log('contact if');
        scroll.style.transform = `translate${check(dir)}(${300}%)`;
        navItems[3].style.color = '#1f2833';
        console.log(contact.style.color);
    }
};

// const navItem = document.querySelectorAll('.nav-item');
// navItem.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         navIndicator(item, i);
//     });
// });

function grabInside(element) {
    let str = element.innerHTML;
}

// function navIndicator(item, index) {
//     let str = item.innerHTML.split('"')[1];
//     let section = document.querySelector(str);
//     let itemPos = section.getBoundingClientRect().top;

//     window.onscroll = () => {
//         let position = window.scrollY;
//         let diff = itemPos - position;
//         console.log('click', index, itemPos, position, diff);
//         // scroll.style.transform = `translateX(${index * 100}%)`;
//         if (diff < 5 && diff > -5) {
//             scroll.style.transform = `translateX(${index * 100}%)`;
//         }
//     };
// }
