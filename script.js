/* ============================================
   FORM SUBMISSION
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Log form data (replace with actual submission logic)
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I\'ll get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Optional: Send to backend using fetch
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ name, email, subject, message })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Message sent successfully!');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     alert('Error sending message. Please try again.');
            // });
        });
    }
});

/* ============================================
   NAVIGATION ACTIVE STATE
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = 'var(--text-color)';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = 'var(--primary-color)';
            }
        });
    });
});

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

/* ============================================
   SMOOTH SCROLL BEHAVIOR
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================================
   MOBILE MENU (if needed in future)
   ============================================ */
// You can add mobile menu toggle functionality here
