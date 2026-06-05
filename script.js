document.addEventListener("DOMContentLoaded", function() {
    // Gestionare Meniu Hamburger
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
        
        // Animare simplă hamburger bar
        const bars = hamburger.querySelectorAll(".menu-bar");
        if(hamburger.classList.contains("active")) {
            bars[0].style.transform = "rotate(45deg) translate(5px, 6px)";
            bars[1].style.opacity = "0";
            bars[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
        } else {
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        }
    });

    // Închidere meniu la click pe linkuri
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
            const bars = hamburger.querySelectorAll(".menu-bar");
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
            
            // Schimbare clasă activă
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Schimbător de Limbi Alternativ (RO/EN) - Fără Emojis
    const btnRo = document.getElementById("btn-ro");
    const btnEn = document.getElementById("btn-en");
    const body = document.body;

    btnRo.addEventListener("click", function() {
        body.className = "lang-ro";
        btnRo.classList.add("active-lang");
        btnEn.classList.remove("active-lang");
    });

    btnEn.addEventListener("click", function() {
        body.className = "lang-en";
        btnEn.classList.add("active-lang");
        btnRo.classList.remove("active-lang");
    });
});
