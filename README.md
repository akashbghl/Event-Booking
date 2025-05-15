🎟️ Event Booking Platform


A full-stack event booking application featuring a React frontend, Express.js backend, and MongoDB database. Users can browse and book events, while an admin panel with protected routes allows administrators to manage and view bookings efficiently.

🚀 Live Demo


Link : https://event-booking-frontend-01eb.onrender.com/


🛠️ Tech Stack



> Frontend: React.js , Tailwind CSS

> Backend: Node.js, Express.js

> Database: MongoDB (via MongoDB Atlas)

> Deployment: Render


🔐 Admin Credentials


Note: For demonstration purposes, admin credentials are hardcoded.

Username: admin@example.com

Password: admin123

Upon successful login, admins are redirected to the dashboard at /admin/dashboard.



📦 Installation



Clone the repository:

git clone https://github.com/akashbghl/X-Event-Booking.git

cd X-Event-Booking

Install backend dependencies:

cd server
npm install

Install frontend dependencies:

cd ../client
npm install

Set up environment variables:

Create a .env file in the server directory with the following content:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Replace your_mongodb_connection_string with your actual MongoDB connection string.

🧪 Running the Application Locally
Start the backend server:


cd server
npm start
Start the frontend development server:

cd client
npm start

The frontend will be available at http://localhost:5173 and the backend API at http://localhost:5000.

🚀 Deployment on Render
Backend Deployment
Push your backend code to GitHub.

Create a new Web Service on Render:

Build Command: npm install

Start Command: node index.js

Environment Variables:

PORT: 5000

MONGO_URI: Your MongoDB connection string

Deploy the service.

Frontend Deployment
Push your frontend code to GitHub.

Create a new Static Site on Render:

Build Command: npm run build

Publish Directory: build

Environment Variables:

If your frontend makes API calls, set REACT_APP_API_URL to your backend's Render URL.


📬 API Endpoints

POST /bookings: Create a new booking

GET /bookings: Retrieve all bookings (admin access)

🧑‍💻 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
