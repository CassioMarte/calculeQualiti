import {Request, Response} from 'express'

export class UserController{
     async createUser(req: Request, res:Response):Promise<any>{
       const body = req.body

       return res.send('Usuário criado com sucesso!');
     }
}

