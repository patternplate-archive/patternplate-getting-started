function clickHandler(times) {
	return ({target}) => {
		times++;
		const time = times < 2 ? 'time' : 'times';
		const old = target.textContent;
		target.textContent = `Clicked ${times} ${time}`;

		if (target.running) {
			return;
		}

		target.running = true;

		setTimeout(() => {
			target.textContent = old;
			target.running = false;
		}, 2000);
	};
}

export default function main() {
	const buttonElement = document.querySelector('.button');
	if (!buttonElement) {
		return;
	}
	
	buttonElement.addEventListener('click', clickHandler(0));
}
