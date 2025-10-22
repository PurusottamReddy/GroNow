# 🛒 GroNow – Smart Online Grocery Shopping Application

**GroNow** is a full-stack, scalable grocery delivery web application built using the **MERN stack** (MongoDB, Express, React, Node.js). It's designed to provide a sleek, responsive, and efficient platform for users to browse, order, and manage groceries online.

## 🔗 Quick Links

| Deployment | Frontend (Vercel) | Backend (Render) |
| :--- | :--- | :--- |
| **Live URL** | [https://gro-now.vercel.app](https://gro-now.vercel.app) | [https://gronow.render.com](https://gronow.render.com) |
| **GitHub Repo** | [Client Code in `/client`](https://github.com/PurusottamReddy/GroNow/tree/main/client) | [Server Code in `/server`](https://github.com/PurusottamReddy/GroNow/tree/main/server) |

---

## 💻 Tech Stack & Architecture

GroNow utilizes a modern, robust technology stack for both client-side and server-side development, ensuring performance and maintainability.

### Frontend
* **Framework:** React.js (with Vite)
* **Styling:** Tailwind CSS
* **Deployment:** Vercel

### Backend & Database
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas (NoSQL)
* **Deployment:** **Render** (`https://gronow.render.com`)

### Key Integrations
| Service | Purpose |
| :--- | :--- |
| **Stripe** | Secure Online Payment Gateway Integration |
| **Cloudinary** | Cloud-based Image Storage and Management |
| **Multer** | Middleware for handling `multipart/form-data` (image uploads) |
| **Version Control** | Git & GitHub |

---

## 💡 Key Features

* **Responsive UI:** Intuitive, user-friendly, and responsive interface for effortless browsing and navigation on any device.
* **Secure Access:** Robust **User & Seller Authentication and Authorization** modules.
* **Product Catalog:** Comprehensive product display with high-quality images and detailed descriptions.
* **Smart Shopping Cart:** Real-time functionality to **add, update, or remove items** instantly.
* **Payment Options:** Smooth checkout supporting both **Cash on Delivery (COD)** and **Online Payments (Stripe API)**.
* **Seller Management:** Dedicated interface for **Product Listing and Management** to handle inventory.
* **Delivery Setup:** **User Address Management** for seamless and accurate delivery logistics.
* **Scalable Code:** Clean and **modular codebase** ensuring long-term scalability and easy maintenance.

---

## ⚙️ Installation & Local Setup

Follow these steps to set up and run GroNow locally.

### Prerequisites

* Node.js (v14+)
* npm (or yarn)
* A MongoDB Atlas database URI.
* Stripe API Keys, Cloudinary credentials.
```bash
### Step 1: Clone the Repository
git clone [https://github.com/purusottamreddy/gronow.git](https://github.com/purusottamreddy/gronow.git)
cd gronow

Step 2: Configure Environment Variables
Create a .env file in the root of the /server directory and add the necessary configuration (e.g., MONGO_URI, JWT_SECRET, STRIPE_SECRET_KEY, CLOUDINARY credentials).
Step 3: Setup Backend (Server)
cd server
npm install
npm start   # Runs 'node index.js' or use 'nodemon index.js' for development

The server will start on port 5000 (or your configured port).
Step 4: Setup Frontend (Client)
cd ../client
npm install
npm run dev

The frontend will start on port 5173 (or your configured port) and should automatically open in your browser.

📁 Project Structure
gronow/
│
├── client/          # React frontend (Vite)
│   ├── src/
│   └── package.json
│
├── server/          # Node.js/Express backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── package.json
│
└── README.md
```

🧠 Learning Outcomes
This project served as a powerful learning experience, strengthening core full-stack development skills:
 * End-to-End MERN Development: Mastering the complete flow of data from MongoDB to the React UI.
 * RESTful API Design: Implementing a clean, secure, and well-structured API.
 * Secure Integrations: Successful integration of the Stripe Payment Gateway for transactional security and Cloudinary for scalable media management.
 * Deployment Workflow: Gaining hands-on experience with the full-stack deployment cycle using Vercel (Frontend) and Render (Backend).

🧑‍💻 Author
T. Purusottam Reddy
I welcome any feedback or suggestions! Feel free to connect or explore my other projects.
<!-- end list -->
