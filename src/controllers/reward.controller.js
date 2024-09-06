import { ApiResponse } from '../utils/ApiResponse.js';
import RewardService from '../services/transaction.service.js';

class RewardController {
    static async calculate (req, res, next) {
        await RewardService.calculate(req.body.userId);
        // return ApiResponse(res, 200, "Transaction Successfully Created");
    };
}

export default RewardController;