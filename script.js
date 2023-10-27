// Scroll-to-Top Button Funktion
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = 'Zum Anfang';
scrollToTopBtn.id = 'scrollToTopBtn';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dunkler Modus
let darkModeToggle = document.createElement('button');
darkModeToggle.innerText = 'Dunkler Modus';
darkModeToggle.id = 'darkModeToggle';
document.querySelector('.header').appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Hamburger Menü Toggle
let menuBtn = document.getElementById('menuBtn');
let navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', function() {
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});

// Um sicherzustellen, dass das Menü beim Laden der Seite nicht angezeigt wird.
navMenu.style.display = 'none';

document.addEventListener('click', function(event) {
    if (event.target !== menuBtn && event.target !== navMenu) {
        navMenu.style.display = 'none';
    }
});

// Um sicherzustellen, dass das Menü beim Laden der Seite nicht angezeigt wird.
navMenu.style.display = 'none';



// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("mainNav");
  
    menuBtn.addEventListener("click", function () {
      if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "block";
      }
    });
  
    // Um sicherzustellen, dass das Menü beim Laden der Seite nicht angezeigt wird.
    document.getElementById("mainNav").style.display = "none";
  });
  
  
