function init() {
    const hamburgerIcon = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.nav-mobile');
    const closeMobileNav = document.querySelector('.close');
    hamburgerIcon.addEventListener('click', () => {
        mobileNav.classList.add('show');
    });
    closeMobileNav.addEventListener('click', () => {
        mobileNav.classList.remove('show');
    })
}

init();
