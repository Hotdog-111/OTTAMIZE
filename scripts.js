document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const learnMoreBtn = document.querySelector('.learn-more-btn');
    const modal = document.getElementById('service-modal');
    const modalContent = document.querySelector('.modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModalBtn = document.querySelector('.close-btn');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    learnMoreBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = learnMoreBtn.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });

    const services = document.querySelectorAll('.service');
    services.forEach(service => {
        service.addEventListener('click', () => {
            const title = service.querySelector('h3').innerText;
            const description = service.querySelector('p').innerText;

            modalTitle.innerText = title;
            modalDescription.innerText = description;
            modal.style.display = 'flex';
        });
    });

    closeModalBtn.addEventListener('click', () => {
        modalContent.classList.add('fade-out');
        setTimeout(() => {
            modal.style.display = 'none';
            modalContent.classList.remove('fade-out');
        }, 500); // Match this to the duration of the fade-out animation
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modalContent.classList.add('fade-out');
            setTimeout(() => {
                modal.style.display = 'none';
                modalContent.classList.remove('fade-out');
            }, 500); // Match this to the duration of the fade-out animation
        }
    });
});
