require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Pattern":[function(require,module,exports){
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

},{}]},{},[]);
;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Pattern = require('Pattern');

var _Pattern2 = _interopRequireDefault(_Pattern);

(0, _Pattern2['default'])();

},{"Pattern":undefined}]},{},[1])

;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFybmViL3Byb2plY3RzL3BhdHRlcm5wbGF0ZS9wYXR0ZXJucGxhdGUtZ2V0dGluZy1zdGFydGVkL3BhdHRlcm5zL2F0b21zL2J1dHRvbi9kZW1vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7Ozs7O3VCQ0FvQixTQUFTOzs7O0FBQzdCLDJCQUFTLENBQUMiLCJmaWxlIjoiL1VzZXJzL21hcm5lYi9wcm9qZWN0cy9wYXR0ZXJucGxhdGUvcGF0dGVybnBsYXRlLWdldHRpbmctc3RhcnRlZC9wYXR0ZXJucy9hdG9tcy9idXR0b24vZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHBhdHRlcm4gZnJvbSAnUGF0dGVybic7XG5wYXR0ZXJuKCk7XG4iXX0=