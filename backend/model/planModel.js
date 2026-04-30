const mongoose = require('mongoose') // Mongoose is the ODM (Object Data Modeling) library that lets us define schemas and interact with MongoDB using JavaScript objects

// Define the shape and rules for documents in the 'plans' collection
const planSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a plan name'],
    },
    price: {
      type: Number,
    },
    commercial_use: {
      type: Boolean,
      required: [true, 'Please specify commercial use'],
    },
    user_limit: {
      type: Number,
      required: [true, 'Please specify user limit'],
    },
    project_limit: {
      type: Number,
    },
    features: {
      type: [String],
      required: true,
    },
  },
)

// Compile the schema into a Model and export it.
// Mongoose will map this to a MongoDB collection named 'notes' (lowercased + pluralized automatically).
// Other files import this to query, create, update, or delete notes: e.g. await Note.create({...})
module.exports = mongoose.model('Plan', planSchema)