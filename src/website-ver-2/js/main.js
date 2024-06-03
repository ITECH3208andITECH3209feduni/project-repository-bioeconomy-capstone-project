(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
})(jQuery);

// Popup Functions
function openPopup(id) {
    var popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'flex';
    }
}

function closePopup(id) {
    var popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'none';
    }
}

function zoomIn(imageId) {
    let img = document.getElementById(imageId);
    if (img) {
        let currWidth = img.clientWidth;
        img.style.width = (currWidth + 100) + "px";
    }
}

function zoomOut(imageId) {
    let img = document.getElementById(imageId);
    if (img) {
        let currWidth = img.clientWidth;
        if (currWidth > 100) {
            img.style.width = (currWidth - 100) + "px";
        }
    }
}

function openProportionalMixPopup() {
    openPopup('proportionalMixPopup');
}

// Keydown Events for Popups
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closePopup('popupExcludingForestry');
        closePopup('popupIncludingForestry');
        closePopup('proportionalMixPopup');
    }
});

document.querySelectorAll('.popup-opener').forEach(function (element) {
    element.addEventListener('click', function () {
        var targetId = this.getAttribute('data-target');
        openPopup(targetId);
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        var activeElement = document.activeElement;
        if (activeElement.classList.contains('popup-opener')) {
            var targetId = activeElement.getAttribute('data-target');
            openPopup(targetId);
        }
    }
});

// Highlight Active Page Link
document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('.nav-item .nav-link');
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
});

// Gallery Functionality
document.addEventListener('DOMContentLoaded', function () {
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const gallery = document.getElementById('gallery');
    const items = Array.from(gallery.children);
    shuffle(items);

    gallery.innerHTML = '';
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        gallery.appendChild(item);
    });

    const lightbox = GLightbox({
        selector: 'a[data-lightbox]',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        openEffect: 'zoom',
        closeEffect: 'fade',
        slideEffect: 'fade',
        moreText: 'More',
        slideEndAnimation: false
    });

    // Ensure lightbox images are centered and stable
    lightbox.on('open', () => {
        document.querySelectorAll('.gslide-image').forEach(image => {
            image.style.position = 'fixed';
            image.style.top = '50%';
            image.style.left = '50%';
            image.style.transform = 'translate(-50%, -50%)';
        });
    });

    lightbox.on('slide_changed', () => {
        document.querySelectorAll('.gslide-image').forEach(image => {
            image.style.position = 'fixed';
            image.style.top = '50%';
            image.style.left = '50%';
            image.style.transform = 'translate(-50%, -50%)';
        });
    });

    document.querySelectorAll('.glightbox-arrow').forEach(arrow => {
        arrow.style.color = '#fff';
        arrow.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        arrow.style.borderRadius = '50%';
        arrow.style.padding = '10px';
    });

    document.querySelectorAll('.glightbox-arrow:hover').forEach(arrow => {
        arrow.style.backgroundColor = 'rgba(255, 165, 0, 0.8)';
    });
});

// About Page Scroll Indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.querySelector('.dynamic-container').scrollIntoView({ behavior: 'smooth' });
});

// Navbar Highlight Underline
document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

