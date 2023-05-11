import { NextFunction, Request, Response } from 'express';
import { modulesService } from '../services/modulesService';

class ModulesController {
    async getModules(req: Request, res: Response, next: NextFunction) {
        try {
            const modules = await modulesService.getModules();
            res.status(200).json(modules);
        } catch (e) {
            next(e);
        }
    }

    async createModule(req: Request, res: Response, next: NextFunction) {
        try {
            const module = await modulesService.createModule(req.body);
            res.status(200).json(module);
        } catch (e) {
            next(e);
        }
    }
}

export const modulesController = new ModulesController();