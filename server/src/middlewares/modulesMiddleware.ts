import { NextFunction, Request, Response } from 'express';

import { modulesService } from '../services/modulesService';

class ModulesMiddleware {
    async findModuleByNumberByThemeId(req: Request, res: Response, next: NextFunction) {
        try {
            const { themeId, moduleNumber } = req.body;
            const exist = await modulesService.findModuleByNumberByThemeId(+themeId, +moduleNumber);
            console.log(exist, '>>>>>>>>>>>');
            if (exist) {
                res.status(400).json(`Module with that number: ${moduleNumber} and that theme already exist`);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const modulesMiddleware = new ModulesMiddleware();