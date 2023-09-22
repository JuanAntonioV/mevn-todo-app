import { Response } from 'express';

interface ResponseFormatType {
    code?: number;
    status: boolean;
    message?: string;
    data?: any;
}

export const okResponse = (
    res: Response,
    data?: any,
    code: number = 200,
    status: boolean = true
) => {
    const format: ResponseFormatType = {
        status,
        data,
    };

    return res.status(code).json(format);
};

export const notFoundResponse = (
    res: Response,
    message: string,
    code: number = 200,
    status: boolean = false
) => {
    const format: ResponseFormatType = {
        status,
        message,
        data: null,
    };

    return res.status(code).json(format);
};

export const errorResponse = (
    res: Response,
    message: string,
    code: number = 400,
    status: boolean = false
) => {
    const format: ResponseFormatType = {
        status,
        message,
    };

    return res.status(code).json(format);
};

export const serverErrorResponse = (
    res: Response,
    message: string,
    code: number = 500,
    status: boolean = false
) => {
    const format: ResponseFormatType = {
        status,
        message,
    };

    return res.status(code).json(format);
};
