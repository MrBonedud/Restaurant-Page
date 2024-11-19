/**
 * Homepage component module
 * Creates and returns the home page content
 */

import restaurantImage from './images/Fimage.jpg';

/**
 * Creates the home page content with welcome message and featured image
 * @returns {HTMLElement} The main container element for the home page
 */
const createHomePage = () => {
    // Create main container
    const main = document.createElement('div');
    main.classList.add('main');
    
    // Create home section container
    const home = document.createElement('div');
    home.classList.add('home');

    // Create and configure featured image
    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = 'Restaurant interior view';
    
    // Create welcome message
    const copy = document.createElement('p');
    copy.textContent = 'Where we serve the best food in town. Experience our warm atmosphere and exceptional service.';
    
    // Assemble the home page structure
    home.appendChild(image);
    home.appendChild(copy);
    main.appendChild(home);
    
    return main;
};

export default createHomePage;