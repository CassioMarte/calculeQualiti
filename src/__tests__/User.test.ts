import { createApp } from '../app'
import request from 'supertest'

/**
 * A variável app será usada para armazenar a instância da aplicação Express criada
 *  na função createApp. Isso permite que ela seja compartilhada entre os diferentes
 *  testes no mesmo arquivo.
 */
let app: Express.Application;

/**
 * Para evitar repetir a inicialização da aplicação antes de cada teste individual.
* Para garantir que todos os testes compartilhem a mesma instância da aplicação, 
* o que pode economizar recursos.
 */
beforeAll(async () => {
    app = await createApp();
});

// afterAll(async () => {
//     // Aqui você pode fechar a conexão com o banco de dados se necessário
//     await (await import('../src/database/datasource')).AppDataSource.destroy();
// });

