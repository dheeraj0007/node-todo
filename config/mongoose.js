const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { MongoClient } = require("mongodb");
dotenv.config();
const conn_str = `${process.env.DATABASE_URL}`;
mongoose.connect(conn_str, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error while connecting to db"));
db.once('open', function () {
    console.log("Successfully connected to db");
})

module.exports = db;