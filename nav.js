// Sets position of the of the navigation menu's
// current selection indicator based on scroll position.

//!!!! perfect scroll position not possible due to varied layout currently.

const scroll = document.querySelector('.scroll-position');

window.onscroll = e => {
    let position = window.scrollY;
    let height =
        document.scrollingElement.scrollHeight -
        document.scrollingElement.clientHeight;

    let width = document.scrollingElement.clientWidth;

    let percent = (position / height) * 400;
    console.log(position, '/', height, '*', width, '=', percent);

    // multiply by 4 because the width of the indicator
    // is the length of each  of the 5 nav items
    scroll.style.transform = `translateX(${percent}%)`;
};
