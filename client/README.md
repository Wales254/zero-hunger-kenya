# 🍽️ ZERO HUNGER PLATFORM

A full-stack **food donation and distribution management system** built with React.
The platform connects **Donors, Volunteers, Organizations, and Admins** to reduce food waste and fight hunger.

---

## 🚀 PROJECT OVERVIEW

Zero Hunger is a web-based system designed to streamline food donation workflows:

* 🍱 Donors can offer food donations
* 🏢 Organizations can request food aid
* 🚚 Volunteers handle deliveries
* 🛠️ Admins manage approvals and system data

---

## 🧠 KEY FEATURES

### 👤 Authentication

* Login & Signup system
* Role-based access (Admin / Donor / Volunteer / Organization)

### 🏢 Organization Module

* Request food aid
* Manage organization profile
* View requests status

### 🍱 Donor Module

* Submit donation requests
* Accept / track donation requests
* Manage donation history

### 🚚 Volunteer Module

* View assigned deliveries
* Accept delivery tasks
* Manage delivery status

### 🛠️ Admin Module

* Approve/reject organizations
* Manage registered users
* Edit and delete records

---

## 🏗️ TECH STACK

* ⚛️ React JS (Frontend)
* 🌐 React Router DOM (Navigation)
* 🔗 Axios (API Requests)
* 🎨 CSS (Custom Styling)
* 🖥️ Node.js / Express (Backend API - assumed)
* 🗄️ MongoDB (Database - assumed)

---

## ⚙️ INSTALLATION & RUN

### 1. Clone the repository

```bash
git clone https://github.com/your-username/zero-hunger.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm start
```

### 4. Open app

```
http://localhost:3000
```

---

## 🔐 LOGIN CREDENTIALS (TEST MODE)

```text
Email: admin@foodpals.com
Password: password123
```

---

## 🔥 ROLE SYSTEM

| Role         | Access            |
| ------------ | ----------------- |
| Admin        | System management |
| Donor        | Donation handling |
| Volunteer    | Delivery tasks    |
| Organization | Food aid requests |

---

## 🧩 API ENDPOINTS (EXAMPLE)

```text
GET    /admin/approves
POST   /admin/approves
PATCH  /admin/approves/:id
DELETE /admin/approves/:id

GET    /adminOrg/accepts
POST   /adminOrg/accepts
DELETE /adminOrg/accepts/:id
```

---

## ⚠️ COMMON ISSUES FIXED

* Fixed invalid component import errors
* Ensured all pages use `.js` extension properly
* Fixed routing issues in React Router v6
* Resolved invalid JSX element errors from wrong imports

---

## 🎯 FUTURE IMPROVEMENTS

* JWT Authentication
* Dashboard analytics
* Real-time notifications
* Mobile responsiveness
* Cloud deployment (Vercel / Netlify / Render)

---

## 👨‍💻 AUTHOR

Developed as part of a software engineering project
Focused on solving **food waste and hunger distribution challenges**

---

## ⭐ SUPPORT

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🛠️ Improve it

---