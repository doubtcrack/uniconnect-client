# UniConnect

UniConnect is a web platform designed to simplify the process of buying, selling, or trading used textbooks, stationery, and other study materials among university students. The platform aims to foster a sense of community, connect students based on their needs, and contribute to environmentally friendly practices by encouraging the reuse of materials.

![UniConnect](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9utx04s66k6k4kScs1XZaHkaCbb7RNiVxknSqdVUq1Dr2GOwi28DWHoYgiJwjE-p4l9NoPrfPCb3N5eIDB4LWPkRwvK1vJC4Qt2ejvJxS2RnvfS8YqNTMILDOHAXJmmdYVr2eSDfhwY8-PwzmDs8ZvLrSuG39rKN662Gtfsp6B3ZQF73VTjAx0Zk8F8i7/w1200-h1200/1.png)

## Project Overview

### Why UniConnect?

UniConnect was born out of a clear goal: to empower students. The project addresses the financial burden of education, especially the high costs associated with textbooks. By creating a platform for affordable exchange of study materials, UniConnect strives to be the bridge that helps students access the resources they need without compromising their financial stability.

Additionally, UniConnect recognizes the environmental impact of student waste. Discarded materials contribute to environmental concerns, and UniConnect steps in to promote a more sustainable campus ecosystem by encouraging the reuse of materials, thereby reducing waste and environmental impact.

### Key Features

- Buy, Sell, and Exchange Study Materials
- Connect with Peers
- User Authentication and Authorization
- Real-time Chat
- Stunning UI Designs
- Efficient State Management
- Lazy Loaded Components
- Personalized Profiles
- Search and Filter
- Responsive Design
- Intuitive Navigation
- Product Image Hosting
- User Feedback and Ratings
- Accessibility Features
- Toast Notification
- Functional Reusable Components
- ...and much more!

### Tech Stack Used (frontend)

- ReactJS
- TailwindCSS
- MaterialUI

## User Interface (UI)

![uniConenct UI Snaps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc9H7dCxrKUE8AeKcNzAcdbrfd5TToub359LRofoXmUagNYa95FISI3ISvTnnffjZPOfgwJIhyphenhyphenXCjarCMeO3VFBejPCRuxTSn2FdTacRug4eUfiM7ItMpD8omdiaZnnegX7jRGdlAPltD0szf0WStSqOTakD32ZKvHKeuVI_fLMOACiV5aWeU7XCGv1794/w1200-h1200/7.png)

![uniConenct UI Snaps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYaEbdx5Ct_qz3H69Nh1CMNLIzcl34gUWkUAu3Nq0st2B2nalvlKMyTJQvkqRaZA9s1xSzTnoFvDguCcYQ1F7rKXgMPxohp_Q7nerq9H_88F5-PkkhynR07TwPkMSDT45u0gVutvnX63jlnQQJRtPukAT0vF6hO-Wdg5em4VhLjriFIFQzNrk7aIwHg7a5/w1200-h1200/4.png)

![uniConenct UI Snaps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSHrnik4H3w7BA2HfHDYDGMrIZ27VjSGEovDC_gogMfyN74hlj4X00rmpyPdfKuBpjALEGzHOczI-WO1FJ7GA7JygVxj-AutBljnmcoG0Qd4Wqqyknx2viouZBZj7aQeeAPDzcHWBIzs4TtdbC1F-htcGp03CaVTYPA-49CiAzYgMfgw9Ycggr6SFr1H95/w1200-h1200/5.png)

![uniConenct UI Snaps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqoUb4_ldgktUp6hpQhQZvxXooaJRGK6BTts9-vshZdkYvRnyRJ8zzuWmPH7nlmIdP2uvA0kp1LgBzuQWJikw-Huo5lDGmmpx_7bLB_b4TJnfPEBo5W1M3tPQFBWS6M-qL1R0NbCLDpqHrm2TvZiLDebytWljFeg211mImcpcN__1ZW7guu_fca4b-fqXz/w1200-h1200/3.png)

