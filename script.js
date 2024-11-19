$(document).ready(function(){
    // Smooth scrolling for navbar links
    $(".nav-link").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({ scrollTop: $(hash).offset().top }, 800);
        }
    });

    // Animations for sections
    $(window).scroll(function() {
        $(".skills-section, .projects-section, .contact-section").each(function() {
            if ($(window).scrollTop() > $(this).offset().top - $(window).height() + 100) {
                $(this).addClass("fade-in visible");
            }
        });
    });
});

const translations = {
    en: {
        portfolio: "My Portfolio",
        about: "About Me",
        aboutDescription: "I am a Systems Engineer with experience in PHP, JavaScript, and Full-Stack development. I specialize in creating effective and elegant solutions that turn ideas into reality.",
        heroGreeting: "Hello! I'm Gerardo Henríquez",
        heroLead: "Systems Engineer, Full-Stack Developer passionate about technology and web design.",
        projects: "Projects",
        referencia: "See Reference",
        project1Title: "Accounting System",
        project1Description: "The company 'Sabios y Expertos' requested a web application to manage their accounting successfully.",
        project2Title: "Clinic Appointment System",
        project2Description: "Doctors needed a web system to manage appointments. It was a total success.",
        project3Title: "Video Game Blog",
        project3Description: "A personal project to practice my skills as a programmer. PHP - Full-Stack.",
        skills: "Skills",
        skillsIntro: "Developing complete projects using different tools:",
        footer: "© 2024 My Portfolio. All rights reserved.",
    },
    es: {
        portfolio: "Mi Portafolio",
        about: "Sobre Mí",
        aboutDescription: "Soy un Ingeniero en Sistemas con experiencia en PHP, JavaScript, y desarrollo Full-Stack. Me especializo en crear soluciones efectivas y elegantes que transforman ideas en realidad.",
        heroGreeting: "¡Hola! Soy Gerardo Henríquez",
        heroLead: "Ingeniero en Sistemas Computacionales, Desarrollador Full-Stack con pasión por la tecnología y el diseño web.",
        projects: "Proyectos",
        referencia: "Ver Referencia",
        project1Title: "Sistema Contable",
        project1Description: "La empresa 'Sabios y Expertos' solicitó una aplicación web para manejar su contabilidad, la cual se realizó con éxito.",
        project2Title: "Sistema de Citas para Clínica",
        project2Description: "Doctores necesitaban un sistema web para gestionar citas. Fue un éxito total.",
        project3Title: "Blog de Videojuegos",
        project3Description: "Un proyecto personal para practicar mis habilidades como programador. PHP - Full-Stack.",
        skills: "Habilidades",
        skillsIntro: "Desarrollando proyectos completos por medio de diferentes herramientas:",
        footer: "© 2024 Mi Portafolio. Todos los derechos reservados.",
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}