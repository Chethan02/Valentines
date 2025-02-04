document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const message = document.getElementById("message");

    noBtn.addEventListener("mouseenter", function () {
        // Get viewport size
        const maxX = window.innerWidth - noBtn.offsetWidth - 20; // Prevents going off-screen horizontally
        const maxY = window.innerHeight - noBtn.offsetHeight - 20; // Prevents going off-screen vertically

        // Generate a new position within safe limits
        const randomX = Math.max(10, Math.random() * maxX);
        const randomY = Math.max(10, Math.random() * maxY);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });

    // Show message when "Yes" is clicked
    yesBtn.addEventListener("click", function () {
        window.location.href = "finalpage.html";
    });
});
