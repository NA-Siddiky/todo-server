const mongoose = require("mongoose");

const dbName = process.env.DB_NAME;

mongoose.connect(process.env.MONGODB_URL, {
    autoIndex: true,
    dbName
});

const db = mongoose.connection;

// Check for connection errors
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Check if the database is open
db.once("open", () => {
    console.log("Connected to MongoDB!");
});