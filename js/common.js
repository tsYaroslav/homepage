'use strict'
/* show/hide <h1> at sticky sidebar */
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
