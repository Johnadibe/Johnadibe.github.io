// Mobile Menu appears on clicking the hamburger menu and dissapers on clicking the close button

const btnNavigationElement = document.querySelector('.btn-mobile-nav');
const headerElement = document.querySelector('.header');

btnNavigationElement.addEventListener('click', function() {
    headerElement.classList.toggle("nav-open");
});

// Mobile Menu dissapear on clicking any of the mobile options
const navLinks = document.querySelectorAll(".main-nav-link");
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        headerElement.classList.remove("nav-open");
    });
});