// patterns/button/index.js
function clickHandler(times) {
    return function(e) {
        times++;
        const time = times < 2 ? 'time' : 'times';
        const old = e.target.textContent;
        e.target.textContent = ['Clicked', times, time].join(' ');

        if (e.target.running) {
            return;
        }

        e.target.running = true;

        setTimeout(function () {
            e.target.textContent = old;
            e.target.running = false;
        }, 2000);
    };
}

function main() {
    const buttonElement = document.querySelector('.button');
    buttonElement.addEventListener('click', clickHandler(0));
}

module.exports = main;