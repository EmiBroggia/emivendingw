$(document).ready(function() {
  AOS.init();

  const navbar = $('.navbar');
  const scrollIcon = $('.scroll-icon');
  const mainContent = $('#main-content');

  $('#slide-toggle, .overlay').click(function() {
    $('.overlay').fadeToggle(50);
    $('#menu-slider').toggleClass('hide');
    $('#main-warapper').toggleClass('left');
    $('body').toggleClass('no-scroll');
  });

  const menuLinks = document.querySelectorAll('.nav-link');
  const imageHeader = document.querySelector('#image-header');

  let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

  function updateNavbar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const imageHeaderHeight = imageHeader.offsetHeight;

    menuLinks.forEach(link => {
      link.style.opacity = scrollTop >= imageHeaderHeight ? '0' : '1';
      link.style.transition = 'opacity 0.5s ease';
    });

    navbar.css({
      'transition': 'background-color 0.3s ease',
      'background-color': scrollTop > prevScrollPos ? 'rgba(0, 0, 0, 0.5)' : 'transparent'
    });

    prevScrollPos = scrollTop;
  }

  $(window).scroll(updateNavbar);

  scrollIcon.click(function() {
    mainContent[0].scrollIntoView({ behavior: 'smooth' });
  });

  $('#menu-slider ul li a').click(function() {
    $('#menu-slider').toggleClass('hide');
    $('.overlay').fadeToggle(300);
    $('body').toggleClass('no-scroll');
  });
});
