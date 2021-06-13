document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    const navbarItems = document.querySelectorAll(".navbar-item");

    navbarItems.forEach(el => el.classList.add("has-text-white"));

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

window.onscroll = () => {document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? disableTransparent() : enableTransparent()};

const navbarItems = document.querySelectorAll(".navbar-item");

function disableTransparent()
{
    document.getElementById("transparent-source").classList.add("bg-light");

    navbarItems.forEach(el => el.classList.remove("has-text-white"));
}

function enableTransparent()
{
    document.getElementById("transparent-source").classList.remove("bg-light");

    navbarItems.forEach(el => el.classList.add("has-text-white"));
}