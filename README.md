# ALIEXPRESS

**Description:**  
This project is the backend API for an e-commerce frontend interface inspired by ALIEXPRESS. It provides user authentication, product management, and cart functionalities to support the frontend application. Users can browse products and manage their cart with secure authentication methods.

**Vercel Deployment:**  
[Live Demo](https://ali-express-backend.vercel.app/)

## Tech Stack

- **Node.js** - JavaScript runtime environment for building scalable server-side applications.
- **Express.js** - Fast and minimalist web framework for Node.js.
- **MongoDB** - NoSQL database for storing product and user data.
- **Mongoose** - ODM (Object Data Modeling) library for MongoDB and Node.js.
- **bcryptjs** - Library for hashing passwords to ensure user security.
- **JWT (JSON Web Tokens)** - For secure user authentication and authorization.
- **Git** - Version control system for tracking changes and collaboration.

## Key Features

- **User Authentication**: Secure login and signup functionalities using JWT and bcryptjs.
- **Product Management**: API endpoints to create, read, update, and delete products.
- **Cart Management**: Functionality to add, remove, and view items in the user's cart.
- **Session Persistence**: User sessions are maintained for a seamless experience.

## Setup and Access Instructions

### Prerequisites

- **Node.js** installed on your machine.
- **MongoDB** account for managing the database.
- **Git** for version control.

### Steps to Access the Backend:

1.  **Clone the repository**:

```bash
git clone https://github.com/yanil8068/aliExpress_Backend.git
```

2. **Navigate to the project directory**:

   ```bash
   cd aliExpress-backend

   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Configure environment variables**:  
    Create a `.env` file in the root directory and add the following:

   ```bash
   PORT=8000
   MONGODB_URI=yourmongodburi
   JWT_SECRET_KEY=yourjwtsecretkey
   CLOUD_NAME=yourcouldname
   CLOUD_API_KEY=yourcloudapikey
   CLOUD_API_SECRET=yourcloudapisecret
   ```

````

5. **Run the application**:

```bash
npm run dev
````

Open [http://localhost:5173](http://localhost:8000) to view it in your browser.

6. **Deployment**:
   You can deploy the app on platforms like [Vercel](https://www.vercel.com/).

## Development Process

### Planning & Design

- The project began with the design of the backend architecture using Express.js for creating API endpoints.
- Mongoose was used for modeling data and managing MongoDB interactions effectively.

### Authentication Setup

- Implemented user authentication with JWT for secure login and signup processes.
- Passwords are hashed using bcryptjs to enhance security.

### Cart & Product Management

- Created RESTful API endpoints to manage products and user carts.
- Users can add or remove products from their cart, and their cart state is managed in MongoDB.

## Challenges Faced & Solutions

- **Database Connection Issues**:
  \_Problem: Initial connection to MongoDB was not established.
  \_Solution: Ensured that the MongoDB URI was correctly set in the .env file and that the database was properly configured.

- **Authentication Middleware**:
  \_Problem: Middleware for authentication was not functioning as intended.
  \_Solution: Debugged the middleware to ensure that JWT tokens were correctly verified and users were redirected based on authentication state.

## Key Learnings

This project enhanced my skills in:

-Building RESTful APIs with Express.js.
-Managing user authentication securely with JWT and bcryptjs.
-Handling asynchronous operations and database interactions using Mongoose.

## Authors

- [@Anil Yadav](https://github.com/yanil8068)
