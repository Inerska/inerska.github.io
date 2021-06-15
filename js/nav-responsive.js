document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    const navbarItems = document.querySelectorAll(".navbar-item");

    window.innerWidth <= 1024 ? disableTransparent() : enableTransparent();

    if ($navbarBurgers.length > 0) {

        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                const target = el.dataset.target;
                const $target = document.getElementById(target);

                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

});

document.addEventListener('scroll', () => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? disableTransparent() : enableTransparent();
});

const navbarItems = document.querySelectorAll(".navbar-item");
const navbar = document.getElementById("transparent-source");

function disableTransparent() {
    navbar.classList.add("bg-light");

    navbarItems.forEach(el => el.classList.remove("has-text-white"));
}

function enableTransparent() {
    if (window.innerWidth >= 1024) {
        navbar.classList.remove("bg-light");

        navbarItems.forEach(el => el.classList.add("has-text-white"));
    }
}