const express = require("express");
const router = express.Router();

 
const {getAllJobListings,getJobListingById,postJoblistings,updateJobListingById, deleteJobListingById}=require("../controllers/JobPostings"); 
// Signup for the company
 const {auth,isStudent,isCordinator,isAdmin}=require("../middlewares/auth");

// Job Listing
// Get All Job Listings
router.get("/getAllJoblistings",auth,getAllJobListings);
// GET a specific job listing by ID
router.get("/getJobListingById/:id", getJobListingById);
// Post Job Listing
router.post("/postJoblistings",auth ,isAdmin||isCordinator, postJoblistings);
// PUT (update) an existing job listing by id

router.put("/updateJobListingById/:id", updateJobListingById);
// DELETE a job listing by id
router.delete("/deleteJobListingById/:id", deleteJobListingById);


module.exports = router;