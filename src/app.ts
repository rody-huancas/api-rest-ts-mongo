import "dotenv/config"
import express from 'express';
import cors from 'cors';
// RUTAS
import { router } from "./routes"
// DB
import db from './config/mongo';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
db().then(()=> console.log("Connect to database successfully!"));
app.listen(PORT);