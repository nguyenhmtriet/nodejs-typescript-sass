import express from "express";
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const PORT = process.env.NODE_PORT;
const app = express();

app.use(express.static(__dirname));
app.listen(PORT);