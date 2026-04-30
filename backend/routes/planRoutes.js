// Import Express — needed to access the Router factory function
const express = require('express')

// Create a Router instance
// keeping route definitions modular and out of the main server.js file
const router = express.Router()

// Import CRUD controller functions from noteController.js
// Each function handles exactly one operation and is mapped to a route + HTTP method below

const {
    getPlans,    // GET — fetch all plans
} = require('../controllers/planController')

router.route('/').get(getPlans)
// router.route('/:id').get(protect, getPlan) // In case I decide to allow specific fetch


// Export this router so server.js can mount it:
// app.use('/api/plans', require('./routes/planRoutes'))
// All routes defined above are relative to that /api/notes base path
module.exports = router