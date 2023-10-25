import express from "express";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: '.env' });

const PORT = process.env.NODE_PORT;
const app = express();

const rootDir = path.resolve(__dirname + "/../" + "../")
app.use(express.static(rootDir));
app.listen(PORT);

