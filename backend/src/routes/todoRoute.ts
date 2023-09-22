import { Router } from 'express';
import { getAllTodos } from '../controllers/todoController';

const TodoRouter = Router();

TodoRouter.get('/', getAllTodos);

export default TodoRouter;
