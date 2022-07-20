function getColorName() {
	const main = document.querySelector(".main");
	const body = document.querySelector("body");
	const nameDiv = document.querySelector(".colorName");
	main.addEventListener("click", (e) => {
		let color1 = Math.round((Math.random(1) + 1) * 100);
		let color2 = Math.round((Math.random(2) + 1) * 100);
		let color3 = Math.round(Math.random(1) * 100);
		body.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
		nameDiv.innerHTML = `rgb(${color1},${color2},${color3})`;
	});
}
getColorName();
