document.addEventListener('DOMContentLoaded', function() {
    // Change header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initialize AOS library
    AOS.init({
        duration: 1000, // Animation duration in ms
        easing: 'ease-in-out', // Animation easing
        once: true // Animate only once
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        alert('Merci pour votre message ! Nous reviendrons vers vous bientôt.');

        // Réinitialiser le formulaire
        this.reset();
    });
});

// Toggle the navigation menu on mobile
// function toggleMenu() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const nav = document.querySelector('nav');
//     menuToggle.classList.toggle('active');
//     nav.classList.toggle('active');
// }
// document.addEventListener('DOMContentLoaded', function() {
//     AOS.init(); // Initialisation d'AOS

//     document.getElementById('contact-form').addEventListener('submit', function(event) {
//         event.preventDefault();

//         alert('Merci pour votre message ! Nous reviendrons vers vous bientôt.');

//         // Réinitialiser le formulaire
//         this.reset();
//     });
// });


function toggleMenu() {
    var nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

function openModal(memberId) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
    var modalName = document.getElementById('modal-name');
    var modalDescription = document.getElementById('modal-description');

    // Contenu des membres
    var members = {
        member1: {
            name: 'Abdoul Aziz Seck',
            description: "Je suis un développeur passionné par la création d'applications mobiles et web. Je suis particulièrement intéressé par l'intelligence artificielle et je cherche toujours à apprendre et à m'améliorer. Mon but est de créer des projets qui ont un impact positif tout en continuant à développer mes compétences.",
            image: 'seck.jpg'
        },
        member2: {
            name: 'Moussa Ndiaye',
            description: "Je me présente comme un passionnée par la nouvelle technologie un garçon Fury de de la robotique qui adore l'espace de manga et tout plein tout de ce genre. C'est dans cette lancé que j'ai découvert le monde de l'informatique de plus particulièrement le codage par la suite j'ai passé des années à me perfectionner pour ensuite me spécialiser dans le domaine du site web, App cross plateforme, et bientôt la cyber sécurité",
            image: 'moussa.jpg'
        },
        member3: {
            name: 'Samba Seydi',
            description: "Je suis un jeune développeur fullstack. Je code toujours qu'importe l'heure. A cours terme, j'ai pour objectif de devenir le meilleur créateur de plateforme 3D de mon pays avant l'université. A moyen terme, etre dans le top des meilleurs hackers***. Et au long terme, profiter de la juissance de coder toujours et encore. Ce site est là pour renforcer notre visibilité à moi et mes amis tout aussi passionnés. Si vous avez donc un projet à nous confier ou à l'un d'entre nous en particulier, sachez d'avance que nous nous en chargeront avec le plus grand soin.",
            image: 'samba.jpg'
        }
    };

    var member = members[memberId];

    modalImage.src = member.image;
    modalName.textContent = member.name;
    modalDescription.textContent = member.description;

    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
