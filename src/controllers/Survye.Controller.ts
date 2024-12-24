import { Request, Response } from "express";
import { SurvyeRepository } from "../Repositories/Survie.Repository";


export class SurveyController {
    private survyeRepository: SurvyeRepository;

    constructor(survyeRepository: SurvyeRepository) {
        this.survyeRepository = survyeRepository
    }

    async create(req: Request, res: Response): Promise<Response> {
        const { title, description } = req.body

        const dataSurvye = this.survyeRepository.repository.create({
            title, description
        })

        const newSurvye = await this.survyeRepository.repository.save(dataSurvye)

        return res.status(201).json({
            message: 'Survye created',
            data: newSurvye
        })
    }

    async show(req: Request, res: Response) {
        const dataSurvye = this.survyeRepository.repository.find()

        res.status(200).json({
            message: 'Get all Survye',
            data: dataSurvye,
            total: (await dataSurvye).length
        })
    }
}

// import { Request, Response } from "express";
// import { SurvyeRepository } from "../Repositories/Survie.Repository";
// export class SurveyController{
//     async create(req:Request, res:Response){
//         const {title, description} = req.body;

//         const surveysRepository = new SurvyeRepository()

//         const survey = surveysRepository.repository.create({
//             title, description
//         })

//         await surveysRepository.repository.save(survey)

//         res.status(201).json({
//             message: 'Survye created',
//             data:survey
//         })
//     }

//     async show(req:Request, res:Response){
//         const surveysRepository = new SurvyeRepository()

//         const all = surveysRepository.repository.find()

//         res.status(200).json({
//           message: 'Get all Survye',
//           data: all, 
//           total: (await all).length
//         })
//     }
// }