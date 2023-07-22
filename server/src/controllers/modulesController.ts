import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';

import { modulesService } from '../services/modulesService';

class ModulesController {
    async getModules(req: Request, res: Response, next: NextFunction) {
        try {
            const { themeId } = req.query;
            // @ts-ignore
            const modules = await modulesService.getModules(+themeId);
            res.status(200).json(modules);
        } catch (e) {
            next(e);
        }
    }

    async getModuleById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const module = await modulesService.getModuleById(+id);
            res.status(200).json(module);
        } catch (e) {
            next(e);
        }
    }

    async createModule(req: Request, res: Response, next: NextFunction) {
        try {
            const image = req.files?.image as UploadedFile;
            if (image === undefined) {
                return res.status(400).json('Not image');
            }
            const module = await modulesService.createModule(req.body, image);
            res.status(201).json(module);
        } catch (e) {
            next(e);
        }
    }
}

export const modulesController = new ModulesController();
