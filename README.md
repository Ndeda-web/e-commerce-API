 🛒 E-Commerce API

A **full-featured E-Commerce backend API** built with **Node.js, Express, MongoDB**, and **Stripe payment integration**.  
Supports **user authentication (JWT)**, **admin roles**, **products CRUD**, **cart system**, **checkout**, and **order history**.

---

## 🌟 Features

- ✅ **User Authentication**: Signup/Login with JWT  
- ✅ **Admin & User Roles**: Admin can manage products  
- ✅ **Products**: Create, update, list, search, filter  
- ✅ **Cart System**: Add, remove, view cart  
- ✅ **Checkout**: Stripe payment integration  
- ✅ **Orders**: Order history for users  
- ✅ **Middleware**: JWT auth + Admin protection  
- ✅ **Inventory Management**: Stock updates automatically  
- ✅ **Deployment Ready**: Supports environment variables and production deployment  

---

## 🛠️ Tech Stack

- **Node.js** & **Express**  
- **MongoDB** & **Mongoose**  
- **JWT** for authentication  
- **bcrypt** for password encryption  
- **Stripe** for payment processing  
- **Railway / Heroku** for deployment  

---

## 📁 Folder Structure
ecommerce-api/
├─ src/
│ ├─ config/
│ │ └─ db.js
│ ├─ controllers/
│ │ ├─ auth.controller.js
│ │ ├─ product.controller.js
│ │ ├─ cart.controller.js
│ │ ├─ checkout.controller.js
│ │ └─ order.controller.js
│ ├─ middleware/
│ │ ├─ auth.middleware.js
│ │ └─ admin.middleware.js
│ ├─ models/
│ │ ├─ User.js
│ │ ├─ Product.js
│ │ ├─ Cart.js
│ │ └─ Order.js
│ ├─ routes/
│ │ ├─ auth.routes.js
│ │ ├─ product.routes.js
│ │ ├─ cart.routes.js
│ │ ├─ checkout.routes.js
│ │ ├─ order.routes.js
│ │ └─ stripe.routes.js
│ └─ server.js
├─ .env
├─ package.json
└─ README.md

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone <your-repo-url>
cd ecommerce-api
2️⃣ Install dependencies
npm install
3️⃣ Add environment variables
Create a .env file:

PORT=5000
MONGO_URI=<your MongoDB URI>
JWT_SECRET=<your JWT secret>
STRIPE_SECRET_KEY=<your Stripe secret key>
STRIPE_WEBHOOK_SECRET=<your Stripe webhook secret>
4️⃣ Start the server
npm run dev
Server runs on http://localhost:5000

📌 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/signup	Register new user
POST	/api/auth/login	Login and get JWT

Products
Method	Endpoint	Description
GET	/api/products	Get all products (public)
POST	/api/products	Add product (admin only)
PUT	/api/products/:id	Update product (admin only)
GET	/api/products?category=&minPrice=&maxPrice=&search=	Filter/search products


Cart
Method	Endpoint	Description
POST	/api/cart	Add product to cart
GET	/api/cart	View user's cart
DELETE	/api/cart	Remove product from cart


Checkout
Method	Endpoint	Description
POST	/api/checkout	Checkout cart & pay with Stripe


Orders
Method	Endpoint	Description
GET	/api/orders	Get logged-in user's order history

Stripe Webhook
Method	Endpoint	Description
POST	/api/stripe/webhook	Listen for Stripe events (payment confirmation)

⚡ Testing
Use Postman or Insomnia to test endpoints

Add Authorization header for protected routes:

Authorization: Bearer <JWT token>
Example JSON body:

Signup / Login

{
  "name": "Lyle",
  "email": "test@gmail.com",
  "password": "123456"
}
Add to Cart

{
  "productId": "<product_id>",
  "quantity": 2
}
Checkout

POST /api/checkout
Headers: Authorization: Bearer <JWT token>
📦 Deployment
Deployed on Railway or Heroku

Live API URL: https://<your-live-url>

Remember to configure environment variables in production for MongoDB and Stripe keys.

🔑 Security
Passwords hashed with bcrypt

JWT authentication for all user-protected routes

Admin routes protected with admin middleware

Stripe secret keys stored in .env

📌 Notes
Use MongoDB Atlas for cloud DB

Stripe test mode for payment testing

Expandable: add reviews, wishlist, categories, email notifications

📚 References
Express Documentation

Mongoose Documentation

Stripe API Docs

JWT Guide

👨‍💻 Author
Lonewolf Lyle – Backend Developer & Web3 Enthusiast

GitHub: Ndeda-web

LinkedIn: Stacy Ndeda


