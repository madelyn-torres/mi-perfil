/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


window.addEventListener('scroll', function() {
    var element = document.getElementById('bienvenida');
    var position = element.getBoundingClientRect();
  
    // Verifica si el cuadro está en la vista
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
      element.classList.add('slide-in');
    }
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para manejar el scroll
function handleScroll() {
    var skillsSection = document.querySelector('.skills-container');
    if (isElementInViewport(skillsSection)) {
        skillsSection.classList.add('skills-visible', 'animate__animated', 'animate__fadeInUp');
    }
}

// Agregar evento de scroll
window.addEventListener('scroll', handleScroll);
  