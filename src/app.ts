import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'express-async-errors';

import { ErrorHandleMiddleare } from './error/ErrorHandleMiddeware';
import { AppDataSource } from './database/datasource';
import { routes } from './routes/routes';

dotenv.config();

export const createApp = async () => {

    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
        console.log('Database initialized');
    }

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(routes);
    app.use(ErrorHandleMiddleare.handleError);

    return app;
};


// Verifica se já está inicializado para evitar múltiplas inicializações
//  if (!AppDataSource.isInitialized) {
//     await AppDataSource.initialize();
//     console.log('Database initialized');
// }