![uniConenct UI Snaps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzZJrAzOZSydIOUNeYiVRVFOqic8LtHIfVbQg7KhzM7lwNcylVY6skbOrDwb1nXP_bj53wUmtTJaIGFj-gxaNgOIqRO1YVojjoe5jHphfn7EblmLDk70jmhnVEva9ocdn5V7pnVVttNUPfrQz2PhFUQ0re_33WEu3U9fPHhBsW5t5lBfuPkWpKYgLdvyG7/w1200-h1200/2.png)

## ![uniConenct UI Snaps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHnUSIHGLHtwq7hHR1ty7T40LhG5ihp-JYf5dbXId3g7B_VHrLJIL3QmUTmBZ5oANSzHX_RGD0rl6RuG19D4f1yXN60ArXhgWyGTaru_0lvX8cdB-gsqyFQbUiJKu0bMyKmvHpCAqSo9f20UbSrEhAEEJ3UKR3AkzVmTddgF9Wcf1OV_yIIskWHc3BoI1C/w1200-h1200/6.png)

## API Endpoints

### User

- **POST** `/api/v2/user/activation`

  - Activate user account.

- **GET** `/api/v2/user/admin-all-users`

  - Get all users (Admin).

- **POST** `/api/v2/user/create-user`

  - Create a new user.

- **DELETE** `/api/v2/user/delete-user-address/{id}`

  - Delete user address.

- **DELETE** `/api/v2/user/delete-user/{id}`

  - Delete user by ID (Admin).

- **GET** `/api/v2/user/getuser`

  - Get user information.

- **POST** `/api/v2/user/login-user`

  - Log in user.

- **GET** `/api/v2/user/logout`

  - Log out user.

- **PUT** `/api/v2/user/update-avatar`

  - Update user avatar.

- **PUT** `/api/v2/user/update-user-addresses`

  - Update user addresses.

- **PUT** `/api/v2/user/update-user-info`

  - Update user information.

- **PUT** `/api/v2/user/update-user-password`

  - Update user password.

- **GET** `/api/v2/user/user-info/{id}`

  - Get user information by ID.

## Conversation

- **POST** `/api/v2/conversation/create-new-conversation`

  - Create a new conversation.

- **GET** `/api/v2/conversation/get-all-conversation-seller/{id}`

  - Get seller conversations.

- **GET** `/api/v2/conversation/get-all-conversation-user/{id}`

  - Get user conversations.

- **PUT** `/api/v2/conversation/update-last-message/{id}`

  - Update the last message in a conversation.

## Message

- **POST** `/api/v2/message/create-new-message`

  - Create a new message.

- **GET** `/api/v2/message/get-all-messages/{id}`

  - Get all messages with conversation ID.

## Order

- **GET** `/api/v2/order/admin-all-orders`

  - Get all orders (Admin).

- **POST** `/api/v2/order/create-order`

  - Create a new order.

- **GET** `/api/v2/order/get-all-orders/{userId}`

  - Get all orders of a user.

- **GET** ` /api/v2/order/get-seller-all-orders/{shopId}`

  - Get all orders of a seller.

- **PUT** ` /api/v2/order/update-order-status/{id}`

  - Update order status for a seller.

## Shop

- **POST** `/api/v2/shop/activation`

  - Activate a shop.

- **GET** `/api/v2/shop/admin-all-sellers`

  - Get all sellers (Admin only).

- **POST** `/api/v2/shop/create-shop`

  - Create a new shop.

- **DELETE** `/api/v2/shop/delete-seller/{id}`

  - Delete a seller (Admin only).

- **GET** `/api/v2/shop/get-shop-info/{id}`

  - Get shop information by ID.

- **GET** `/api/v2/shop/getSeller`

  - Get shop information.

- **POST** `/api/v2/shop/login-shop`

  - Login to a shop.

