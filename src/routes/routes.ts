//com injecção 

import { Router } from 'express'
import { UserController } from '../controllers/User.Controller'
import { UserRepository } from '../Repositories/User.Repository'

const routes = Router()

const userRepository = new UserRepository

const userController = new UserController(userRepository)

routes.post('/user', userController.createUser())


//Normal

// import { Router } from 'express'
// import { UserController } from '../controllers/User.Controller'

// export const routes = Router()

// const userController = new UserController(); 

// routes.post('/users', userController.createUser);