document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuBtn.addEventListener("click", () => {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });

    document.addEventListener("click", (event) => {
        if (!dropdownMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });

    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobile-nav");

    hamburger.addEventListener("click", () => {
        if (mobileNav.style.left === "0px") {
            mobileNav.style.left = "-250px"; 
        } else {
            mobileNav.style.left = "0";
        }
    });
});
