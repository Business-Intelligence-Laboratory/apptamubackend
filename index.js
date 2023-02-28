import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import tamuRoutes from "./routes/tamuRoutes.js";

const app = express();
mongoose.connect('mongodb+srv://lbiftiunandcloud:lbiftiunandcloud@programlab.5p1rj21.mongodb.net/tamuLab', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("listening", console.error.bind(console, "Listening MongoDB:"));

// app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(tamuRoutes);

app.listen(1208, ()=> console.log('Server up and running...'));