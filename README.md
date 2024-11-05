# GadgetHeaven
Your go-to destination for the latest and greatest gadgets
## Live Website Link
[https://gadget-heaven-arb.surge.sh/](https://gadget-heaven-arb.surge.sh/)

## Requirement Document Link
[https://drive.google.com/file/d/1oDG7xwsTEmk5zkA8Iij4fUp_d7isO6xw/view?usp=sharing](https://drive.google.com/file/d/1oDG7xwsTEmk5zkA8Iij4fUp_d7isO6xw/view?usp=sharing)

## Project Overview
GadgetHaven is a responsive e-commerce platform designed to sell gadgets like smartphones, computers, smartwatches, mackBook, and Accessories The platform integrates a fully functional shopping cart, a wishlist, and offers detailed product pages with filtering, sorting, and a smooth user experience across all devices. This project was built using React, Vite, and other modern web development technologies.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A next-generation, fast build tool that supports React.
- **Tailwind CSS**: Utility-first CSS framework to create modern UIs.
- **DaisyUI**: A plugin for Tailwind CSS that provides pre-styled UI components.
- **React Router**: For handling page navigation and dynamic routing.
- **Recharts**: A charting library used for creating dynamic charts.
- **React Icons**: Provides a set of customizable icons for React components.
- **React Helmet**: Used for managing the document head, including dynamic titles and meta tags.
- **React Toastify**: Used for displaying toast notifications to users.
  
## React Fundamental Concepts Used in the Project

1. **Functional Components**: The project utilizes React functional components for all UI components, such as the Navbar, Footer, Product Cards, Cart, Wishlist, etc.
  
2. **State Management**: 
   - **Context API**: Used to manage global state, including the cart and wishlist. It helps propagate changes like adding/removing products to/from the cart or wishlist across the application.
   - **useState**: For managing local component states like active routes and product details.
  
3. **React Router**: Utilized to handle navigation between pages (Home, Dashboard, Product Details, Cart, Wishlist, Statistics).

4. **useEffect**: Applied for handling side effects like fetching product data, setting up charts, and updating the page title dynamically using React Helmet.



## Data Handling & Management

- **Context API**: 
  The `PurchaseContext` and `WishContext` are used to globally manage the cart and wishlist states. They handle adding/removing items and also ensure that data is synchronized across different pages of the app.
  
- **LocalStorage**:
  - The cart and wishlist data are persisted in the browser’s LocalStorage. When the user reloads the page, the data remains intact.
  - The items in the cart and wishlist are also synchronized with LocalStorage to ensure persistence even after page reloads.

## Key Features

1. **Product Details Page**:
   - Users can view detailed information about each gadget, including product name, image, price, specifications, and availability.
   - An "Add to Cart" button and a "Wishlist" (❤️) button are available.
   - The heart icon is disabled after being clicked, preventing multiple additions of the same product to the wishlist.

2. **Dynamic Navbar**:
   - The Navbar dynamically displays the number of items in the cart using a badge on the 🛒 icon.
   - Active routes are highlighted based on the current page the user is on (using `NavLink` from React Router).
  
3. **Cart and Wishlist Management**:
   - The Dashboard Page features two tabs for viewing the cart and wishlist.
   - Users can add/remove items from both the cart and wishlist.
   - A "Sort by Price" button is available on the Cart page, which sorts cart items in descending order by price.

4. **Category Filtering**:
   - On the Home page, there is a sidebar with different categories like MacBooks, Phones, Smart Watches, Iphone, and Accessories.
   - Clicking a category filters the products displayed to show only the items in that category.

5. **Statistics Page**:
   - Displays a composed chart showing price vs. product name on the X-axis and price on the Y-axis. 
   - This helps users visualize price distribution for the products.

## Pages & Routes

- **Home Page**:
  - A banner section with a button linking to the Dashboard Page.
  - A sidebar for product categories.
  - A grid of gadget cards, each with product details and a link to the product's detail page.
  
- **Dashboard Page**:
  - Two tabs: "Cart" and "Wishlist". 
  - Displays cart items with a total price and a "Sort by Price" button.
  - Allows users to manage their wishlist and cart.

- **Product Details Page**:
  - Displays detailed information about the product, including an image, title, price, description, specifications,rating, and availability.

- **Statistics Page**:
  - Displays a price vs. product name chart with ratings.

- **Offers Page**:
  - Displays various offers on ongoing products.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
