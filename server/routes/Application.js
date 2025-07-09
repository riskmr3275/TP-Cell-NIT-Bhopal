const express = require("express");
const router = express.Router();
const {auth,isCordinator,isAdmin}=require("../middlewares/auth")

const {
    getAllApplications,
    getAllInterviewSchedule,
    applicationForCord,
    getAllApplicationsByJobId,
} = require("../controllers/Application");

router.post("/applicationForCord",auth,isCordinator, applicationForCord);
router.post("/getAllAplicationsByJobId",auth,isCordinator, getAllApplicationsByJobId);

router.get("/getAllAplication",auth, getAllApplications);
router.get("/getAllInterviewSchedule", getAllInterviewSchedule);
 
 
module.exports = router;
  