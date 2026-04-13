# 🚀 QuickBlog – AI Powered Blog Platform

QuickBlog is a full-stack MERN blog application that allows users to create, read, and manage blogs with an integrated **AI content generation feature using Gemini API**, built using technologies like React, Node.js, Express.js, MongoDB, Mongoose, JWT, Multer, ImageKit, and Axios.

---

## ✨ Features

- 📝 Create, edit, and delete blog posts  
- 💬 Add and manage comments  
- 🔐 Admin authentication & protected routes  
- 🤖 AI-powered blog content generation (Gemini API)  
- 📊 Admin dashboard for blogs & comments  
- 🖼️ Image upload support (Multer + ImageKit)  
- ⚡ Fast frontend with Vite + React  

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- React Hot Toast
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (file upload)
- ImageKit (image hosting)
- Google Gemini API (`@google/genai`)

---

## 📁 Project Structure

```
BLOG-SITE/
│
client/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── admin/
│   │   │   ├── BlogTableItem.jsx
│   │   │   ├── CommentTableItem.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── BlogCard.jsx
│   │   ├── BlogList.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   └── NewsLetter.jsx
│   │
│   ├── context/
│   │   └── AppContext.jsx
│   │
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── AddBlog.jsx
│   │   │   ├── Comments.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── ListBlog.jsx
│   │   │
│   │   ├── Blog.jsx
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
├── package.json
└── package-lock.json
│
server/
│
├── configs/
│   ├── db.js
│   ├── gemini.js
│   └── imageKit.js
│
├── controllers/
│   ├── adminController.js
│   └── blogController.js
│
├── middleware/
│   ├── auth.js
│   └── multer.js
│
├── models/
│   ├── Blog.js
│   └── Comment.js
│
├── routes/
│   ├── adminRoutes.js
│   └── blogRoutes.js
│
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
│
└── README.md
```

---

## 🔗 API Routes

### 🧑‍💼 Admin Routes (`/api/admin`)
- `POST /login` → Admin login  
- `GET /comments` → Get all comments  
- `GET /blogs` → Get all blogs  
- `POST /delete-comment` → Delete comment  
- `POST /approve-comment` → Approve comment  
- `GET /dashboard` → Dashboard stats  

---

### 📝 Blog Routes (`/api/blog`)
- `POST /add` → Add blog (with image upload)  
- `GET /all` → Get all blogs  
- `GET /:blogId` → Get blog by ID  
- `GET /comments` → Get blog comments  
- `POST /add-comment` → Add comment  
- `POST /delete` → Delete blog (admin)  
- `POST /toggle-publish` → Publish/unpublish blog  
- `POST /generate` → Generate blog using AI ✨  

---

## 🤖 AI Feature (Gemini API)

QuickBlog integrates **Google Gemini API** to generate blog content automatically.

- Uses `@google/genai`
- Endpoint: `/api/blog/generate`
- Requires API key in `.env`

---

## ⚙️ Environment Variables

Create a `.env` file in **server/** folder:

```
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key

IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository
```
git clone https://github.com/your-username/quickblog.git
cd quickblog
```

---

### 2️⃣ Setup Backend
```
cd server
npm install
npm run server
```

---

### 3️⃣ Setup Frontend
```
cd client
npm install
npm run dev
```

---

## 🌐 Running the App

- Frontend → http://localhost:5173  
- Backend → http://localhost:3000  

---

## 📦 Dependencies

### Backend
- express
- mongoose
- dotenv
- cors
- jsonwebtoken
- multer
- imagekit
- @google/genai

### Dev
- nodemon

### Frontend
- react
- react-dom
- axios
- react-router-dom
- tailwindcss
- vite
- react-hot-toast
- framer-motion
- quill
- marked
- moment

---

## 🔐 Authentication

- JWT-based authentication  
- Admin-only routes protected via middleware  

---

## 📸 Image Upload

- Handled via **Multer**
- Stored using **ImageKit**

---

## 🚀 Future Improvements

- User authentication (not just admin)  
- Like & share functionality  
- Rich text editor improvements  
- SEO optimization  
- Deployment (Vercel + Render)  


---

## 💡 Author

Made with ❤️ by **Vandana**