# Job Tracker Dashboard

The Job Tracker Dashboard is a single-page web application built with React that allows users to track and manage job applications efficiently. It supports authentication, real-time data storage with Firebase, and provides a responsive, modern user interface styled with Tailwind CSS. This project demonstrates practical use of state management, API integration, modular components, and dashboard visualizations.

## Features

- User registration and login (Firebase Authentication)
- Create, read, update, and delete job entries
- Search and filter job applications by status, company, or tags
- Dashboard metrics for total applications, interviews, and offers
- Form validation using Formik and Yup
- Responsive design with Tailwind CSS
- Real-time data sync using Firebase Firestore
- Modular and scalable component-based architecture

## Technologies Used

- **React** – Core UI framework
- **React Router DOM** – Client-side routing
- **Zustand** or **Redux Toolkit** – Global state management
- **Firebase Authentication** – Secure login and registration
- **Firebase Firestore** – Cloud-hosted NoSQL database
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Formik** and **Yup** – Form handling and validation
- **Recharts** or **Chart.js** – Dashboard data visualization
- **Vite** or **Create React App** – Project scaffolding
- **Vercel** or **Netlify** – Deployment platform

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase project set up with Authentication and Firestore enabled

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/job-tracker-dashboard.git
cd job-tracker-dashboard
Install dependencies

bash
Copy
Edit
npm install
Configure Firebase

### File Structure
src/
├── assets/
├── components/
│   ├── AuthForm.jsx
│   ├── JobForm.jsx
│   ├── JobTable.jsx
│   ├── DashboardStats.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Jobs.jsx
├── store/
│   └── useStore.js
├── firebase/
│   └── firebaseConfig.js
├── App.jsx
├── main.jsx
└── index.css

### Deployment
This app can be deployed using Vercel or Netlify. Make sure to add the required Firebase configuration values in the deployment environment settings.

### Live Demo

### Screenshots
Include UI screenshots of the dashboard, login page, and job table if available.

### Contributing
Pull requests are welcome. For significant changes, please open an issue first to discuss the changes.

### License
This project is licensed under Phuc Nguyen.
