// adding simple hover animations to clickable items

const links = document.querySelectorAll('a');
// console.log(links);

links.forEach(link => {
    let color = getStyle(link, 'color');
    console.log(color);
    // let newColor = LightenDarkenColor(color, 16);
    let newColor = '#a7e3ff';
    console.log(newColor);

    //move up
    link.style.transition = 'all 0.2s ease-out';
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px)';
        link.style.color = newColor;
    });
    link.addEventListener('mouseleave', () => {
        console.log('leave');
        link.style.transform = 'translateY(0px)';
        link.style.color = color;
    });
});

const title = document.querySelectorAll('.title');
// console.log(title);

title.forEach(link => {
    //change color
    // let color = getStyle(link, 'color');
    // console.log(color);
    // let newColor = LightenDarkenColor(color, -19);
    // console.log(newColor);

    //move
    link.style.transition = 'transform 0.2s ease-out';
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px)';
        // link.style.color = newColor;
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0px)';
        // link.style.color = color;
    });
});

//below function from: https://www.quirksmode.org/dom/getstyles.html
function getStyle(el, styleProp) {
    //changed this to take DOM element instead of id
    var x = el;
    if (x.currentStyle) var y = x.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView
            .getComputedStyle(x, null)
            .getPropertyValue(styleProp);
    return y;
}

// below function found: https://css-tricks.com/snippets/javascript/lighten-darken-color/

function LightenDarkenColor(col, amt) {
    var usePound = false;

    if (col[0] == '#') {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    //changed this to always use hex
    return '#' + (g | (b << 8) | (r << 16)).toString(16);
}

//putting the two above funtions together:
// function changeColor(element) {
//     let color = getStyle(element, 'color');
//     console.log(color);
//     let newColor = LightenDarkenColor(color, 200);
//     console.log(newColor);
//     return newColor;
// }
