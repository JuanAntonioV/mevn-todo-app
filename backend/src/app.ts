import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import { getAppUrl } from './utils/helpers';
import appRouter from './routes';
import mongoose, { ConnectOptions } from 'mongoose';

// Express app
const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('public'));

// MongoDB connection
const uri = process.env.MONGODB_URI || '';

const options = {
    dbName: 'mevn-todo-db',
};

mongoose
    .connect(uri, options as ConnectOptions)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));

// Routes
appRouter(app);

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at ${getAppUrl()}`);
});
