import { Router } from 'express'
import { UserController } from '../controllers/User.Controller'

export const routes = Router()

const userController = new UserController(); // Instância do controlador

routes.post('/users', userController.createUser);