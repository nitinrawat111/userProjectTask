import User from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';

class UserService {
    static async addNewUser(userDetails) {
        const newUser = new User(userDetails);

        await newUser.validate();

        const existingUser = await User.findOne(
            {
                $or: [
                    { username: newUser.username },
                    { email: newUser.email }
                ]
            }
        ).lean().exec();
        if(existingUser)
            throw new ApiError(409, "User Already Exists");

        await newUser.save( { validateBeforeSave: false } );
    }
}

export default UserService;