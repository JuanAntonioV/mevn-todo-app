import { Router } from 'express';
import {
    addTodo,
    deleteTodo,
    getAllTodos,
    getOneTodo,
    updateTodo,
} from '../controllers/todoController';

const TodoRouter = Router();

TodoRouter.get('/', getAllTodos);
TodoRouter.get('/:id', getOneTodo);
TodoRouter.delete('/:id', deleteTodo);
TodoRouter.post('/', addTodo);
TodoRouter.put('/:id', updateTodo);

export default TodoRouter;
