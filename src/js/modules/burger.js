const burger = (selectorHamburgerBtn, selectorHamburger) => {
    const hamburgerBtn = document.querySelector(selectorHamburgerBtn);
    const hamburger = document.querySelector(selectorHamburger);

    hamburgerBtn.addEventListener('click', () => {
        hamburger.classList.toggle('active-class');
    });

};

export default burger;