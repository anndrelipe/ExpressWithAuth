export class RoleService {
    constructor (roleRepository) {
        this.roleRepository = roleRepository;
    }

    findAll     = async () => {
        return await this.roleRepository.findAll();
    }

    create      = async (data) => {
        return await thiis.roleRepository.create(data);
    }

    findById      = async (id) => {
        return await this.roleRepository.findById(id);
    }

    updateById  = async (id, data) => {
        return await this.roleRepository.updateById(id, data);
    }

    removeById  = async (id) => {
        return await this.roleRepository.removeById(id);
    }

}