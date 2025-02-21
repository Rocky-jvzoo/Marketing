// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Enhanced card animations
document.querySelectorAll('.card').forEach(card container => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.transition = 'transform 0.3s ease-in-out';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Interactive "Learn more" button
document.querySelector('.btn-secondary').addEventListener('click', function() {
    this.innerHTML = 'Loading...';
    setTimeout(() => {
        this.innerHTML = 'Learn more';
        alert('Thank you for your interest! More content coming soon.');
    }, 1000);
});

// Add loading animation to image placeholders
document.querySelectorAll('.image-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', function() {
        this.classList.add('loading');
        setTimeout(() => {
            this.classList.remove('loading');
        }, 1500);
    });
});
