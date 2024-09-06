import mongoose from "mongoose";

const percentageValidator = {
	validator: function (val) {
		return val >= 0 && val <= 100;
	},
	message: "Invalid Percentage"
}


// User Schema
const projectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Title is required"]
	},

	description: {
		type: String,
		required: [true, "Description is required"]
	},

	status: String,

	rewardPercentages: {
		_id: false,
		level1: {
			type: Number,
			validate: percentageValidator
		},
		level2: {
			type: Number,
			validate: percentageValidator
		},
		level3: {
			type: Number,
			validate: percentageValidator
		},
		level4: {
			type: Number,
			validate: percentageValidator
		},
		level5: {
			type: Number,
			validate: percentageValidator
		},
		level6: {
			type: Number,
			validate: percentageValidator
		},
		level7: {
			type: Number,
			validate: percentageValidator
		},
		level8: {
			type: Number,
			validate: percentageValidator
		},
		level9: {
			type: Number,
			validate: percentageValidator
		},
		level10: {
			type: Number,
			validate: percentageValidator
		}
	}
}, { timestamps: true });


const Project = mongoose.model('Project', projectSchema);
export default Project;