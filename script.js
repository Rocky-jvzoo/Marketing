document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".zoom-img");

    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.2)";
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });

    const button = document.querySelector(".cta-button");
    button.addEventListener("click", () => {
        alert("Welcome to the future! 🚀");
    });
});
