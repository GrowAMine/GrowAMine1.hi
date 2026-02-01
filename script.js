document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
        el.classList.add('visible');
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
    });

    // Поддержка модалка
    const supportBtn = document.getElementById("support-btn");
    const supportModal = document.getElementById("support-modal");
    const closeBtn = document.querySelector(".close-btn");

    supportBtn.addEventListener("click", (e) => {
        e.preventDefault();
        supportModal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        supportModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === supportModal) {
            supportModal.style.display = "none";
        }
    });

    // FAQ toggle
    const faqButtons = document.querySelectorAll(".faq-question");
    faqButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const answer = btn.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});