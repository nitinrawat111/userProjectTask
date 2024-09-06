import { ApiResponse } from '../utils/ApiResponse.js';
import TransactionService from '../services/transaction.service.js';

class TransactionController {
    static async addNewTransaction (req, res, next) {
        await TransactionService.addNewTransaction(req.body);
        return ApiResponse(res, 200, "Transaction Successfully Created");
    };
}

export default TransactionController;