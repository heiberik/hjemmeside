
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 2;
let next = 1;

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);

const neste = () => gotoNext();
const forrige = () => gotoPrev();

button[0].addEventListener("click", neste);
button[1].addEventListener("click", forrige);

slides[next].addEventListener("click", neste);
slides[prev].addEventListener("click", forrige);

const gotoNum = number => {

	current = number;
	prev = current - 1;
	next = current + 1;

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
		slides[i].classList.remove("prev");
		slides[i].classList.remove("next");
		slides[i].removeEventListener("click", neste);
		slides[i].removeEventListener("click", forrige);
	}

	if (next == 3) {
		next = 0;
	}

	if (prev == -1) {
		prev = 2;
	}

	slides[current].classList.add("active");
	slides[prev].classList.add("prev");
	slides[next].classList.add("next");

	slides[next].addEventListener("click", neste);
	slides[prev].addEventListener("click", forrige);

}
