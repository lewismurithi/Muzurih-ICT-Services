var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //Breakpoints for smaller devices
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1.
      },
      640: {
        slidesPerView: 3
      },
    }

  });
// MObile Menu
document.addEventListener('DOMContentLoaded', ()=>{
const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click', () =>{
  mobileMenu.classList.toggle('active')
});
}) ;




