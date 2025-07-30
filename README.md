# 🔗 URL Shortener

A full-stack **URL Shortener** web application built with **Node.js**, **Express.js**, and **MongoDB**, allowing users to generate short and shareable URLs from long links. Also includes user authentication and basic analytics.

---

## 📌 Features

- 🔗 Shorten long URLs into compact shareable links
- 👤 User authentication (Sign Up / Login)
- 📊 Track number of visits on each short link
- 📅 Timestamp of URL creation
- 🔒 Middleware-based route protection
- 💡 Clean and responsive frontend using HTML & CSS

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Frontend:** HTML, CSS
- **Templating:** EJS
- **Authentication:** JWT
- **Other:** Git, GitHub

---

## 🧑‍💻 Folder Structure
UrlShortner/
├── controllers/
├── frontEnd/
├── middelwares/
├── models/
├── routes/
├── services/
├── views/
├── index.js
├── connection.js
├── .gitignore
├── package.json
└── README.md


---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/KoshtiDivya/Url-shortner.git
cd Url-shortner

2. Install Dependencies

npm install

3. Set Up Environment Variables
Create a .env file in the root and add:

MONGO_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key
PORT=3000

4. Run the App

npm start
Visit: http://localhost:3000

📸 Screenshots


🙋‍♀️ Author
Divya Koshti
GitHub



