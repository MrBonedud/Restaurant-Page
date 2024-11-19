/**
 * Menu page component module
 * Creates and returns the menu page content with menu items
 */

/**
 * Creates the menu page with a grid of menu items
 * @returns {HTMLElement} The main container element for the menu page
 */
const createMenuPage = () => {
    // Create main container
    const main = document.createElement('div');
    main.classList.add('main');
    
    // Create menu grid container
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    // Menu items data
    const menuItems = [
        {
            name: "Special Pizza",
            description: "Our signature pizza with secret sauce",
        },
        {
            name: "Classic Pasta",
            description: "Homemade pasta with rich tomato sauce",
        },
        {
            name: "Fresh Salad",
            description: "Garden-fresh vegetables with house dressing",
        },
        {
            name: "Chef's Special",
            description: "Daily special creation by our head chef",
        }
    ];
    
    // Create menu item cards
    menuItems.forEach(item => {
        // Create container for menu item
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        
        // Create and add item name
        const name = document.createElement('h2');
        name.textContent = item.name;
        
        // Create and add item description
        const description = document.createElement('p');
        description.textContent = item.description;
        
        // Assemble menu item
        menuItem.appendChild(name);
        menuItem.appendChild(description);
        menu.appendChild(menuItem);
    });
    
    // Add menu grid to main container
    main.appendChild(menu);
    return main;
};

export default createMenuPage;