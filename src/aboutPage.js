/**
 * About page component module
 * Creates and returns the about page content with restaurant information
 */

/**
 * Creates the about page with restaurant information
 * @returns {HTMLElement} The main container element for the about page
 */
const createAboutPage = () => {
    // Create main container
    const main = document.createElement('div');
    main.classList.add('main');
    
    // Create about section container
    const about = document.createElement('div');
    about.classList.add('contact'); // Using contact class for consistent styling
    
    // Create and add restaurant description
    const description = document.createElement('p');
    description.textContent = 'Our restaurant has been serving delicious meals since 1990. We pride ourselves on using the freshest ingredients and providing exceptional service.';
    
    // Create and add business hours
    const hours = document.createElement('p');
    hours.textContent = 'Open Tuesday - Sunday: 11:00 AM - 10:00 PM';
    
    // Create and add location information
    const location = document.createElement('p');
    location.textContent = 'Located at: 123 Food Street, Cuisine City';
    
    // Assemble the about page structure
    about.appendChild(description);
    about.appendChild(hours);
    about.appendChild(location);
    
    main.appendChild(about);
    return main;
};

export default createAboutPage;