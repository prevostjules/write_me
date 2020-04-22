let title = document.getElementById('autotext');
let text = title.innerHTML;

let index = 0;

const randomSpeed = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const play = () => {
	title.innerHTML = text.slice(0, index)

	index++;

	if (index > text.length) {
		index = 0;
	}

	clearInterval(timer);
	timer = setInterval(play, randomSpeed(100,500));
};

let timer = setInterval(play, 300);

