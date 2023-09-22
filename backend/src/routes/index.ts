import AppRouter from './appRoute';
import TodoRouter from './todoRoute';

const appRouter = (app: any) => {
    app.use('/', AppRouter);
    app.use('/todos', TodoRouter);
};

export default appRouter;
