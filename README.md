# Go Food - Your One-Stop Food Ordering App

Welcome to Go Food, your ultimate destination for ordering delicious pizza, biryani, and a wide variety of mouthwatering dishes. This full-stack MERN (MongoDB, Express.js, React, Node.js) application is designed to satisfy your cravings with a seamless user experience. Whether you're a foodie or just looking for a quick meal, Go Food has you covered!

## Features

- **User Authentication**: Go Food uses JWT (JSON Web Tokens) authentication to ensure secure access to your account and orders.

- **Menu**: Browse through our extensive menu that includes pizzas, biryanis, appetizers, and more. You'll find something for every palate!

- **Order Management**: Easily add items to your cart, review your order, and complete the checkout process. Keep track of your order status.

- **Responsive Design**: Go Food is built using Bootstrap, making it fully responsive and accessible on all devices, whether you're on your desktop or mobile.

## Technologies Used

- **Frontend**:
  - React: A powerful JavaScript library for building user interfaces.
  - React Router DOM: For handling client-side routing and navigation.
  - Bootstrap: For creating a sleek and responsive UI.
  - JWT Authentication: Secure user authentication using JSON Web Tokens.

- **Backend**:
  - Node.js: A server-side JavaScript runtime for building fast and scalable applications.
  - Express.js: A web application framework for Node.js to build the backend server.
  - Express Validator: For validating user input and ensuring data integrity.
  - MongoDB: A NoSQL database for efficient data storage.

## Installation

To run Go Food locally on your machine, follow these steps:

1. Clone this repository to your local system.
   ```bash
   git clone https://github.com/yourusername/go-food.git
   ```

2. Navigate to the project directory.
   ```bash
   cd go-food
   ```

3. Install dependencies for both the client and server.
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Configure the environment variables:
   - Create a `.env` file in the `server` directory and set your MongoDB connection URL and JWT secret.
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```

5. Start the server and client.
   ```bash
   cd mernapp/backend
   npm start
   cd ../mernapp
   npm start
   ```

6. Open your web browser and access `http://localhost:3000` to use Go Food locally.

## Contributing

We welcome contributions from the community to make Go Food even better. Feel free to open issues, submit pull requests, or suggest improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy your food journey with Go Food! If you have any questions or need assistance, please don't hesitate to reach out. Bon appétit! 🍕🍛🍔🥗
