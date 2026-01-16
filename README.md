# Nexus Inventory 🗂️

## 📄 Project Description

Nexus Inventory is a full-stack inventory management web application built using **Next.js, Node.js, Express, MongoDB, and NextAuth**. It allows users to securely register, log in, and manage inventory items through a clean and responsive interface. The project follows industry best practices and is suitable for real-world production use.

---

## 🚀 Live Demo

Frontend: [https://nexus-inventory-five.vercel.app](https://nexus-inventory-ogka.vercel.app/)

---

## ⚙️ Setup & Installation Instructions

A modern, full‑stack inventory management system built with **Next.js, MongoDB, Express, Node.js, and NextAuth**. Nexus Inventory provides secure authentication, real‑time product management, and a clean, responsive UI suitable for production use.



## 📌 Implemented Features

* 🔐 User authentication (Email/Password & Google OAuth)
* 📝 User registration with secure password hashing
* 📦 View all inventory items
* ➕ Add new inventory items
* ✏️ Update existing items
* ❌ Delete items
* 🖼️ Image support for products
* 🔄 Real-time UI updates
* 🌐 CORS-secured API communication
* 📱 Fully responsive UI

---

## 🧠 Feature Explanations

* 🔐 **Authentication** – Email/password login + Google OAuth (NextAuth)
* 👤 **User Registration & Login** – Secure bcrypt password hashing
* 📦 **Inventory Management** – Add, view, update, delete items
* 🖼️ **Image Support** – Item image URLs with fallback
* ⚡ **Fast & SEO Friendly** – Next.js App Router + Server Components
* 🌐 **Production Ready CORS Setup**
* 🎨 **Modern UI** – Tailwind CSS with responsive design
* 🔄 **Auto Deploy** – GitHub + Vercel integration

---

## 🛠️ Tech Stack

### Frontend

* Next.js 15+ (App Router)
* React 18
* Tailwind CSS
* NextAuth.js
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* bcryptjs
* CORS

### Deployment

* Frontend: **Vercel**
* Backend: **Render / Railway / Cyclic**
* Database: **MongoDB Atlas**

---

## 📂 Project Structure

```
frontend/
├── public/             # Images, favicons, and static assets
├── src/
│   ├── app/            # App Router (The core of your app)
│   │   ├── api/        # NextAuth & internal API routes
│   │   │   └── auth/
│   │   │       └── [...nextauth]/route.js
│   │   ├── items/      # /items page
│   │   ├── add-item/   # /add-item page
│   │   ├── layout.js   # Main wrapper (Navbar lives here)
│   │   └── page.js     # Landing page (Home)
│   ├── components/     # Reusable UI (Navbar, Button, Card)
│   ├── lib/            # Shared utilities (MongoDB connection logic)
│   └── proxy.js        # Auth Protection (Next.js 16 convention)
├── .env.local          # Environment Variables (DO NOT PUSH TO GITHUB)
├── next.config.js      # Next.js specific settings
├── package.json        # Frontend dependencies
└── package-lock.json   
```

---

## 🔐 Environment Variables

These environment variables are required for the project to function correctly in both development and production.

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
NEXTAUTH_URL=https://nexus-inventory-five.vercel.app
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Backend (.env)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=https://nexus-inventory-five.vercel.app
```

---

## ⚙️ Setup & Installation Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/nexus-inventory.git
cd nexus-inventory
```

---

### 2️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

### 3️⃣ Backend Setup

```bash
cd server
npm install
npm run dev
```

---

## 🔄 CORS Configuration (Backend)

```js
import cors from "cors";

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
```

---

## 🧠 Feature Explanations

### 🔐 Authentication

Users can register and log in using email/password or Google. Passwords are hashed using bcrypt and sessions are managed securely using NextAuth.

### 📦 Inventory Management

Authenticated users can view, add, update, and delete inventory items. Each item contains a name, category, price, description, and image.

### 🖼️ Image Handling

Items support image URLs with automatic fallback to a placeholder if no image is provided.

### ⚡ Performance

Next.js Server Components and optimized data fetching ensure fast load times and good SEO.

### 🌐 Secure API Communication

CORS is configured to allow only the frontend domain, ensuring secure communication between

1. User registers via `/register`
2. Password is hashed using **bcrypt**
3. User is stored in MongoDB
4. NextAuth handles login using **Credentials Provider** or **Google OAuth**
5. JWT session is created

---

## 📡 Route Summary

### Authentication Routes

| Method | Endpoint          | Description                  |
| ------ | ----------------- | ---------------------------- |
| POST   | /api/register     | Register a new user          |
| POST   | /api/auth/login   | Login user using credentials |
| GET    | /api/auth/session | Get current user session     |

### Item Routes

| Method | Endpoint       | Description               |
| ------ | -------------- | ------------------------- |
| GET    | /api/items     | Fetch all inventory items |
| POST   | /api/items     | Add a new item            |
| PUT    | /api/items/:id | Update an existing item   |
| DELETE | /api/items/:id | Delete an item            |

---

## 📌 Implemented Features

### Auth

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| POST   | /api/register   | Register new user |
| POST   | /api/auth/login | Login user        |

### Items

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/items     | Get all items |
| POST   | /api/items     | Add new item  |
| PUT    | /api/items/:id | Update item   |
| DELETE | /api/items/:id | Delete item   |

---

## 🧪 Testing

```bash
npm run test
```

---

## 🚀 Deployment Guide

### Frontend (Vercel)

1. Push code to GitHub
2. Go to vercel.com → New Project
3. Import repository
4. Add environment variables
5. Deploy 🎉

### Backend (Render / Railway)

1. Create new service
2. Connect GitHub repo
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy

---

## 🔒 Security Practices

* Password hashing with bcrypt
* CORS restricted to frontend domain
* Environment variables for secrets
* NextAuth secure cookies

---

## 🧠 Future Improvements

* Role-based access control (Admin/User)
* Image upload (Cloudinary / Firebase)
* Pagination & search
* Dashboard analytics
* Unit & integration tests

---

## 👨‍💻 Author

**Fahim Ahmed**
Full Stack Developer | MERN | Next.js
📧 Email: [fa369383@gmail.com](mailto:fa369383@gmail.com)
📍 Sylhet, Bangladesh

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub and share it with others!

---

## 📄 License

This project is licensed under the MIT License.

---

> Built with ❤️ by Fahim Ahmed
