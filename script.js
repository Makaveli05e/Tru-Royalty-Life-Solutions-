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

    document.addEventListener("click", (event) => {
        if (!dropdownMenu.contains(event.target) && event.target !== menuBtn) {
            dropdownMenu.style.display = "none";
        }
    });
});
