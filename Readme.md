npm init 

npm install express

npm install typescript -D

npx tsc --init

npm install ts-node-dev -D

npm i --save-dev @types/express

npm install cors dotenv

npm i --save-dev @types/cors

npm install typeorm --save
npm install reflect-metadata --save
npm install @types/node --save-dev

npm install sqlite3 --save

tsconfig.json
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true,

"dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/index.ts"

//  import 'reflect-metadata';
//  import { DataSource } from "typeorm";
//
// export const AppDataSource = new DataSource({
//   type: "sqlite",
//   database: "./src/database/database.sqlite",
//   entities: [__dirname + "/entities/*.ts"],
//   migrations: [__dirname + "/migrations/*.ts"],
//   synchronize: true,
//   logging: false
// });


// export default class AppError {
//     public readonly message: string;
//     public readonly statusCode: number;
  
//     constructor(message: string, statusCode = 400) {
//       this.message = message;
//       this.statusCode = statusCode;
//     }
//   }


Para poder rodar as migrations:

no terminal :npx typeorm migration:create ./src/o caminho para past/CreateUser (para gerar uma migrate de user)

ex:  npx typeorm migration:create ./src/database/migrations/CreateUser

ou  instalo: 

install npm install -D cross-env tsconfig-paths

e no script eu coloco:

padrão mac ou linux
"migration:create": "cross-env ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:create ./src/database/migrations/$npm_config_name$"

padrão windows 
"migration:create": "cross-env-shell ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:create ./src/database/migrations/%npm_config_name%"


"scripts": {
  "migration:create": "cross-env ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:create ./src/database/migrations/%npm_config_name%",

  "migration:run": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d ./src/database/datasource.ts"
}

Criar migração:
npm run migration:create --name=NomeDaMigracao
Exemplo:
npm run migration:create --name=CreateUsersTable

Rodar migrações:
npm run migration:run

ou  

"scripts": {
  "migration:create": "typeorm migration:create",
  "migration:run": "typeorm migration:run",
  "migration:revert": "typeorm migration:revert"
}



migration-run
npx ts-node ./node_modules/typeorm/cli.js migration:run --dataSource ./caminho ate datasource
ex:
npx ts-node ./node_modules/typeorm/cli.js migration:run --dataSource ./src/database/datasource.ts



shift + alt + o organiza os imports