// ==========================================================================
// Document Ready and Image Preloading
// ==========================================================================

// Ensure DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Preload critical images
    const imagesToPreload = [
        'images/profile.jpg',
        'images/scout.jpg',
        'images/hero-bg.jpg'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Add loaded class to body for smooth fade-in
    document.body.classList.add('loaded');
});

// ==========================================================================
// Navigation Functionality
// ==========================================================================

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Update ARIA expanded state
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            hamburger.focus();
        }
    });

    // Handle keyboard navigation for hamburger
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.click();
        }
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ==========================================================================
// Smooth Scrolling
// ==========================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================================================
// Scroll to Top Button
// ==========================================================================

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================================================
// Intersection Observer for Fade-in Animations
// ==========================================================================

const observerOptions = {
    root: null,
    rootMargin: '100px',
    threshold: [0, 0.1, 0.2]
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
            // Use requestAnimationFrame for smooth, glitch-free animations
            requestAnimationFrame(() => {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate3d(0, 0, 0)';
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards with safe initialization
const elementsToAnimate = document.querySelectorAll(
    '.leadership-card, .club-card, .experience-card, .award-badge, .timeline-item, .education-card, .highlight-card'
);

elementsToAnimate.forEach((element, index) => {
    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    element.style.willChange = 'opacity, transform';
    
    // Add staggered delay for smoother cascade effect
    element.style.transitionDelay = `${index * 0.05}s`;
    
    // Observe with IntersectionObserver
    observer.observe(element);
    
    // Fallback: show element after 3 seconds if observer fails
    setTimeout(() => {
        if (element.style.opacity === '0') {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    }, 3000 + (index * 50));
});

// ==========================================================================
// Contact Form Handling
// ==========================================================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link (can be replaced with actual form submission)
        const mailtoLink = `mailto:magdaraj987@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for your message! Your default email client will open to send the message.');
        
        // Reset form
        contactForm.reset();
    });
}

// ==========================================================================
// Parallax Effect for Hero Section
// ==========================================================================

const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroSection.style.opacity = 1 - scrolled / 800;
    }
});

// ==========================================================================
// Dynamic Year in Footer
// ==========================================================================

const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.innerHTML = `&copy; ${currentYear} Magda Rajszewski. All rights reserved.`;
}

// ==========================================================================
// Card Hover Effects with Tilt
// ==========================================================================

const cards = document.querySelectorAll('.leadership-card, .club-card, .experience-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==========================================================================
// Counter Animation for Stats
// ==========================================================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Observe highlight cards for counter animation
const highlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const h3 = entry.target.querySelector('h3');
            if (h3) {
                const text = h3.textContent;
                const number = parseFloat(text.replace(/[^0-9.]/g, ''));
                
                if (!isNaN(number)) {
                    h3.textContent = '0';
                    setTimeout(() => {
                        if (text.includes('K')) {
                            animateCounter(h3, number);
                            setTimeout(() => {
                                h3.textContent = text;
                            }, 2000);
                        } else if (number > 10) {
                            h3.textContent = '0';
                            animateCounter(h3, number);
                            setTimeout(() => {
                                if (text.includes('.')) {
                                    h3.textContent = text;
                                }
                            }, 2000);
                        }
                    }, 100);
                }
            }
            highlightObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.highlight-card').forEach(card => {
    highlightObserver.observe(card);
});

// ==========================================================================
// Loading Animation
// ==========================================================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    }, 100);
});

// ==========================================================================
// Skill Tags Interactive Highlight
// ==========================================================================

const skillTags = document.querySelectorAll('.skill-tag, .course-tag');

skillTags.forEach(tag => {
    tag.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) translateY(-5px)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});

// ==========================================================================
// Timeline Animation
// ==========================================================================

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
            timelineObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// ==========================================================================
// Award Badges Stagger Animation
// ==========================================================================

const awardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const awards = entry.target.querySelectorAll('.award-badge');
            awards.forEach((award, index) => {
                setTimeout(() => {
                    award.style.opacity = '1';
                    award.style.transform = 'translateY(0) scale(1)';
                }, index * 50);
            });
            awardObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const awardGrid = document.querySelector('.awards-grid');
if (awardGrid) {
    document.querySelectorAll('.award-badge').forEach(badge => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px) scale(0.8)';
        badge.style.transition = 'all 0.4s ease';
    });
    awardObserver.observe(awardGrid);
}

// ==========================================================================
// Easter Egg: Konami Code
// ==========================================================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
    
    if (konamiCode.join(',').includes(konamiPattern.join(','))) {
        document.body.style.animation = 'rainbow 5s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// ==========================================================================
// Console Message
// ==========================================================================

console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #6DD5D1;');
console.log('%cWelcome to Magda Rajszewski\'s personal website!', 'font-size: 14px; color: #5A6C7D;');
console.log('%cInterested in the code? Check out the GitHub repository or reach out!', 'font-size: 12px; color: #8B9AA8;');

// ==========================================================================
// Performance Monitoring
// ==========================================================================

if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log(`%cPage loaded in ${(perfData.loadEventEnd - perfData.loadEventStart).toFixed(2)}ms`, 'color: #6DD5D1;');
    });
}
