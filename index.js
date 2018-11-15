let SCORE = 0;
let score = document.getElementById('score');

let ghosts = document.querySelectorAll(".ghost");
for (let i = 0, ghost; ghost = ghosts[i]; i++) {
    let ghostClick = function () {
        let opacity = window.getComputedStyle(ghost).opacity;
        console.log("opacity " + i + " = " + opacity);
        if (opacity !== "0") {
            if (ghosts[i].classList.contains('down')) ghosts[i].classList.remove('down');
            if (ghosts[i].classList.contains('up')) ghosts[i].classList.remove('up');
            ghost.classList.add('click');
            ghost.classList.remove('click');
            score.textContent = "" + ++SCORE;
        }
    };
    ghost.addEventListener("click", ghostClick);
}

function getRandomGhost() {
    return Math.floor(Math.random() * (ghosts.length - 1));
}

function getRandomTime() {
    return Math.floor(Math.random() * (2000));
}

setInterval(function () {
    let i = getRandomGhost();
    console.log("ghost: " + i);
    console.log("time: " + getRandomTime());
    if (ghosts[i].classList.contains('down')) ghosts[i].classList.remove('down');
    ghosts[i].classList.add('up');
    setTimeout(function () {
        ghosts[i].classList.add('down');
        ghosts[i].classList.remove('up');
    }, 1000);
}, 1500);

