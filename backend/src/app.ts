import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import { getAppUrl } from './utils/helpers';
import appRouter from './routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

appRouter(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at ${getAppUrl()}`);
});
