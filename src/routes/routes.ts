//com injecção 

import { Router } from 'express'
import { UserController } from '../controllers/User.Controller'
import { UserRepository } from '../Repositories/User.Repository'
import { SurvyeRepository } from '../Repositories/Survie.Repository'
import { SurveyController } from '../controllers/Survye.Controller'

export const routes = Router()

//user
const userRepository = new UserRepository()
const userController = new UserController(userRepository)

routes.post('/user', (req, res) => userController.createUser(req, res))
//routes.post('/user', userController.createUser)

//survye
const surveysRepository = new SurvyeRepository()
const surveyController = new SurveyController(surveysRepository)

routes.post('/survye', surveyController.create)





//Normal

// import { Router } from 'express'
// import { UserController } from '../controllers/User.Controller'

// export const routes = Router()

// const userController = new UserController(); 

// routes.post('/users', userController.createUser);