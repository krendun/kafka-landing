// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        });
    });

    // Initialize animations
    fadeInOnScroll();
});

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    const workRequestForm = document.getElementById('workRequestForm');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const successMessage = document.getElementById('successMessage');
    
    if (workRequestForm) {
        workRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading overlay
            loadingOverlay.style.display = 'flex';
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            console.log('Work request submitted:', data);
            
            // Simulate processing time
            setTimeout(() => {
                // Hide loading overlay
                loadingOverlay.style.display = 'none';
                
                // Show success message
                successMessage.style.display = 'block';
                
                // Reset form
                this.reset();
                
            }, 1500); // 1.5 second loading time
        });
    }
});

function closeSuccessMessage() {
    document.getElementById('successMessage').style.display = 'none';
}

    // Job application form
    const jobApplicationForm = document.getElementById('jobApplicationForm');
    if (jobApplicationForm) {
        jobApplicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to your server
            console.log('Job application submitted:', data);
            
            // Show success message
            alert('Thank you for your application! We will review your information and contact you if there is a suitable position available.');
            
            // Reset form and close modal
            this.reset();
            closeJobForm();
        });
    };

// Job modal functions
function showJobForm() {
    const jobModal = document.getElementById('jobModal');
    if (jobModal) {
        jobModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeJobForm() {
    const jobModal = document.getElementById('jobModal');
    if (jobModal) {
        jobModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const jobModal = document.getElementById('jobModal');
    if (jobModal) {
        jobModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeJobForm();
            }
        });
    }
});

// Fade in animation on scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    }
});

// Scroll animation trigger
window.addEventListener('scroll', fadeInOnScroll);

// Form validation functions
function validatePhone(input) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(input.replace(/\s/g, ''));
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add real-time validation
document.addEventListener('DOMContentLoaded', function() {
    // Phone validation
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validatePhone(this.value)) {
                this.style.borderColor = '#e74c3c';
                this.style.boxShadow = '0 0 5px rgba(231, 76, 60, 0.3)';
            } else {
                this.style.borderColor = '#ddd';
                this.style.boxShadow = 'none';
            }
        });
    });

    // Email validation
    document.querySelectorAll('input[type="email"]').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#e74c3c';
                this.style.boxShadow = '0 0 5px rgba(231, 76, 60, 0.3)';
            } else {
                this.style.borderColor = '#ddd';
                this.style.boxShadow = 'none';
            }
        });
    });
});

// Smooth scroll to top function (optional)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add escape key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeJobForm();
    }
});