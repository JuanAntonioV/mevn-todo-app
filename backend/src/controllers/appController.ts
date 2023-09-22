import { Request, Response } from 'express';
import { okResponse } from '../utils/response';

export const getAppDetails = (req: Request, res: Response): Response => {
    const name = process.env.APP_NAME || 'Express API';
    const version = process.env.APP_VERSION || '1.0.0';
    const author = process.env.APP_AUTHOR || 'Juan Antonio Vivaldy Saragih';
    const description =
        process.env.APP_DESCRIPTION ||
        'Todos Application build with Express REST API and TypeScript';

    const packagesVersion = {
        express: '^4.18.2',
        typescript: '^5.2.2',
        node: '18.18.0',
        npm: '9.6.4',
        pnpm: '8.7.6',
    };

    const appDetails = {
        name,
        version,
        author,
        description,
        packagesVersion,
    };

    return okResponse(res, appDetails);
};
