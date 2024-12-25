import { DataSourceOptions } from 'typeorm'
import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config()

const databaseCOnfig: DataSourceOptions = {
    type: 'sqlite',
    database: './src/database/database.sqlite',
    entities: ['./src/database/entities/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    // synchronize: false,
    logging: false
}

const configurations = {
    production:{
        ...databaseCOnfig, 
        database: path.join(__dirname, '..', 'database', 'database.sqlite'),
        synchronize: false, // Por segurança, desabilitar em produção
        // migrationsRun: true
    },
    test:{
        ...databaseCOnfig,
       // database: ':memory:', // Banco em memória para testes
        database: './src/database/database.test.sqlite' ,
        migrationsRun: true, // Isso fará com que as migrations rodem automaticamente criando a tabela baseado nas migarions
        synchronize: false, // Recria as tabelas a cada teste baseado nas entidades 
        dropSchema: true // Limpa o banco a cada teste

        //ler sobre no readme.md
    }
} as const ;


export const getDatabaseConfig = (env: 'production' | 'test'):DataSourceOptions=>{
    return configurations[env];
}

// import { DataSourceOptions } from 'typeorm';
// import dotenv from 'dotenv';

// dotenv.config();

// const baseConfig: DataSourceOptions = {
//     type: 'postgres',
//     synchronize: false,
//     entities: ['src/entities/*.ts'],
//     migrations: ['src/migrations/*.ts'],
// };

// const configurations = {
//     production: {
//         ...baseConfig,
//         host: process.env.DB_HOST,
//         port: parseInt(process.env.DB_PORT || '5432'),
//         username: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//     },
//     test: {
//         ...baseConfig,
//         host: process.env.TEST_DB_HOST || 'localhost',
//         port: parseInt(process.env.TEST_DB_PORT || '5432'),
//         username: process.env.TEST_DB_USER || 'test',
//         password: process.env.TEST_DB_PASSWORD || 'test',
//         database: process.env.TEST_DB_NAME || 'test_db',
//         dropSchema: true, // Limpa o banco a cada teste
//         synchronize: true // Cria as tabelas automaticamente
//     }
// } as const;

// export const getDatabaseConfig = (env: 'production' | 'test'): DataSourceOptions => {
//     return configurations[env];
// };