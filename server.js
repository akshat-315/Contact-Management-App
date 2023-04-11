const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const validateToken = require('./middleware/validateTokenHandler');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

connectDb();

// app.use(validateToken);

app.use(express.json());

app.use(errorHandler);

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});