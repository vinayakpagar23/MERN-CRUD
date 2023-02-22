import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from './database/db.js';
const app = express();
dotenv.config();


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = '8080';

Connection(USERNAME, PASSWORD);
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));