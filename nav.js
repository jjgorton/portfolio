// Sets position of the of the navigation menu's
// current selection indicator based on scroll position.

// this is to check if the indicator needs to translate Y or X
let dir = window.matchMedia('(min-width: 700px)');
const check = media => (media.matches ? 'Y' : 'X');
dir.addListener(check);

const scroll = document.querySelector('.scroll-position');
const aboutT = document.getElementById('about').getBoundingClientRect().top;
const aboutB = document.getElementById('about').getBoundingClientRect().bottom;
const skillsT = document.getElementById('skills').getBoundingClientRect().top;
const skillsB = document.getElementById('skills').getBoundingClientRect()
    .bottom;
const projectsT = document.getElementById('projects').getBoundingClientRect()
    .top;
const projectsB = document.getElementById('projects').getBoundingClientRect()
    .bottom;
const contactT = document.getElementById('contact').getBoundingClientRect().top;
const contactB = document.getElementById('contact').getBoundingClientRect()
    .bottom;

window.onscroll = e => {
    console.log(check(dir));
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
    }
    // console.log('skills', skillsT, skillsB);
    if (position > skillsT - 50 && position < skillsB - 50) {
        // console.log('skills if');
        scroll.style.transform = `translate${check(dir)}(${100}%)`;
    }
    // console.log('project', projectsT, projectsB);
    if (position > projectsT - 50 && position < projectsB + 200) {
        // console.log('proj if');
        scroll.style.transform = `translate${check(dir)}(${200}%)`;
    }
    // console.log('contact', contactT, contactB);
    if (position > contactT + 200 && position < contactB) {
        // console.log('contact if');
        scroll.style.transform = `translate${check(dir)}(${300}%)`;
    }
};

// const navItem = document.querySelectorAll('.nav-item');
// navItem.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         navIndicator(item, i);
//     });
// });

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
