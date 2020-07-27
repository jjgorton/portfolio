// Sets position of the of the navigation menu's
// current selection indicator based on scroll position.

// this is to check if the indicator needs to translate Y or X
let dir = window.matchMedia('(min-width: 700px)');
// putting the nav back at the bottom for all screen sizes !('Y' : 'X')
const check = (media) => (media.matches ? 'X' : 'X');
dir.addListener(check);

window.onscroll = (e) => {
    const scroll = document.querySelector('.scroll-position');

    // let zoom = window.devicePixelRatio;

    const about = document.getElementById('about');
    const aboutB = about.getBoundingClientRect().bottom;

    // const skills = document.getElementById('skills');
    // const skillsB = skills.getBoundingClientRect().bottom;

    // const projects = document.getElementById('projects');
    // const projectsB = projects.getBoundingClientRect().bottom;

    const coachMe = document.getElementById('coachMe');
    const coachMeB = coachMe.getBoundingClientRect().bottom;

    const noiseController = document.getElementById('noiseController');
    const noiseControllerB = noiseController.getBoundingClientRect().bottom;

    const deforestDash = document.getElementById('deforestDash');
    const deforestDashB = deforestDash.getBoundingClientRect().bottom;

    const winHeight = window.innerHeight / 2;

    // check(dir) returns 'X' or 'Y' depending on screen size
    if (aboutB > winHeight) {
        scroll.style.transform = `translate${check(dir)}(${0}%)`;
    }
    // if (aboutB < winHeight && skillsB > winHeight) {
    //     scroll.style.transform = `translate${check(dir)}(${100}%)`;
    // }
    // if (skillsB < winHeight && projectsB > winHeight) {
    //     scroll.style.transform = `translate${check(dir)}(${200}%)`;
    // }
    if (aboutB < winHeight && coachMeB > winHeight) {
        scroll.style.transform = `translate${check(dir)}(${100}%)`;
    }
    if (coachMeB < winHeight && noiseControllerB > winHeight) {
        scroll.style.transform = `translate${check(dir)}(${200}%)`;
    }
    if (noiseControllerB < winHeight && deforestDashB > winHeight) {
        scroll.style.transform = `translate${check(dir)}(${300}%)`;
    }
    if (deforestDashB < winHeight) {
        scroll.style.transform = `translate${check(dir)}(${400}%)`;
    }
};
