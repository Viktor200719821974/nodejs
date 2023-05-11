import { IModule } from '../interfaces';
import { model } from '../models';

class ModulesService {
    async getModules(): Promise<IModule[]> {
        return model.Module.findAll();
    }

    async createModule(module: IModule): Promise<IModule> {
        return model.Module.create({ ...module });
    }
}

export const modulesService = new ModulesService();