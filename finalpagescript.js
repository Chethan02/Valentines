document.addEventListener("DOMContentLoaded", function () {
    const magicButton = document.getElementById("magicButton");
    const surpriseMessage = document.getElementById("surpriseMessage");
    const container = document.querySelector(".container");

    magicButton.addEventListener("click", function (event) {
        surpriseMessage.classList.toggle("hidden");
        magicButton.innerText = "You're My Forever ❤️";

        // Create Sparkles
        for (let i = 0; i < 15; i++) {
            createSparkle(event.clientX, event.clientY);
        }
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = `${x + (Math.random() * 50 - 25)}px`;
        sparkle.style.top = `${y + (Math.random() * 50 - 25)}px`;
        container.appendChild(sparkle);

        // Remove sparkles after animation
        setTimeout(() => sparkle.remove(), 1000);
    }
});
