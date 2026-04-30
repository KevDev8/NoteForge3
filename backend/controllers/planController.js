const asyncHandler = require('express-async-handler')
 
const Plan = require('../model/planModel')


// http://localhost:5555/api/plans/
const getPlans = asyncHandler(async (req, res) =>{
  
    const plans = await Plan.find()
    res.status(200).json(plans)
})


// Export all four functions so noteRoutes.js can attach them to the corresponding HTTP endpoints
module.exports = {
    getPlans
}