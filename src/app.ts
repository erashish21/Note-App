import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import noteRoutes from './routes/noteRoutes';
import cors from 'cors';
const app = express();
dotenv.config();


app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use('/api', noteRoutes);

const corsOptions = {
   origin: ['http://localhost:3000', 'https://note-app-89bt.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // If you need to send cookies or auth headers
};
app.use(cors(corsOptions));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
