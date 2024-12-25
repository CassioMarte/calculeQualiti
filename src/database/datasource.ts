 import {DataSource} from 'typeorm'
 import {getDatabaseConfig} from './database.config'
 import 'reflect-metadata';

 const env = process.env.NODE_ENV === 'test' ? 'test' : 'production'
 
 export const AppDataSource = new DataSource(getDatabaseConfig(env))


//arquivo base que será modificado para poder rodar teste

/**
 * primeiro vou criar um config
 */

// import 'reflect-metadata'
// import { DataSource } from "typeorm";


// export const AppDataSource = new DataSource({
//     type: 'sqlite',
//     database: './src/database/database.sqlite',
//     entities: ['./src/database/entities/*.ts'],
//     migrations: ['./src/database/migrations/*.ts'],
//     synchronize: true,
//     logging: false
// })





