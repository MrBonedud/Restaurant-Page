/**
 * Main application entry point
 * Handles page initialization, routing, and navigation
 */

import createHomePage from './homepage';
import createMenuPage from './menuPage';
import createAboutPage from './aboutPage';
import './styles.css';

/**
 * Creates the header component with navigation
 * @returns {Object} Object containing header and nav DOM elements
 */
const createHeader = () => {
    // Create header container
    const header = document.createElement('div');
    header.classList.add('header');
    
    // Create restaurant name/title
    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Welcome to our Restaurant';
    header.appendChild(restaurantName);
    
    // Create navigation container
    const nav = document.createElement('div');
    nav.classList.add('nav-buttons');
    
    return { header, nav };
};

/**
 * Initializes the page content and sets up navigation
 * Implements a single page application approach with dynamic content loading
 */
const loadPage = () => {
    // Get root content container
    const content = document.querySelector('#content');
    content.innerHTML = ''; // Clear any existing content
    
    // Create main page container
    const pageContent = document.createElement('div');
    pageContent.classList.add('content');
    
    // Initialize header and navigation
    const { header, nav } = createHeader();
    
    // Define available pages and their creation functions
    const pages = {
        'Home': createHomePage,
        'Menu': createMenuPage,
        'About': createAboutPage
    };
    
    // Create navigation buttons for each page
    Object.entries(pages).forEach(([pageName, pageFunction]) => {
        // Create button element
        const button = document.createElement('button');
        button.classList.add('button-nav');
        button.textContent = pageName;
        
        // Add click event handler for navigation
        button.addEventListener('click', () => {
            // Update active button state
            document.querySelectorAll('.button-nav').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            // Load new page content
            const main = pageFunction();
            pageContent.querySelector('.main')?.remove();
            pageContent.appendChild(main);
        });
        
        nav.appendChild(button);
    });
    
    // Assemble the page structure
    header.appendChild(nav);
    pageContent.appendChild(header);
    
    // Initialize with home page content
    const main = createHomePage();
    pageContent.appendChild(main);
    
    // Set home button as active by default
    nav.querySelector('button').classList.add('active');
    
    // Add complete page content to DOM
    content.appendChild(pageContent);
};

// Initialize the application
loadPage();

export default loadPage;