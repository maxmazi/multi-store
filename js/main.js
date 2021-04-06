$('#iconified').on('keyup', function() {
    var input = $(this);
    if (input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty');
    }
});




/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/*----slider script----*/
var swiper = new Swiper('.index-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    init: true,
    followFinger: true,
    allowTouchMove: true,
    loop: false,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});
var swiper = new Swiper('.group-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    followFinger: true,
    allowTouchMove: true,
    loop: false,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});

var swiper = new Swiper('.product-slider', {
    pagination: {
        el: '.swiper-pagination',
    },
});




let latestScroll = 0
window.onscroll = function() {
    var nav = document.getElementById('secondNav');
    if (window.pageYOffset > 200) {
        nav.classList.add("navbar2");
        latestScroll = window.pageYOffset
        return true;
    } else {
        nav.classList.remove("navbar2");
    }
    if (window.pageYOffset < latestScroll && window.pageYOffset > 200) {
        nav.classList.remove("navbar2");
    } else if (window.pageYOffset > latestScroll && window.pageYOffset > 200) {
        nav.classList.add("navbar2");
    }
    latestScroll = window.pageYOffset
}


/*footer read more js*/
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "نمایش بیشتر";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "نمایش کمتر";
        moreText.style.display = "inline";
    }
}


/*price range slider*/

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 43000000,
    from: 200,
    to: 500,
    grid: true
});


/*bttb
$(function() {
    var header = $(".cd-top-none");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('cd-top-none').addClass("cd-top");
        } else {
            header.removeClass("cd-top").addClass('cd-top-none');
        }
    });
});
*/


/*bttb*/
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });

    $('#toTopBtn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});



/* color select jquery*/