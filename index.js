//Dotenv package for .env file usage
require('dotenv').config();
//import consts 
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
//app uses
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//running the app on prod
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


app.listen(PORT, function() {
    console.log("App is listening on port = ", PORT, process.env.DB_USER);
});