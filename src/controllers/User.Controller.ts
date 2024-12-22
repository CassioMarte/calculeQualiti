import { Request, Response } from 'express'
// import { AppDataSource } from '../database/datasource'
import { Users } from '../database/entities/User.entities'
import { AppError } from '../error/AppError'

//repositorio externo e personalizado
import { UserRepository } from '../Repositories/User.Repository'

/**
 * forma com injeção de dependencia 
 * 
 */

// Interface para o corpo da requisição
export interface CreateUserRequest extends Request {
  body: {
    name: string;
    email: string;
    phone: string;
  };
}

export class UserController {
  private userRepository: UserRepository;

  // Injeção de dependência via construtor
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(req: CreateUserRequest, res: Response): Promise<Response> {
    const { name, email, phone } = req.body;

    try {
      const userExists = await this.userRepository.findByEmail(email);
      if (userExists) {
        throw new AppError('User already exists');
      }

      const dataUser = this.userRepository.repository.create({ name, email, phone });
      const newUser = await this.userRepository.repository.save(dataUser);

      return res.status(201).json({
        message: "Usuario criado com sucesso",
        data: newUser
      });

    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}


/**
 * terceira forma com constant
 */

// export interface CreateUserRequest extends Request {
//   body: {
//     name: string;
//     email: string;
//     phone: string;
//   };
// }


// export class UserController{
//   async createUser(req:CreateUserRequest, res:Response):Promise<Response>{
//     const userRepository = new UserRepository()
//     const {name, email, phone} = req.body

//     try {
//       const userExists = await userRepository.findByEmail(email) 
     
//       if(userExists){
//         throw new AppError('User already exists')
//       }

//     const dataUser = userRepository.repository.create({
//       name, email, phone
//     })

//     const newUser = await userRepository.repository.save(dataUser)

//     return res.status(201).json({
//               message: "Usuario criado com sucesso",
//               data: newUser
//             })
      
//     } catch (error) {
//       console.error(error)
//       throw error
//     }
//   }
// }


/**
 * Segunda forma melhor que a primeira mas eu estou usando .getRepository(Users) dentro 
 * da controller o que não é o ideal; por isso criamos Repositories
 */

// export class UserController {

//   async createUser(req: Request, res: Response): Promise<Response> {
//     const userRepository = AppDataSource.getRepository(Users)
//     const { name, email, phone } = req.body

//     try {
//       const userExistits = await userRepository.findOne({where:{email}})
     
//       if(userExistits){
//        throw new AppError("User already exists")
//       }
      
//       const dataUser = userRepository.create({
//         name, email, phone
//       })

//       const newUser = userRepository.save(dataUser)

//       return res.status(201).json({
//         message: "Usuario criado com sucesso",
//         data: newUser
//       })
//     } catch (error) {
//       console.error(error)
//       throw error
//     }
//   }
// }

/**
 * Primeira forma a mais simples
 */

// export class UserController {
//   async createUser(req: Request, res: Response): Promise<Response> {
//     const { name, email, phone } = req.body

//     const userRepository = AppDataSource.getRepository(Users)

//     const dataUser = userRepository.create({
//       name,
//       email,
//       phone
//     })

//    const newUser = await userRepository.save(dataUser)

//    return res.status(201).json({
//     message: "Usuario criado com sucesso",
//     data: newUser
//    })
//   }
// }

