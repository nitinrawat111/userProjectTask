import { ApiResponse } from '../utils/ApiResponse.js';
import UserService from '../services/user.service.js';

class UserController {
    static async addNewUser (req, res, next) {
        await UserService.addNewUser(req.body);
        return ApiResponse(res, 200, "User Successfully Created");
    };
}

export default UserController;