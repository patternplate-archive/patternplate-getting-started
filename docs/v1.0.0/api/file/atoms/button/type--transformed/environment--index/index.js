(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = main;
function clickHandler(times) {
	return function (_ref) {
		var target = _ref.target;

		times++;
		var time = times < 2 ? 'time' : 'times';
		var old = target.textContent;
		target.textContent = 'Clicked ' + times + ' ' + time;

		if (target.running) {
			return;
		}

		target.running = true;

		setTimeout(function () {
			target.textContent = old;
			target.running = false;
		}, 2000);
	};
}

function main() {
	var buttonElement = document.querySelector('.button');
	if (!buttonElement) {
		return;
	}

	buttonElement.addEventListener('click', clickHandler(0));
}

module.exports = exports['default'];

},{}]},{},[1])

;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFybmViL3Byb2plY3RzL3BhdHRlcm5wbGF0ZS9wYXR0ZXJucGxhdGUtZ2V0dGluZy1zdGFydGVkL3BhdHRlcm5zL2F0b21zL2J1dHRvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O3FCQ29Cd0IsSUFBSTtBQXBCNUIsU0FBUyxZQUFZLENBQUMsS0FBSyxFQUFFO0FBQzVCLFFBQU8sVUFBQyxJQUFRLEVBQUs7TUFBWixNQUFNLEdBQVAsSUFBUSxDQUFQLE1BQU07O0FBQ2QsT0FBSyxFQUFFLENBQUM7QUFDUixNQUFNLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFDMUMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUMvQixRQUFNLENBQUMsV0FBVyxnQkFBYyxLQUFLLFNBQUksSUFBSSxBQUFFLENBQUM7O0FBRWhELE1BQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtBQUNuQixVQUFPO0dBQ1A7O0FBRUQsUUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O0FBRXRCLFlBQVUsQ0FBQyxZQUFNO0FBQ2hCLFNBQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ3pCLFNBQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0dBQ3ZCLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDVCxDQUFDO0NBQ0Y7O0FBRWMsU0FBUyxJQUFJLEdBQUc7QUFDOUIsS0FBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4RCxLQUFJLENBQUMsYUFBYSxFQUFFO0FBQ25CLFNBQU87RUFDUDs7QUFFRCxjQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3pEIiwiZmlsZSI6Ii9Vc2Vycy9tYXJuZWIvcHJvamVjdHMvcGF0dGVybnBsYXRlL3BhdHRlcm5wbGF0ZS1nZXR0aW5nLXN0YXJ0ZWQvcGF0dGVybnMvYXRvbXMvYnV0dG9uL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBjbGlja0hhbmRsZXIodGltZXMpIHtcblx0cmV0dXJuICh7dGFyZ2V0fSkgPT4ge1xuXHRcdHRpbWVzKys7XG5cdFx0Y29uc3QgdGltZSA9IHRpbWVzIDwgMiA/ICd0aW1lJyA6ICd0aW1lcyc7XG5cdFx0Y29uc3Qgb2xkID0gdGFyZ2V0LnRleHRDb250ZW50O1xuXHRcdHRhcmdldC50ZXh0Q29udGVudCA9IGBDbGlja2VkICR7dGltZXN9ICR7dGltZX1gO1xuXG5cdFx0aWYgKHRhcmdldC5ydW5uaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGFyZ2V0LnJ1bm5pbmcgPSB0cnVlO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0YXJnZXQudGV4dENvbnRlbnQgPSBvbGQ7XG5cdFx0XHR0YXJnZXQucnVubmluZyA9IGZhbHNlO1xuXHRcdH0sIDIwMDApO1xuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKCkge1xuXHRjb25zdCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbicpO1xuXHRpZiAoIWJ1dHRvbkVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0XG5cdGJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIoMCkpO1xufVxuIl19