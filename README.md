# 🔧 FixitPro – Smart Appliance Repair Platform

🎨 **Figma Design:**
https://www.figma.com/design/2jKgAKHzy58QiXDj5bT43x/Untitled?node-id=1-882&t=Zrohz6lmypPoLf36-1

---

FixitPro is a modern web platform designed to solve the everyday problems users face with local appliance repair services. It provides a **trusted, transparent, and reliable way** to book repair services for appliances like washing machines, refrigerators, and microwaves.

---

## 🚨 Problem

Traditional local repair services often create issues such as:

* No warranty on repairs or spare parts
* Repeated problems leading to extra costs
* Use of duplicate or low-quality parts
* Lack of transparency and accountability

---

## 💡 Solution

FixitPro eliminates these problems by offering:

* ✅ **Verified Technicians** – Only trusted professionals
* ✅ **Warranty on Repairs** – No repeated payment stress
* ✅ **Genuine Spare Parts** – Quality assurance guaranteed
* ✅ **Real-Time Tracking** – Track your repair status
* ✅ **Transparent Pricing** – No hidden charges
* ✅ **Ratings & Reviews** – Ensuring accountability

---

## 🚀 Features

* 🔍 Browse appliance repair services
* 📅 Book repair appointments
* 👨‍🔧 View technician profiles and ratings
* 📊 Track service status in real-time
* ⭐ Submit reviews and feedback
* 👤 User dashboard for managing bookings

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS
**Backend:** Node.js, Express.js
**Database:** MongoDB
**Tools:** Git, GitHub, Postman

---

📁 FixitPro Folder Structure

fixitPro/
│
├── client/                      # Frontend (React + Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── assets/              # Images, icons, logos
│   │   ├── components/          # Reusable UI components
│   │   │   ├── common/          # Buttons, Inputs, Cards
│   │   │   ├── layout/          # Navbar, Footer
│   │   │   └── ui/              # Modals, Loaders
│   │   │
│   │   ├── pages/               # App pages
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── BookRepair.jsx
│   │   │   ├── Technicians.jsx
│   │   │   ├── TechnicianProfile.jsx
│   │   │   ├── Tracking.jsx
│   │   │   ├── Reviews.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── routes/              # React Router setup
│   │   ├── context/             # Global state (Auth, App)
│   │   ├── hooks/               # Custom hooks
│   │   ├── services/            # API calls (axios)
│   │   ├── utils/               # Helper functions
│   │   ├── constants/           # Static data
│   │   ├── styles/              # Global styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   └── package.json
│
├── server/                      # Backend (Node + Express)
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js            # MongoDB connection
│   │   │
│   │   ├── models/              # Mongoose models
│   │   │   ├── user.model.js
│   │   │   ├── technician.model.js
│   │   │   ├── booking.model.js
│   │   │   └── review.model.js
│   │   │
│   │   ├── controllers/         # Business logic
│   │   │   ├── auth.controller.js
│   │   │   ├── technician.controller.js
│   │   │   ├── booking.controller.js
│   │   │   └── review.controller.js
│   │   │
│   │   ├── routes/              # API routes
│   │   │   ├── auth.routes.js
│   │   │   ├── technician.routes.js
│   │   │   ├── booking.routes.js
│   │   │   └── review.routes.js
│   │   │
│   │   ├── middlewares/         # Auth, error handling
│   │   │   ├── auth.middleware.js
│   │   │   └── error.middleware.js
│   │   │
│   │   ├── utils/               # Helper functions
│   │   ├── app.js               # Express app config
│   │   └── index.js             # Server entry point
│   │
│   ├── .env
│   └── package.json
│
├── docs/                        # Documentation
│   ├── api-docs.md
│   └── wireframes.fig
│
├── .gitignore
├── README.md
└── package.json                 # (optional root config)


## 🎯 Goal

To build a **reliable and user-friendly repair ecosystem** where customers can trust the service they receive without worrying about quality, pricing, or accountability.

---

## 📌 Future Enhancements

* 📱 Mobile app (React Native)
* 💳 Online payment integration
* 🔔 Notifications & alerts
* 🤖 AI-based issue detection

---

## 🤝 Contribution

Contributions are welcome! Feel free to fork the repo and submit pull requests.

---

## 📬 Connect with Me

* LinkedIn: https://www.linkedin.com/in/vijay-diwaniya-7b36aa3a4/

---

⭐ If you like this project, don’t forget to give it a star!
