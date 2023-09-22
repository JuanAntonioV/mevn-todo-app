import { Request, Response } from 'express';
import _ from 'lodash';
import todoModel from '../models/todoModel';
import {
    errorMessage,
    errorResponse,
    notFoundResponse,
    okResponse,
    serverErrorResponse,
} from '../utils/response';
import mongoose from 'mongoose';

export const getAllTodos = async (req: Request, res: Response) => {
    try {
        const todos = await todoModel.find();

        if (_.isEmpty(todos)) return notFoundResponse(res, 'Tidak ada todo');

        return okResponse(res, todos);
    } catch (err: any) {
        return serverErrorResponse(res, err);
    }
};

export const addTodo = async (req: Request, res: Response) => {
    try {
        const { todo, author } = req.body;

        if (!todo || !author)
            return errorResponse(res, errorMessage.ERROR_INPUT_VALIDATION, 400);

        const newTodo = new todoModel({ todo, author });

        const savedTodo = await newTodo.save();

        return okResponse(res, savedTodo);
    } catch (err: any) {
        return serverErrorResponse(res, err);
    }
};

export const getOneTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id)
            return errorResponse(
                res,
                errorMessage.ERROR_PARAMS_VALIDATION,
                400
            );

        if (!mongoose.Types.ObjectId.isValid(id))
            return notFoundResponse(res, 'Todo tidak ditemukan');

        const todo = await todoModel.findById({
            _id: id,
        });

        if (!todo) return notFoundResponse(res, 'Todo tidak ditemukan');

        return okResponse(res, todo);
    } catch (err: any) {
        return serverErrorResponse(res, err);
    }
};

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id)
            return errorResponse(
                res,
                errorMessage.ERROR_PARAMS_VALIDATION,
                400
            );

        if (!mongoose.Types.ObjectId.isValid(id))
            return notFoundResponse(res, 'Todo tidak ditemukan');

        const todo = await todoModel.findByIdAndDelete({
            _id: id,
        });

        if (!todo) return notFoundResponse(res, 'Todo tidak ditemukan');

        return okResponse(res, todo);
    } catch (err: any) {
        return serverErrorResponse(res, err);
    }
};

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { todo, author } = req.body;

        if (!id)
            return errorResponse(
                res,
                errorMessage.ERROR_PARAMS_VALIDATION,
                400
            );

        if (!todo || !author)
            return errorResponse(res, errorMessage.ERROR_INPUT_VALIDATION, 400);

        if (!mongoose.Types.ObjectId.isValid(id))
            return notFoundResponse(res, 'Todo tidak ditemukan');

        const updatedTodo = await todoModel.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                todo,
                author,
            },
            {
                new: true,
            }
        );

        if (!updatedTodo) return notFoundResponse(res, 'Todo tidak ditemukan');

        return okResponse(res, updatedTodo);
    } catch (err: any) {
        return serverErrorResponse(res, err);
    }
};
