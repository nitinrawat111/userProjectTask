import mongoose from "mongoose";
import validator from "validator";

// User Schema
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Username is required"]
	},

	email: {
		type: String,
		required: [true, "Email is required"],
		validate: {
			validator: function (email) {
				return validator.isEmail(email);
			},
			message: "Invalid Email"
		}
	},

	address: String,

	poolRewards: {
		type: Number,
		default: 0
	},

	referralCode: String,

	parentUserId: String,

	childrenUserIds: {
		type: [mongoose.Types.ObjectId],
		default: []
	},

	balance: {
		type: Number,
		default: 0
	},

	projectTransactions: {
		type: [
			{
				_id: false,
				projectId: mongoose.Types.ObjectId,
				date: Date,
				transactionAmount: Number
			}
		]
	},
}, { timestamps: true });


const User = mongoose.model('User', userSchema);
export default User;