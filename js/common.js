'use strict'

/*  Show/hide <h1> at sticky sidebar  */
const nav = document.querySelector('.sidebar');
const navTop = nav.offsetTop + 40;

const stickyNavigation = () => {
  if (window.scrollY >= navTop) {
    document.querySelector('.sidebar-h2').classList.add('visible');
  } else {
    document.querySelector('.sidebar-h2').classList.remove('visible');
  }
}

window.addEventListener('scroll', stickyNavigation);

/*  Dark mode  */
const body = document.querySelector("body");
const darkModeToggler = document.querySelector(".darkModeToggler input");

if(+localStorage.darkMode === 1) {
  body.classList.add("dark-mode");
  darkModeToggler.checked = true;
}

darkModeToggler.addEventListener('change', () => {
body.classList.toggle("dark-mode");

  if(body.classList.contains("dark-mode")){
		localStorage.darkMode = 1;
	} else {
    localStorage.darkMode = 0;
  }
  
});

/*  preloader  */
body.classList.add('loaded-hiding');
		window.setTimeout(function () {
		  body.classList.add('loaded');
		  body.classList.remove('loaded-hiding');
}, 500);

/*  tweet sound on clicked twitter link  */
const audio1 = document.querySelector('.tweet-sound');
const trigger1 = document.querySelector('.tweet-trigger');

trigger1.addEventListener("click", (e) => {
  const href = trigger1.href;
    /*  prevent default link behavior for a while, to play a sound till the end  */
    e.preventDefault();
    audio1.currentTime = 0;
    audio1.play();
    setTimeout(() => { window.location = href; }, 1000);
});

/*  toggle sound on clicked dark mode toggler  */
const audio2 = document.querySelector('.toggler-sound');
const trigger2 = document.querySelector('.toggler-trigger');

trigger2.addEventListener("click", (e) => {
    audio2.currentTime = 0;
    audio2.play();
});