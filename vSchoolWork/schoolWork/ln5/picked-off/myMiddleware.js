// myMiddleware.js
//const { v4: uuidv4 } = require('uuid');

module.exports = function (req, res, next) {
    // Adding a custom property with a UUID to the req object
    //req.customId = uuidv4();
    req.customId = "This is a custom property added by middleware"

    // Call next() to pass control to the next middleware/route handler
    next();
};
