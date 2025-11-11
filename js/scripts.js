/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

ScrollReveal().reveal('.resume-section-content', {
  distance: '40px',
  origin: 'bottom',
  duration: 900,
  easing: 'ease-out',
  interval: 100
});


ScrollReveal().reveal('.resume-section-content', {
  distance :'40px',       // 位移距離
  origin: 'bottom',       // 從哪裡出現
  duration: 900,          // 動畫時間
  easing: 'ease-out',     // 動畫曲線
  interval: 80,           // 每個子元素依序浮動
  reset: true             // ⭐ 重點：每次出現在視窗中都會再播放
});

