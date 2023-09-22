import { Router } from 'express';
import { getAppDetails } from '../controllers/appController';

const AppRouter = Router();

AppRouter.get('/', getAppDetails);

export default AppRouter;
