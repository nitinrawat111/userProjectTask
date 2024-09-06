import mongoose from "mongoose";
import validator from "validator";

// User Schema
const transactionSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
		required: true
	},

	projectId: {
		type: mongoose.Types.ObjectId,
		ref: 'Project',
		required: true
	},

	amount: {
		type: Number,
		required: true
	},

	date: {
		type: Date,
		default: Date.now
	}
}, { timestamps: true });


const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;