document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
        setTimeout(() => {
            el.style.transition = 'all 1s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.content').style.transform = `translateY(${scrolled * 0.3}px)`;
});
// Add this to your existing JavaScript
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('reveal-left')) {
                entry.target.style.transition = 'all 1s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
            if (entry.target.classList.contains('reveal-right')) {
                entry.target.style.transition = 'all 1s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
});
// Add this to your existing JavaScript
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.transition = 'all 0.8s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-card').forEach(card => {
    projectObserver.observe(card);
});
// Add this to your existing JavaScript
function sendWhatsApp(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Replace with your WhatsApp number
    const phoneNumber = '+94762049673';
    
    const whatsappMessage = `Hello, I'm ${name}%0A%0AEmail: ${email}%0A%0AMessage: ${message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
}

// Form input animations
document.querySelectorAll('.input-group input, .input-group textarea').forEach(element => {
    element.addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focused');
    });
    
    element.addEventListener('blur', (e) => {
        if (e.target.value === '') {
            e.target.parentElement.classList.remove('focused');
        }
    });
});
// Add this to your existing JavaScript
document.getElementById('scroll-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/Hide scroll to top button based on scroll position
window.addEventListener('scroll', function() {
    const scrollTop = document.getElementById('scroll-top');
    if (window.pageYOffset > 300) {
        scrollTop.style.opacity = '1';
    } else {
        scrollTop.style.opacity = '0';
    }
});
// Add this to your existing JavaScript
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

