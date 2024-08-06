const isHeaderExist = document.getElementById("jsHeader");
if (isHeaderExist && isHeaderExist) {
    // HEADER
    const header = document.getElementById("jsHeader");
    let prevScrollPos = window.pageYOffset;

    window.addEventListener("scroll", () => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            header.classList.remove("bt-header-scroll-up");
        } else {
            header.classList.add("bt-header-scroll-up");
        }
        prevScrollPos = currentScrollPos;
    });

    // NAVBAR START
    let body = document.body;
    let navMenu = document.getElementById("jsHeaderNav");
    let navbarToggler = document.getElementById("navbarToggler");
    navbarToggler.addEventListener("click", () => {
        navMenu.classList.toggle("js-show");
        body.classList.toggle("overflow-hidden");
        navbarToggler.classList.toggle("js-toggled");
    });
    // NAVBAR END

    let navLinks = document.querySelectorAll(".js-nav-link");
    navLinks.forEach(function (clickedNav) {
        clickedNav.addEventListener("click", () => {
            navMenu.classList.remove("js-show");
            body.classList.remove("overflow-hidden");
            navbarToggler.classList.remove("js-toggled");
        });
    });

    let contactButton = document.getElementById("jsContactButton");
    contactButton.addEventListener("click", () => {
        navMenu.classList.remove("js-show");
        body.classList.remove("overflow-hidden");
        navbarToggler.classList.remove("js-toggled");
    })
} else {
    console.log("Header is Not Available");
}


if (window.innerWidth < 992) {
    jQuery('.js-nav-megamenu').click(function() {
        jQuery(this).find('.dropdown-menu').toggleClass("megopen");
        jQuery(this).find('.js-nav-link svg').toggleClass("up");
        jQuery("#navbarToggler").click();
    });
}
else{
    jQuery(document).ready(function () {
        jQuery(".js-nav-megamenu").hover(
            function () {
                jQuery('.dropdown-menu', this).stop().fadeIn("fast");
            },

            function () {
                jQuery('.dropdown-menu', this).stop().fadeOut("fast");
            });
    });
}


if (document.getElementById('autosearchbar')) {
    let inputField = document.getElementById('autosearchbar');
    inputField.addEventListener('input', changeAutoCompleteSearch);
}


function changeAutoCompleteSearch({ target }) {
    let data = target.value;
    let searchListContain = document.getElementById('searchListContain');

    if (data.length > 0) {
        searchListContain.classList.remove("d-none");
    }else{
        searchListContain.classList.add("d-none");
    } 
}

jQuery(document).on('click', '.seemore', function () {

    var container = jQuery(this).closest(".js-pricing-plan-card").find(".js-pricing-plan-benefits-list .more-features");

    if (!container.hasClass('active')) {
        container.addClass('show').outerWidth();
        container.addClass('active');
    }
    else {
        container.removeClass('active').one('transitionend', function () {
            container.removeClass('show');
        });
    }

});