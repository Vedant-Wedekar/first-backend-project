const mongoose = require('mongoose');

// function connecttoDB(){
//     mongoose.connect(process.env.MONGO_URL)  
//     .then(() => {
//         console.log("Connected to the database!");
//     }) 
// }

// module.exports = connecttoDB; 


// const mongoose = require('mongoose');process.env.MONGO_URL

const connecttoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connecttoDB;
