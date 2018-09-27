function eventListeners(){
	//window event lsit
window.addEventListener('load', function () {
	document.querySelector('.preloader').style.display = "none";
});

// nav btn
document.querySelector('.navBtn').addEventListener('click', function () {
	document.querySelector('.nav').classList.toggle('nav-show');
});
}
eventListeners();
