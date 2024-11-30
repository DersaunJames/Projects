// Global variables
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Dynamically build navigation
function buildNavigation() {
    sections.forEach((section, index) => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        
        anchor.textContent = section.getAttribute('data-nav');
        anchor.classList.add('menu__link');
        anchor.setAttribute('href', `#${section.id}`);
        
        // Smooth scroll event listener
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        });
        
        listItem.appendChild(anchor);
        navbarList.appendChild(listItem);
    });
}

// Set section and navbar active state
function setActiveState() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const navLinks = document.querySelectorAll('.menu__link');
        
        // Remove existing active classes
        section.classList.remove('active');
        navLinks[index].classList.remove('active');
        
        // Check if section is in viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            section.classList.add('active');
            navLinks[index].classList.add('active');
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', buildNavigation);
window.addEventListener('scroll', setActiveState);
window.addEventListener('resize', setActiveState);
