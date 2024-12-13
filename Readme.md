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

//https://claude.ai/chat/7e6bde7b-c822-4c71-8729-2e93660abaad