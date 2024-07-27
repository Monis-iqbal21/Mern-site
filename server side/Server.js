require("dotenv").config();

const express = require("express");
const cors =  require("cors")
const app = express();
const authRoute = require("./server/router/auth-router");
const ContactRoute = require("./server/router/contact-router")
const { connect } = require("mongoose");
const connectDB = require("./server/utils/db");
const errorMiddleware = require("./server/validator/error-middelware");


// CORS policy

const corsOption = {
    origin:"http://localhost:5173",
    methods : "GET, POST , DELETE, PUT , PATCH , HEAD", 
    credentials: true,
}
app.use(cors(corsOption))



app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/contact", ContactRoute);
app.use(errorMiddleware);

const PORT = 5001;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server running at port ${PORT}`);
    });
})