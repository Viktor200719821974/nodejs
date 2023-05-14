import { NextFunction, Request, Response } from 'express';
import { modulesService } from '../services/modulesService';

class ModulesController {
    async getModules(req: Request, res: Response, next: NextFunction) {
        try {
            const { themeId } = req.query;
            //@ts-ignore
            const modules = await modulesService.getModules(+themeId);
            res.status(200).json(modules);
        } catch (e) {
            next(e);
        }
    }

    async createModule(req: Request, res: Response, next: NextFunction) {
        try {
            const module = await modulesService.createModule(req.body);
            res.status(201).json(module);
        } catch (e) {
            next(e);
        }
    }
}

export const modulesController = new ModulesController();