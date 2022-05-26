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

// AOS.init({
//     duration: 1500,
//     // offset: 50,
//     // once: true,
// });



////////////////////////////////////////////
// Swiper  Init 
////////////////////////////////////////////
// Hero


// var heroSwiperText = new Swiper(".hero-swiper-text", {
//     speed: 1000,
//     watchSlidesProgress: true,
//     thumbs: {
//         swiper: heroSwiper,
//     },
// });
// heroSwiperText.on("slideChange", (e) => {
//     var slideIndex = e.activeIndex;
//     heroSwiper.slideTo(slideIndex);
// });
var heroSwiper = new Swiper(".hero-swiper", {
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".hero-swiper .swiper-pagination",
        clickable: true,
    },
    thumbs: {
        // swiper: heroSwiperText,
    },
});

// Projects
var projectsSwiper = new Swiper(".projects-swiper", {
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


// Count Down

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "11/06/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());





////////////////////////////////////////////
// Jquery Init
////////////////////////////////////////////



(function ($) {

    // dropdown-toggle class not added for submenus by current WP Bootstrap Navwalker as of November 15, 2017.
    $('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');

    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-menu > .dropdown .show').removeClass("show");
        });
        return false;
    });




    $(document).ready(function () {
        if (window.location.hash) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(window.location.hash).offset().top - 170
            }, 1000);
        }
        $('select').niceSelect();

        //smoothscroll

        $('#menuNavBar a[href*="#"]').click(function () {
            let itemID = $(this).prop('hash');
            $('#menuNavBar a[href*="#"]').each(function () {
                $(this).removeClass('active');
            })
            $([document.documentElement, document.body]).animate({
                scrollTop: $(itemID).offset().top - 170
            }, 1000);
            $(this).addClass('active');

            if ($(window).width() < 960) {
                $('.navbar-toggler').click();
            }
        });


    });
})(jQuery);