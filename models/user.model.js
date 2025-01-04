const mongoose = require('mongoose');

// Connect to MongoDB
const userSchema = new mongoose.Schema({
username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    // minlenght: {3 : 'Username must be at least 3 characters long'}
},
email: {    
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    minlenght: {8 : 'Email must be at least 8 characters long'}
},
password: {
    type: String,
    required: true,
    trim: true,
    minlenght: {5 : 'Password must be at least 5 characters long'}
},
})

const user = new mongoose.model('user', userSchema);
module.exports = user