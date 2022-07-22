// 2
const img = document.querySelector(".headerPic");
const sourceImg = "img/bg2.jpg";
img.src = sourceImg;

// 3
const promo = document.querySelector(".main_promo");
promo.remove();

// 4
const title = document.querySelector("title");
if(sourceImg === "img/bg2.jpg"){
    title.textContent = "HITMAN'S WIFE'S BODYGUARD";
}
	
