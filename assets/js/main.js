function toggleMobileMenu() {
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');

  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
}

// Menü dışına tıklandığında menüyü kapat
document.addEventListener('click', function (event) {
  const navMenu = document.getElementById('navMenu');
  const menuToggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('.header');

  if (!header.contains(event.target) && navMenu && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

function initBannerSlider() {
  new Swiper(".bannerSwiper", {
    loop: false,
    autoplay: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        const activeSlide = this.slides[this.activeIndex];
        const bg = activeSlide.getAttribute("data-bg") || '#f8f8f8';
        document.querySelector(".home-slider").style.background = `${bg}`;
      },
      init: function () {
        const activeSlide = this.slides[this.activeIndex];
        const bg = activeSlide.getAttribute("data-bg") || '#f8f8f8';
        document.querySelector(".home-slider").style.background = `${bg}`;
      },
    },

  });
}
// dropdown js
document.querySelectorAll('.dropdown').forEach(dropdown => {
  const toggleBtn = dropdown.querySelector('.dropdown-toggle');
  const menu = dropdown.querySelector('.dropdown-menu');

  toggleBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('show');
    toggleBtn.classList.toggle('show');
  });

  document.addEventListener('click', function () {
    menu.classList.remove('show');
    toggleBtn.classList.remove('show');
  });
});

function initPartnerShipSlider() {
  new Swiper('.partnership-slider', {
    slidesPerView: 2.5,
    spaceBetween: 10,
    loop: true,
    autoplay: false,
    breakpoints: {
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
    navigation: {
      nextEl: ".partnership-button-next",
      prevEl: ".partnership-button-prev",
    },
  });
}
// Tab switching functionality
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
  });
});
new Swiper('.pricing-swiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 29,
    }
  }
});
initBannerSlider()
initPartnerShipSlider()
