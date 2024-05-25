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