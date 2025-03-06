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
