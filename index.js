let SCORE = 0;

let ghosts = document.querySelectorAll(".ghost");
for (let i = 0, ghost; ghost = ghosts[i]; i++) {
    let ghostClick = function () {
        let opacity = window.getComputedStyle(ghost).opacity;
        console.log("opacity " + i + " = " + opacity);
        if (opacity !== "0") {
            ghost.style.animation = "up 0s";
            ghost.style.opacity = "0";
            let score = document.getElementById('score');
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

let upriseGhost = setTimeout(function uprise () {
    let i = getRandomGhost();
    console.log("ghost: " + i);
    console.log("time: " + getRandomTime());
    ghosts[i].style.animation = "up 500ms linear";
    ghosts[i].style.opacity = "1";
    // ghosts[i].style.animation = "down 2000ms linear";
    // ghosts[i].style.opacity = "0";
    setTimeout(function () {
        ghosts[i].style.animation = "down 1000ms linear";
        ghosts[i].style.opacity = "0";
    }, 2000);
    upriseGhost = setTimeout(uprise, getRandomTime());
}, getRandomTime());

