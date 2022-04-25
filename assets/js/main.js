////////////////////////////////////////////
// init the func when document loaded
////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.loader-container').style.display = "none";

    var clientHeight = document.getElementById('header').clientHeight;
    var header = document.getElementById('header');
    var mainWrapper = document.getElementById('main');

    // mainWrapper.style.marginTop = clientHeight;

    mainWrapper.style["margin-top"] = clientHeight + 'px'

});


////////////////////////////////////////////
// back to top
////////////////////////////////////////////
const scrollBtnX = document.querySelector(".back-to-top");

const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtnX.style.visibility = "visible";
    } else {
        scrollBtnX.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollBtnX.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


////////////////////////////////////////////
// Animation AOs Init Scrolling
////////////////////////////////////////////

AOS.init({
    duration: 1500,
    // offset: 50,
    // once: true,
});



////////////////////////////////////////////
// Swiper  Init 
////////////////////////////////////////////
// Hero
var swiper = new Swiper(".hero-swiper", {
    speed: 1000,
    // autoplay: {
    //     delay: 5000,
    // },
    pagination: {
        el: ".hero-swiper .swiper-pagination",
        clickable: true,

    },
});


// Projects
var swiper = new Swiper(".projects-swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    speed: 1000,

    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.recent-projects .button-next',
        prevEl: '.recent-projects .button-prev',
    },

});
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });

////////////////////////////////////////////
// Jquery Init
////////////////////////////////////////////



(function ($) {


})(jQuery);