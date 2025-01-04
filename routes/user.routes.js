const express = require('express');
const Router = express.Router();
const { body,validationResult } = require('express-validator');
const user = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Route to display the registration form
Router.get('/register', (req, res) => {
    res.render('register');
});

// Route to handle form submission
Router.post('/register',
    body('username').trim().isLength({ min: 3 }),
    body('email').trim().isEmail().isLength({ min:8}),
    body('password').trim().isLength({ min: 5 }),
    
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(),massage: 'Invalid data' })
        }
        const { username, email, password } = req.body;
const hashpassword = await bcrypt.hash(password, 10);


        const newuser = await user.create({  username, email, password: hashpassword });
        res.json(newuser);
    // res.send('Data received successfully!');
});

Router.get('/login', (req, res) => {
    res.render('login');
});
Router.post('/login',
    body('username').trim().isLength({ min:8}),
    body('password').trim().isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(),massage: 'Invalid data' })
        }
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' 
            });
        }

        const token = jwt.sign({ username: user.username ,email: user.email ,userid: user._id }, process.env.JWT_SECRET);
     
res.json({ token });
// ----------------------------2.55
        // res.json({ message: 'Login successful' });
    });
       module.exports = Router;