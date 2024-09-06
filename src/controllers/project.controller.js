import { ApiResponse } from '../utils/ApiResponse.js';
import ProjectService from '../services/project.service.js';

class ProjectController {
    static async addNewProject (req, res, next) {
        await ProjectService.addNewProject(req.body);
        return ApiResponse(res, 200, "Project Successfully Created");
    };
}

export default ProjectController;