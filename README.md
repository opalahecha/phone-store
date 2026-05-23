# Nice Gadgets Store

A responsive store catalog built with React and TypeScript. The app allows users to browse phones, tablets, and accessories, view detailed product pages, add products to the cart, save favorites, search products, and switch between light and dark themes.

## Project Description

The Nice Gadgets Store is a single-page e-commerce catalog created as a portfolio project. It provides a realistic product browsing experience with category pages, product details, shopping cart logic, favorites, responsive layouts, and user-friendly empty and not-found states.

The project uses local JSON files as a public API and stores cart and favorites data in local storage. It is optimized for mobile, tablet, and desktop screens and includes image optimization with WebP assets for better performance.

[Visit the Website](https://opalahecha.github.io/phone-store/) | [View Dark Design](https://www.figma.com/design/BUusqCIMAWALqfBahnyIiH/Phone-catalog--V2--Original-Dark?node-id=0-1&p=f&t=uZ0yeBKOevpOyzSg-0) | [View Light Design](https://www.figma.com/design/T5ttF21UnT6RRmCQQaZc6L/Phone-catalog--V2--Original?node-id=15887-7205&t=DbCYkbA212dJNoU2-0)

## Technical Requirements

To run this project, you will need:

- Node.js 20 or newer: A JavaScript runtime used to run the project tooling.
- NPM: The Node.js package manager used for installing dependencies and running scripts.
- Git: A version control system used to clone and manage the project.

## Installation and Setup

To install the project and run it locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/opalahecha/phone-store.git
```

Navigate to the project directory:

```bash
cd phone-store
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm start
```

Build the project for production:

```bash
npm run build
```

Deploy the project to GitHub Pages:

```bash
npm run deploy
```

## Usage

After starting the project, it will be available in the browser at the local development URL shown in the terminal.

You can use the app to browse products by category, open product details, choose available product options, add items to the cart, manage favorites, search by product name, and test responsive behavior across different screen sizes.

## Features

- Responsive design for mobile, tablet, and desktop screens.
- Home page with a hero banner slider.
- Product categories for phones, tablets, and accessories.
- Product list pages with pagination and sorting controls.
- Product details pages with gallery, specifications, description, color and capacity options.
- Suggested products section.
- Search functionality for catalog and favorites pages.
- Shopping cart with quantity controls, total price calculation, and checkout confirmation modal.
- Favorites page with saved products.
- Cart and favorites persistence using local storage.
- Light and dark theme support.
- Breadcrumbs and back navigation.
- Route-level 404 page.
- Product-not-found state for missing product pages.
- Public JSON API with product data.
- Optimized WebP images for key UI assets.

## Technologies Used

This project was built using the following technologies:

- React: For building reusable UI components.
- TypeScript: For static typing and safer application logic.
- React Router 7: For client-side routing.
- Redux Toolkit: For cart, favorites, and product state management.
- React Redux: For connecting Redux state to React components.
- Sass: A CSS preprocessor used for variables, mixins, nesting, and modular styles.
- CSS Modules: For locally scoped component styles.
- Classnames: For conditional class name composition.
- Vite: A fast build tool used by the project tooling.
- HTML5: For semantic page structure.
- CSS3: For responsive layouts and visual styling.
- Local Storage: For persisting cart and favorites data.
- Git: For version control.
- GitHub: For repository hosting and deployment through GitHub Pages.

## Contribution Guidelines

If you wish to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Clone your fork to your local machine.
3. Create a separate branch for your feature or fix.
4. Make your changes and test them locally.
5. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](./LICENSE) file for details.
