import { createApp } from './app';

createApp()
    .then((app) => {
        app.listen(process.env.PORT, () => {
            console.log(`Running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error initializing the app:', err);
        process.exit(1);
    });



    
//versão mais robusta 
// import { createApp } from './app';

// createApp()
//     .then((app) => {
//         const port = process.env.PORT || 3000;
//         const server = app.listen(port, () => {
//             console.log(`Running on port ${port}`);
//         });

//         // Tratamento de erro do servidor
//         server.on('error', (error) => {
//             console.error('Server error:', error);
//             process.exit(1);
//         });
//     })
//     .catch((err) => {
//         console.error('Error initializing the app:', err);
//         process.exit(1);
//     });




    //antes dos testes

// import "reflect-metadata"

// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// import 'express-async-error' ;
// import { ErrorHandleMiddleare } from "./error/ErrorHandleMiddeware";


// import { AppDataSource } from "./database/datasource";
// import { routes } from "./routes/routes";

// AppDataSource.initialize()
//     .then(() => {
//         console.log('Database running')

//         const app = express()
//         app.use(ErrorHandleMiddleare.handleError)

//         dotenv.config()
//         app.use(cors())
//         app.use(express.json())

//         app.use(routes)


//         app.listen(process.env.PORT, () => {
//             console.log("Running, welcome.")
//         })

//     })


    

//https://github.com/rocketseat-education/nlw-04-nodejs

//https://app.rocketseat.com.br/classroom/nlw-04-mission-nodejs/lesson/nlw-4-workshop-01-1