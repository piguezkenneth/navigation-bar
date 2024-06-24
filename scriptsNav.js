// Select elements
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const searchInput = document.getElementById('search-input');

// Check if elements exist before adding event listeners
if (burger && nav) {
    // Toggle navigation menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // Toggle burger animation
        burger.classList.toggle('toggle');
        
        // Toggle aria-expanded attribute for accessibility
        const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
        burger.setAttribute('aria-expanded', !expanded);
    });
}

if (searchInput) {
    // Submit search form
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            // Perform search or any other action here
            console.log('Performing search for: ', searchInput.value);
        }
    });
}

