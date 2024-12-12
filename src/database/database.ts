import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite", // Define o tipo de banco como SQLite
    database: "./database.sqlite", // Caminho do arquivo do banco de dados
    entities: [__dirname + "/entities/*.ts"], // Localização das entidades
    synchronize: true, // Sincroniza o schema automaticamente
    logging: false, // Desabilita logs
  });
  


// em produção

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "test",
//     password: "test",
//     database: "test",
//     synchronize: true,
//     logging: true,
//     entities: [Post, Category],
//     subscribers: [],
//     migrations: [],
// })