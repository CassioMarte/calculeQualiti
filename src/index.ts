import "reflect-metadata"

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


import 'express-async-error' //error
import { ErrorHandleMiddleare } from "./error/ErrorHandleMiddeware";


import { AppDataSource } from "./database/datasource";

AppDataSource.initialize()
    .then(() => {
        console.log('Database running')

        const app = express()
        app.use(ErrorHandleMiddleare.handleError)

        dotenv.config()
        app.use(cors())
        app.use(express.json())


        app.listen(process.env.PORT, () => {
            console.log("Running, welcome.")
        })

    })


