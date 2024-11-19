# Restaurant Page Project Documentation

This document explains how the restaurant page website works and how its different components interact with each other.

## Project Structure

```
restaurant-page/
├── src/
│   ├── images/
│   │   └── restaurant.jpg
│   ├── index.js          # Main entry point
│   ├── homepage.js       # Home page component
│   ├── menuPage.js       # Menu page component
│   ├── aboutPage.js      # About page component
│   ├── styles.css        # Styling
│   └── template.html     # HTML template
└── webpack.config.js     # Webpack configuration
```

## How It Works

### 1. Entry Point (index.js)

The `index.js` file is the main entry point and handles:
- Page initialization
- Navigation system
- DOM manipulation
- Event listeners for navigation buttons

Key functions:
```javascript
createHeader()    // Creates the header with navigation
loadPage()        // Initializes the page and sets up navigation
```

### 2. Page Components

Each page is a separate component that follows the same pattern:

#### Homepage (homepage.js)
- Creates the welcome section
- Displays the restaurant image
- Shows welcome message
- Returns a main element with home content

#### Menu Page (menuPage.js)
- Creates a grid of menu items
- Each item has a name and description
- Uses CSS grid for layout
- Returns a main element with menu content

#### About Page (aboutPage.js)
- Shows restaurant information
- Displays business hours
- Shows location details
- Returns a main element with about content

### 3. Navigation System

The navigation system works as follows:

1. Buttons are created for each page (Home, Menu, About)
2. Click listeners are attached to each button
3. When clicked:
   - Active class is removed from all buttons
   - Active class is added to clicked button
   - Current page content is cleared
   - New page content is loaded
   - Smooth transition animation plays

### 4. Styling (styles.css)

The CSS is organized into sections:

```css
/* Global Styles */
:root {}          // CSS variables
*, *::before, *::after {} // Reset

/* Layout Components */
.content {}       // Main container
.header {}        // Header styling
.main {}          // Content area

/* Page-Specific Styles */
.home {}          // Home page
.menu {}          // Menu page
.contact {}       // About/contact page

/* Responsive Design */
@media queries   // Mobile adaptations
```

### 5. Webpack Configuration

The webpack.config.js handles:
- JavaScript bundling
- CSS processing
- Image handling
- HTML template processing
- Development server

Key webpack features:
- Development mode with source maps
- CSS loaders for styling
- Asset handling for images
- HTML plugin for template

## Key Features

1. **Modular Design**
   - Each page is a separate component
   - Components are independent and reusable
   - Clear separation of concerns

2. **Responsive Layout**
   - Adapts to different screen sizes
   - Mobile-first approach
   - Flexible grid system

3. **Smooth Transitions**
   - Fade-in animations for content
   - Smooth button hover effects
   - Clean page transitions

4. **Maintainable CSS**
   - CSS custom properties (variables)
   - Organized by component
   - Clear naming conventions

## How to Modify

### Adding a New Page

1. Create a new component file (e.g., `newPage.js`)
2. Follow the component pattern:
```javascript
const createNewPage = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    // Add content
    return main;
};
export default createNewPage;
```
3. Add the page to the pages object in index.js
4. Add corresponding CSS styles

### Modifying Styles

1. Find the relevant section in styles.css
2. Use existing CSS variables when possible
3. Follow the established patterns for:
   - Spacing
   - Colors
   - Animations
   - Media queries

### Adding Features

1. New UI elements: Add to relevant component file
2. New styles: Add to styles.css
3. New interactions: Add event listeners in index.js
4. New images: Add to images folder and import

## Best Practices

1. **Keep Components Small**
   - Each component should do one thing
   - Break large components into smaller ones

2. **Consistent Naming**
   - Use descriptive class names
   - Follow established patterns
   - Keep names semantic

3. **Responsive Design**
   - Test on multiple screen sizes
   - Use flexible units (rem, %, vh/vw)
   - Consider mobile first

4. **Performance**
   - Optimize images
   - Use efficient selectors
   - Minimize DOM manipulations

## Troubleshooting

Common issues and solutions:

1. **Styles Not Loading**
   - Check webpack configuration
   - Verify CSS import in index.js
   - Check class names match

2. **Images Not Showing**
   - Verify image path
   - Check webpack asset configuration
   - Ensure proper import syntax

3. **Navigation Not Working**
   - Check event listeners
   - Verify page components exist
   - Check console for errors

