import { NextFunction, Request, Response } from 'express'
import { AppError } from './AppError'

export class ErrorHandleMiddleare{
  public static handleError(
    error:Error,
    req: Request,
    res: Response,
    next: NextFunction
  ){
   if(error instanceof AppError){
    res.status(error.statusCode).json({
        type: "error",
        message: error.message
    })
   }
   
   res.status(500).json({
    type: 'error',
    message: "Internal server error"
   })
  }
}
