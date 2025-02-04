document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const messageBox = document.getElementById("messageBox");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get user input values
        const name = document.getElementById("fname").value.trim();
        const date = document.getElementById("date").value;
        const password = document.getElementById("password").value.trim();

        // Expected credentials
        const expectedName = "Adu Padu";
        const expectedDate = "2024-02-10"; // Format for <input type="date"> is YYYY-MM-DD
        const expectedPassword = "maharajChethan";

        // Reset Message Box
        messageBox.style.display = "block";
        messageBox.classList.remove("success", "error");

        // Validation check
        if (name === expectedName && date === expectedDate && password === expectedPassword) {
            messageBox.textContent = "💖 Login successful! Welcome, Aditi meri Jaan! 💖";
            messageBox.classList.add("success");

            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = "secondpage.html";
            }, 2000);
        } else {
            messageBox.textContent = "❌ Invalid credentials! Please check your details and try again.";
            messageBox.classList.add("error");
        }
    });
});
