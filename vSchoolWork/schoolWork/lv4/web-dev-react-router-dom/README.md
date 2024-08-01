## React Router Challenge

### Objective
Implement routing in a React application using `react-router-dom`. Set up routes for Home, Inventory, and InventoryDetails, and use the Navbar to navigate between them.

### Instructions

1. **Setup Routes in App Component**:
    - Wrap your application in a router component.
    - Define routes for Home (`"/"`), Inventory (`"/inventory"`), and InventoryDetails (`"/inventory/:id"`).

2. **Create Navbar with Links**:
    - Implement the `Navbar` component.
    - Add links to navigate to Home and Inventory pages using the appropriate components from `react-router-dom`.

3. **Implement InventoryDetails Component**:
    - Use the `useParams` hook to get the item `id` from the URL.
    - Find the item in the `inventory` array by `id`.
    - Display the details of the item such as name, category, price, and quantity.
    - Use the `useNavigate` hook to create a back button that navigates to the Inventory page.

### Notes
- Ensure that all the links work correctly and navigating to different routes updates the displayed content accordingly.

Good luck!