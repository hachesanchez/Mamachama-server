const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: false,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      minlength: [3, 'Username is too short']
    },
    avatar: {
      type: String,
      required: [true, 'Profile picture is mandatory']
    },
    description: {
      type: String,
      required: [true, 'Description is mandatory']
    },
    relation: {
      type: String,
      default: 'Collaborator',
      enum: ['Team Mamachama', 'Collaborator', 'Partner'],
      required: [true, 'Relation with Mamachama must be specified']
    },
    projects: [{
      type: Schema.Types.ObjectId,
      ref: 'Project'
    }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
