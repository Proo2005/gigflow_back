# GigFlow Backend

This is the backend for **GigFlow**, a platform connecting clients with freelancers.  
It is built with **Node.js**, **Express**, and **MongoDB**.

---

## Demo

The backend is live at: [https://gigflow-back.onrender.com](https://gigflow-back.onrender.com)  

API endpoints can be tested with tools like Postman or directly via frontend requests.

---

## Links

- Open [Frontend](https://gigflow-front-fawn.vercel.app/) in your browser to see the result.  
- Open [Backend](https://gigflow-back.onrender.com) in your browser to see the result.  
- Check the [Frontend Repo](https://github.com/Proo2005/gigflow_front).

---

## .env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

---

## Run the server
npm run dev

# or
node server.js


---
## Features

- User authentication (signup/login) with JWT
- Role-based access: Client and Freelancer
- CRUD operations for Jobs/Gigs
- Freelancer search
- Assigning jobs and managing bids
- Secure password hashing
- RESTful API design

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/gigflow-back.git
cd gigflow-back
