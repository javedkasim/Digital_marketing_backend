const mongoose = require("mongoose");

const databaseConnection = async () => {
    mongoose.connect("mongodb+srv://akashedu450_db_user:SYz2kNwhn2caX3kh@cluster0.iuofnej.mongodb.net/")
    .then(()=> {
        console.log("Database connected successfully !");
    })
    .catch((err) => {
        console.log("Database connection failed", err);
    });
};

module.exports = databaseConnection;