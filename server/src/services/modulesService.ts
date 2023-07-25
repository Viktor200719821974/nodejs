import { UploadedFile } from 'express-fileupload';

import { IModule } from '../interfaces';
import { model } from '../models';
import { saveImageService } from './saveImageService';

class ModulesService {
    async getModules(): Promise<IModule[]> {
        return model.Module.findAll();
    }
    
    async getModulesByTheme(themeId: number): Promise<IModule[]> {
        let modules;
        if (themeId !== 0) {
            modules = await model.Module.findAll({ where: { themeId } });
        } else {
            modules = await model.Module.findAll();
        }
        return modules;
    }

    async getModuleById(id: number): Promise<IModule | null> {
        return model.Module.findOne({ 
            where: { id },
            include: [
                { model: model.Lesson, as: 'lessons' },
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            }, 
        });
    }

    async createModule(module: IModule, image: UploadedFile): Promise<IModule> {
        const fileName = await saveImageService.saveImage(image);
        return model.Module.create({ ...module, image_module: fileName });
    }

    async findModuleByNumberByThemeId(
        themeId: number,
        moduleNumber: number,
    ): Promise<IModule | null> {
        return model.Module.findOne({ 
            where: { themeId, moduleNumber },
        });
    }
}

export const modulesService = new ModulesService();
