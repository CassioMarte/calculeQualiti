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


// . synchronize
// Descrição: Quando synchronize está definido como true, o TypeORM sincroniza automaticamente o esquema do banco de dados com base nas suas entidades. Ele cria, atualiza ou remove tabelas e colunas no banco de dados para refletir as definições das entidades do TypeORM.
// Uso:
// Ideal para ambientes de desenvolvimento, pois facilita criar e ajustar rapidamente as tabelas à medida que você modifica suas entidades.
// Não recomendado para produção, pois pode causar perda de dados se algo for alterado inadvertidamente.
// Exemplo:
// Se você adicionar uma nova propriedade em uma entidade, o TypeORM automaticamente adicionará uma nova coluna correspondente no banco.
// 2. migrationsRun
// Descrição: Quando migrationsRun está definido como true, o TypeORM executa automaticamente todas as migrações pendentes sempre que você inicializa a conexão com o banco de dados.
// Uso:
// Conveniente para manter o banco de dados atualizado em ambientes de desenvolvimento ou teste sem precisar rodar manualmente os comandos para executar migrações.
// Cuidados:
// No ambiente de produção, isso pode ser perigoso sem planejamento, pois qualquer erro em uma migração pode comprometer o banco de dados.
// 3. logging
// Descrição: Controla se e como o TypeORM registra logs de atividades realizadas no banco de dados, como consultas SQL, erros ou avisos.
// Opções:
// true: Registra todas as consultas SQL e atividades (recomendado para depuração).
// false: Nenhum log é gerado.
// Tipos específicos:
// Você pode especificar os tipos de log, como "query", "error", "schema", "warn", "info", "log".
// Exemplo:
// javascript
// Copiar código
// logging: ['query', 'error'] // Apenas consultas e erros são registrados.
// Uso:
// Útil para depuração e análise de desempenho no desenvolvimento ou para monitorar falhas e comportamento do banco de dados.







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
