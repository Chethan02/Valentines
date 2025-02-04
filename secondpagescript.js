document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");

    yesBtn.addEventListener("click", function () {
        window.location.href = "thirdpage.html"; // Redirect to yes.html when clicked
    });
});
