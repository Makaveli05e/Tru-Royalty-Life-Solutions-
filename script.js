document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents instant navigation for effect to play
        let text = this.textContent; // Gets the link text
        let index = 0;
        this.textContent = ""; // Clears the text for animation

        function typeEffect() {
            if (index < text.length) {
                link.textContent += text[index];
                index++;
                setTimeout(typeEffect, 50);
            } else {
                window.location.href = link.href; // Redirect after animation
            }
        }
        typeEffect();
    });
});
// JavaScript to toggle the mobile navigation menu visibility
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

hamburger.addEventListener("click", () => {
    if (navList.style.left === "0px") {
        navList.style.left = "-250px";  // Hide the mobile menu
    } else {
        navList.style.left = "0";  // Show the mobile menu
    }
});

