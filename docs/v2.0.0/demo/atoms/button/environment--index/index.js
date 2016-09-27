(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({},{},[]);
;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// patterns/button/demo.js

var button = require('Pattern'); // import default export of index.js
button();
},{"Pattern":2}],2:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYXR0ZXJucy9hdG9tcy9idXR0b24vZGVtby5qcyIsInBhdHRlcm5zL2F0b21zL2J1dHRvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBwYXR0ZXJucy9idXR0b24vZGVtby5qc1xuXG52YXIgYnV0dG9uID0gcmVxdWlyZSgnUGF0dGVybicpOyAvLyBpbXBvcnQgZGVmYXVsdCBleHBvcnQgb2YgaW5kZXguanNcbmJ1dHRvbigpOyIsIi8vIHBhdHRlcm5zL2J1dHRvbi9pbmRleC5qc1xuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKHRpbWVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdGltZXMrKztcbiAgICAgICAgY29uc3QgdGltZSA9IHRpbWVzIDwgMiA/ICd0aW1lJyA6ICd0aW1lcyc7XG4gICAgICAgIGNvbnN0IG9sZCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFsnQ2xpY2tlZCcsIHRpbWVzLCB0aW1lXS5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUudGFyZ2V0LnJ1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBvbGQ7XG4gICAgICAgICAgICBlLnRhcmdldC5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKTtcbiAgICBidXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKDApKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYWluOyJdfQ==
