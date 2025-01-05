const express = require('express'); // Import the express module
const router = express.Router();    // Create a router object



module.exports = router; // Export the router object

router.get('/', (req, res) => {
    res.render('home'); 
}   );