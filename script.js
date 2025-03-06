document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobile-nav");

    hamburger.addEventListener("click", () => {
        mobileNav.style.left = mobileNav.style.left === "0px" ? "-250px" : "0";
    });

    // Dropdown Menu
    const menuBtn = document.getElementById("menu-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuBtn.addEventListener("click", () => {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Login Modal
    const loginModal = document.getElementById("login-modal");
    const loginBtn = document.getElementById("login-btn");
    const mobileLoginBtn = document.getElementById("mobile-login-btn");
    const closeBtn = document.querySelector(".close");

    [loginBtn, mobileLoginBtn].forEach(btn => btn.addEventListener("click", () => {
        loginModal.classList.add("show");
    }));

    closeBtn.addEventListener("click", () => {
        loginModal.classList.remove("show");
    });
});
