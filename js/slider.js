const images = [
	'images/img2.jpg',
	'images/img3.jpg',
	'images/img4.jpg',
	'images/img5.jpg',
	'images/img6.jpg',
	'images/img7.jpg',
	'images/img8.jpg',
	'images/img9.jpg',
	'images/img10.jpg',
	'images/img1.webp',
]

let imgindex = 0;
const imgEl = document.getElementById('slider-img')
setInterval( () => {
	if(imgindex === images.length){
		imgindex = 0;
	}
	const imgUrl = images[imgindex];
	console.log(imgindex, imgUrl);
	imgEl.setAttribute('src', imgUrl);
	imgindex++;

} ,1000)
