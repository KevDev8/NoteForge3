const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    plan: {
          type: mongoose.Schema.Types.ObjectId, 
          required: true,                       
          ref: 'Plan', // To associate the user with their chosen plan
        },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)