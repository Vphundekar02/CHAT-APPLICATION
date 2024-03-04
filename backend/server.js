import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import authRoutes from "./routers/auth.routes.js";
import messageRoutes from "./routers/message.routes.js";
import userRoutes from "./routers/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

// const app = express();
const port = process.env.PORT || 5000;

const __dirname = path.resolve();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

// app.get("/", (req,res) => {
//     res.send('Hi I am Vinay');
// });


server.listen(port, () => {
    connectToMongoDB();
    console.log(`Server is running on port : ${port}`);
});