- **GET** `/api/v2/shop/logout`

  - Logout from a shop.

- **PUT** `/api/v2/shop/update-seller-info`

  - Update seller information.

- **PUT** `/api/v2/shop/update-shop-avatar`

  - Update shop profile picture.

## Product

- **GET** `/api/v2/product/admin-all-products`

  - Get all products (Admin).

- **PUT** `/api/v2/product/create-new-review`

  - Create a new review for a product.

- **POST** `/api/v2/product/create-product`

  - Create a new product.

- **DELETE** `/api/v2/product/delete-shop-product/{id}`

  - Delete a product of a shop.

- **GET** `/api/v2/product/get-all-products`

  - Get all products.

- **GET** `/api/v2/product/get-all-products-shop/{id}`

  - Get all products of a shop.

⭐️ If you find this API documentation helpful, don't forget to star it!

🚀 [Project Live Demo](https://uniconnect-client.vercel.app/)

📄 [API Documentation](https://meri-api.vercel.app/uniconnect)

👩🏻‍💻 [Backend Repo](https://github.com/doubtcrack/uniconnect-server)

👩🏻‍💻 [SocketIO Repo](https://github.com/doubtcrack/uniconnect-socket)

## Setup Guide

Follow these steps to set up and run the UniConnect MERN stack application locally:

### Client:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/doubtcrack/uniconnect-client.git
   cd uniconnect-client

   ```

2. **Installing Dependencies:**
   ```bash
    npm install
   ```
3. **Setting Up `.env` Credentials**

   Create a `.env` file in your uniconnect-client directory and provide your live backend URL and socket.io url

   ```
    REACT_APP_BACKEND_URL= your-server-url
    REACT_APP_SOCKET_URL = your-socket-io-server-url
   ```

4. **Starting the Client**

   Begin the client application with the following command in the client directory:

   ```
   npm start
   ```

### Server:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/doubtcrack/uniconnect-server.git
   cd uniconnect-server
   ```

2. **Installing Dependencies:**
   ```bash
    npm install
   ```
3. **Setting Up `.env` Credentials**

   Create a `.env` file in your uniconnect-server directory and provide the following data

   ```
    PORT = port-of-your-choice
    DB_URL = your-mongo-url
    JWT_SECRET_KEY = your-secret-key
    JWT_EXPIRES = expiry-time e.g(7d)
    ACTIVATION_SECRET = your-jwt-activation-secret
    SMPT_HOST = your-smtp-host
    SMPT_PORT = smtp-port
    SMPT_PASSWORD = your-email-password
    SMPT_MAIL = your-email-id
    STRIPE_API_KEY = your-stripe-key
    STRIPE_SECRET_KEY = your-stripe-secret
    CLOUDINARY_CLOUD_NAME= your-cloudinary-name
    CLOUDINARY_API_KEY= your-cloudinary-key
    CLOUDINARY_API_SECRET= your-cloudinary-secret
    CLIENT_URL1= first-client-url
    CLIENT_URL2= optional
    CLIENT_URL3= optional
    NODE_ENV= production
   ```

4. **Starting the Server**

   Begin the server application with the following command in the directory:

   ```
   npm start
   ```

   **Accessing the Application**

   You're all set! Open your browser and go to http://localhost:3000 to access the UniConnect application.

### Socketio:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/doubtcrack/uniconnect-socket.git
   cd uniconnect-socket
   ```

2. **Installing Dependencies:**

   ```bash
    npm install
   ```

3. **Starting the Server**

   Begin the server application with the following command in the directory:

   ```
   npm start
   ```

## Contribute and Support ❤️

🌟If you find this project useful and would like to contribute or show your support, we welcome your involvement. Feel free to submit pull requests, report issues, or share your feedback. Your contributions make this project even better!🌟

And also, please consider giving it a star ⭐ on GitHub! Your support and feedback are greatly appreciated as they help us improve and grow the platform. Thank you
