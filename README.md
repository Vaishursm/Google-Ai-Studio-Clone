
# Vaishali AI Studio Clone (Frontend)

This project is a frontend clone inspired by Google's AI Studio, built using React, Vite, and Tailwind CSS. It aims to replicate the look and feel of the AI Studio interface, particularly focusing on responsive design for both desktop and mobile views.

## Features Implemented

*   **Responsive UI:** Designed to adapt to various screen sizes, with specific attention to mobile layouts for key pages.
*   **Dark Mode:** Supports a dark theme, similar to AI Studio.
*   **Navigation:**
    *   **Home Page (`/home`):** A landing page showcasing the platform.
    *   **Dashboard Page (`/app`):** The main application interface after "login" (no actual authentication).
    *   **App Sidebar (`AppSidebar.jsx`):** A responsive sidebar for the Dashboard, mimicking Google AI Studio's behavior (expandable/collapsible on desktop, drawer overlay on mobile).
*   **Static Components:**
    *   "What's New" section with cards.
    *   Placeholder prompt input area on the Dashboard.
    *   Various UI elements like buttons, icons, and mock toolbars.

## Pages and Key Components

### Pages:

*   **`src/pages/HomePage.jsx`**: The public-facing landing page.
*   **`src/pages/DashboardPage.jsx`**: The main application interface, intended to simulate the AI Studio workspace.

### Core UI Components:

*   **`src/components/AppSidebar.jsx`**: The primary navigation sidebar used within the `DashboardPage`. It's responsive, handling desktop expanded/collapsed states and a mobile overlay drawer.
*   **`src/components/ActionCard.jsx`**: Reusable card component for displaying actions (used on `HomePage`).
*   **`src/components/WhatsNewCard.jsx`**: Card component for the "What's New" section on the `DashboardPage`.
*   **`src/constants.jsx`**: Contains various SVG icon components used throughout the application.

*(Note: `src/components/Sidebar.jsx` appears to be an older or alternative sidebar component. The `DashboardPage` primarily utilizes `AppSidebar.jsx` for its navigation.)*

## Setup and Running Locally

Follow these instructions to get the project running on your local machine.

### Prerequisites

*   **Node.js:** Version 18.x or later is recommended. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm:** Comes bundled with Node.js.

### Installation & Setup

1.  **Clone the repository (if applicable):**
    If you have this project as a git repository, clone it:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
    If you received the files directly, ensure they are in a project folder and navigate into it.

2.  **Install dependencies:**
    Open your terminal in the project's root directory and run:
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Access the application:**
    Open your web browser and navigate to `http://localhost:5173` (or the port specified in your terminal if different).

## Scripts

*   `npm run dev`: Starts the Vite development server.
*   `npm run build`: Builds the application for production.
*   `npm run preview`: Serves the production build locally.
*   `npm run lint`: (Currently a placeholder) Intended for running ESLint.

## Known Limitations & Design Deviations

*   **No Backend / API Integration:**
    *   The application is currently a **frontend-only clone**. No actual calls are implemented.
    *   Buttons like "Get API key", "Run" prompt, "Save version", etc., are UI placeholders and do not perform backend operations.
*   **Static Content:**
    *   The "History" section in the `AppSidebar` is static and does not reflect actual user activity.
    *   "What's New" items on the `DashboardPage` are hardcoded.
    *   Prompt suggestions and functionality are for display purposes only.
*   **No Authentication:** There is no user login or authentication system. The app directly navigates to the dashboard.
*   **Styling & Responsiveness:**
    *   While significant effort has been made to match Google AI Studio's responsive behavior, there might be minor deviations across various device sizes and browsers.
    *   Further fine-tuning might be required for pixel-perfect accuracy.
*   **Accessibility (A11y):** Basic ARIA attributes have been used for some interactive elements. However, a comprehensive accessibility audit has not been performed.
*   **Cross-Browser Compatibility:** The application has been primarily developed and tested on modern browsers (e.g., latest Chrome/Firefox). Extensive testing on older browsers or other browser engines has not been conducted.
*   **State Management:** The application primarily uses React's built-in `useState` for component-level state. For a more complex application, global state management (like Context API, Zustand, or Redux) might be considered.
*   **Error Handling:** Error handling for potential API calls or user interactions is minimal.
*   **Code Structure & Scalability:** The current structure is suitable for this demo. For a larger, production-grade application, further organization (e.g., more modular components, service layers) would be beneficial.
*   **Functionality Gaps:** Many features of the actual Google AI Studio (e.g., model configuration, actual prompt execution, output display, project management) are not implemented.
*   **Testing:** Unit testing part is not covered due to time constraint.

This project serves as a visual and structural representation of the Google AI Studio frontend.
