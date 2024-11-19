// Import the function that creates the restaurant's home page content
import createRestaurantHomePage from './homepage';

// Import the HTML template for the page structure
import template from './template.html';

// Function that handles the initial loading of the website
function initialLoad() {
    // Call the function to create and display the restaurant's home page
    createRestaurantHomePage(); 
}

// Export the initialLoad function to be used by other modules
export default initialLoad;