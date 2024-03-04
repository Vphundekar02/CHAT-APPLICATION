import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routers/auth.routes.js";
import messageRoutes from "./routers/message.routes.js";
import userRoutes from "./routers/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


// app.get("/", (req,res) => {
//     res.send('Hi I am Vinay');
// });


app.listen(port, () => {
    connectToMongoDB();
    console.log(`Server is running on port : ${port}`);
});