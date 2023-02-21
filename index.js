import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import tamuRoutes from "./routes/tamuRoutes.js";

const app = express();
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected...'));

app.use(cors());
app.use(express.json());
app.use(tamuRoutes);

app.listen(6000, ()=> console.log('Server up and running...'));