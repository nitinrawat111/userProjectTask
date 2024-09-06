import Transaction from "../models/transaction.model.js";
import Project from "../models/project.model.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";

class TransactionService {
    static async addNewTransaction(transactionDetails) {
        const newTransaction = new Transaction(transactionDetails);

        await newTransaction.validate();

        // Finding project with given Id
        const project = await Project.findOne( { _id: newTransaction.projectId }).lean().exec();
        if(!project)
            throw new ApiError(400, "ProjectId is not a valid reference");

        const user = await User.findOneAndUpdate(
            { _id: newTransaction.userId },
            { 
                $push: {
                    projectTransactions: {
                        projectId: newTransaction.projectId,
                        date: newTransaction.date,
                        transactionAmount: newTransaction.amount,
                    }
                }
            }
        ).lean().exec();
        if(!user)
            throw new ApiError(400, "UserId is not a valid reference");

        await newTransaction.save( { validateBeforeSave: false } );
    }
}

export default TransactionService;