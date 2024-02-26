## Project Documentation: Online Coffee Shop

### Overview

This project is an online coffee shop application where users can browse through a variety of coffee products, add them to their cart, and proceed to checkout. The application provides a seamless user experience with features such as real-time cart updates, product availability management, and a user-friendly interface.

### Components

1. **Header Component**

    - Includes the logo of the coffee shop and a cart icon showing the total count of items in the user's cart.
    - Allows users to open the cart modal to view and manage their cart items.

2. **Modal Component**

    - Title: "My Cart"
    - Displays the user's cart items in a modal dialog.
    - Provides options to remove items from the cart, update item quantities, and clear the entire cart.
    - The checkout button allows users to proceed to payment.

3. **Cart List Component**

    - Displays the list of items in the user's cart.
    - Each item includes its name, quantity, price, and subtotal.
    - Users can remove items from the cart, update quantities, and delete items entirely.

4. **Products List Component**

    - Shows a list of coffee products available for purchase.
    - Users can add products to their cart directly from this component.

5. **Footer Component**
    - Contains additional information about the coffee shop, contact details, and social media links.

### Functionality

-   **Add to Cart**: Users can add products to their cart from the products list component. If the product is already in the cart, the quantity is updated accordingly.
-   **Remove from Cart**: Users can remove items from their cart individually.
-   **Update Cart Item Count**: Users can update the quantity of items in their cart. The system checks for product availability and updates the subtotal accordingly.
-   **Clear Cart**: Users can clear their entire cart with a single click.
-   **Checkout**: Upon clicking the checkout button, users are prompted to proceed with payment.

### Data Management

-   **Products Data**: Stored as an array of objects containing information such as product name, image URL, description, stock quantity, and price.
-   **Cart Data**: Managed as an array of objects representing the items currently in the user's cart. Each cart item contains the product details along with the quantity.

### User Interaction

-   **Real-time Updates**: The cart icon in the header dynamically displays the total count of items in the cart.
-   **Modal Interaction**: Users can open and close the cart modal to view and manage their cart items without navigating away from the page.
-   **Error Handling**: Users are notified when adding items to the cart exceeds the available stock or when attempting to add a negative quantity.

### Technologies Used

-   **Vue.js**: A progressive JavaScript framework used for building the user interface.
-   **Bootstrap**: Provides pre-designed components and styles for a responsive and modern-looking UI.
-   **JavaScript**: Used for implementing dynamic behavior and interactions within the application.
-   **HTML/CSS**: Markup and styling languages used for structuring and styling the application's components and content.

### Conclusion

The online coffee shop application offers users a convenient way to explore, select, and purchase their favorite coffee products. With its intuitive user interface and seamless shopping experience, it aims to provide a delightful online shopping experience for coffee enthusiasts.
