// allow user to click image and play embeded youtube video

const appImg = document.querySelectorAll('.app-img');

const btns = document.querySelectorAll('.demo-btn');

const demos = document.querySelectorAll('.demo');

appImg.forEach((img, i) => {
    img.onclick = () => (demos[i].style.display = 'flex');
});

btns.forEach((btn, i) => {
    btn.onclick = () => (demos[i].style.display = 'flex');
});

demos.forEach((container) => {
    container.onclick = () => {
        const iframe = container.children[0].src;
        //force reload to stop video when closed
        container.children[0].src = iframe;
        container.style.display = 'none';
    };
});
