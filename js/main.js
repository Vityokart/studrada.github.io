// Маска ввода номера телефона (плагин maskedinput)

$(window).scroll(function(){

	var st = $(this).scrollTop();

	console.log(st);

}); 

const navToggle = document.querySelector('.nav_toggle')
const nav = document.querySelector('.nav')

navToggle.addEventListener("click", function() {
    nav.classList.toggle('burger_show')
    navToggle.classList.toggle('active')
})