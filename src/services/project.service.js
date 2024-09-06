import Project from '../models/project.model.js';

class ProjectService {
    static async addNewProject(projectDetails) {
        const newProject = new Project(projectDetails);
        await newProject.save();
    }
}

export default ProjectService;