window.onscroll = function() {
	let elms = document.getElementsByClassName("skill");
	for (i = 0; i <elms.length; i++) {
		let isVisable = checkVisible(elms[i]);

		if (isVisable) {
			elms[i].classList.add("skill-animation");
		}
		else {
			elms[i].classList.remove("skill-animation");
		}
	}
};

function checkVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}