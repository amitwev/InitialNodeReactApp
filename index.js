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
//running the app 
app.listen(PORT, function() {
    console.log("App is listening on port = ", PORT, process.env.DB_USER);
});