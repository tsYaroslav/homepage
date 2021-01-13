'use strict'

/* Show/hide <h1> at sticky sidebar */
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

/* Dark mode */
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

/* preloader */
body.classList.add('loaded-hiding');
		window.setTimeout(function () {
		  body.classList.add('loaded');
		  body.classList.remove('loaded-hiding');
}, 500);

/* tweet sound on clicked twitter link */
const audio = document.querySelector('.tweet-sound');
const tweetTrigger = document.querySelector('.tweet-trigger');

tweetTrigger.addEventListener("click", (e) => {
  const href = tweetTrigger.href;
    /* prevent default link behavior for a while, to play a sound till the end */
    e.preventDefault();
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => { window.location = href; }, 1000);
});