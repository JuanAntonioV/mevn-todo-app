import { Request, Response } from 'express';

export const getAllTodos = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ message: 'Get all todos' });
    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
};
