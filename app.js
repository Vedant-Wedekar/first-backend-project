const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db');
connectToDB();
const cookiesparse = require('cookie-parser');
app.use(cookiesparse());

const indexrouter = require('./routes/index.route');
app.use('/', indexrouter);
// Middleware to parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use the user routes
app.use('/user', userRoutes);

// Start the server on port 3001
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001/user/login');
});
