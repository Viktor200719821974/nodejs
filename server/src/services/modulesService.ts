import { IModule } from '../interfaces';
import { model } from '../models';

class ModulesService {
    async getModules(themeId: number): Promise<IModule[]> {
        let modules;
        if (themeId !== 0) {
            modules = await model.Module.findAll({ where: { themeId } });
        } else {
            modules = await model.Module.findAll();
        }
        return modules;
    }

    async createModule(module: IModule): Promise<IModule> {
        return model.Module.create({ ...module });
    }

    async findModuleByNumberByThemeId(
        themeId: number,
        moduleNumber: number,
    ): Promise<IModule | null> {
        return model.Module.findOne({ where: { themeId, moduleNumber } });
    }
}

export const modulesService = new ModulesService();
