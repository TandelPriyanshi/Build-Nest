const jwt = require('jsonwebtoken');

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token, "Token");


    // Check if token is provided
    if (!token) {       
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token.split(' ')[1], "CGPIT");
        console.log(decoded, "Decoded");
        
        // Store the decoded token in request (if needed)
        req.user = decoded.user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Handle invalid token
        console.log(error, "Error");
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = verifyToken;