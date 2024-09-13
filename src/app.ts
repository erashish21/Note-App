import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import noteRoutes from './routes/noteRoutes';

const app = express();
dotenv.config();


app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use('/api', noteRoutes);

const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
